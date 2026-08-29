# TinyPNG 圖片批量壓縮腳本
# 使用方法：
# 1. 去 https://tinypng.com/developers 註冊免費帳戶（每月 500 張免費）
# 2. 複製你的 API Key
# 3. 將下方 $API_KEY 換成你的 Key，或先執行： $env:TINIFY_API_KEY = '你的Key'
# 4. 執行： pwsh -File compress-images.ps1
#    （或 powershell -ExecutionPolicy Bypass -File compress-images.ps1）

# ===== 配置 =====
$API_KEY = if ($env:TINIFY_API_KEY) { $env:TINIFY_API_KEY } else { "YOUR_API_KEY" }
$SOURCE_FOLDER = Join-Path $PSScriptRoot "jpg"
$OUTPUT_FOLDER = Join-Path $PSScriptRoot "jpg-compressed"
$API_URL = "https://api.tinify.com/shrink"

# Windows PowerShell 5.1 預設可能使用舊版 TLS，強制 TLS 1.2 以連上 api.tinify.com
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12

# 讓中文訊息在各種終端機都能正確顯示（部分主機不支援時略過）
try { [Console]::OutputEncoding = [System.Text.Encoding]::UTF8 } catch {}

# ===== 前置檢查 =====
if ($API_KEY -eq "YOUR_API_KEY" -or [string]::IsNullOrWhiteSpace($API_KEY)) {
    Write-Host "[錯誤] 尚未設定 API_KEY" -ForegroundColor Red
    Write-Host "  1. 去 https://tinypng.com/developers 免費註冊" -ForegroundColor White
    Write-Host "  2. 複製你的 API Key" -ForegroundColor White
    Write-Host "  3. 編輯此檔案第 10 行，或先執行： `$env:TINIFY_API_KEY = '你的Key'" -ForegroundColor White
    exit 1
}

if (!(Test-Path -LiteralPath $SOURCE_FOLDER)) {
    Write-Host "[錯誤] 找不到來源資料夾： $SOURCE_FOLDER" -ForegroundColor Red
    exit 1
}

if (!(Test-Path -LiteralPath $OUTPUT_FOLDER)) {
    New-Item -ItemType Directory -Path $OUTPUT_FOLDER -Force | Out-Null
    Write-Host "[OK] 已建立輸出資料夾： $OUTPUT_FOLDER" -ForegroundColor Green
}

# ===== 取得所有圖片 =====
$images = Get-ChildItem -LiteralPath $SOURCE_FOLDER -Recurse -File |
    Where-Object { $_.Extension -in '.jpg', '.jpeg', '.png' }

if (-not $images -or @($images).Count -eq 0) {
    Write-Host "[提示] 來源資料夾內找不到 jpg / jpeg / png 圖片" -ForegroundColor Yellow
    exit 0
}

$images = @($images)
$sourceSizeMB = [math]::Round((($images | Measure-Object -Property Length -Sum).Sum / 1MB), 1)

Write-Host "==================================================" -ForegroundColor Cyan
Write-Host " TinyPNG 圖片批量壓縮工具" -ForegroundColor Cyan
Write-Host " 來源： $SOURCE_FOLDER" -ForegroundColor Gray
Write-Host " 找到 $($images.Count) 個圖片檔案，共 $sourceSizeMB MB" -ForegroundColor Yellow
Write-Host "==================================================`n" -ForegroundColor Cyan

$auth = [Convert]::ToBase64String([Text.Encoding]::ASCII.GetBytes("api:$API_KEY"))
$authHeader = @{ Authorization = "Basic $auth" }

$successCount = 0
$failCount = 0
$totalOriginal = 0.0
$totalCompressed = 0.0

foreach ($image in $images) {
    # 以「長度切片」取相對路徑，避開 .Replace() 的大小寫問題，並保留子資料夾結構
    $relPath = $image.FullName.Substring($SOURCE_FOLDER.Length).TrimStart('\', '/')
    $outputPath = Join-Path $OUTPUT_FOLDER $relPath
    $outputDir = Split-Path -Parent $outputPath

    if (!(Test-Path -LiteralPath $outputDir)) {
        New-Item -ItemType Directory -Path $outputDir -Force | Out-Null
    }

    Write-Host "處理： $relPath" -ForegroundColor Cyan -NoNewline

    try {
        $originalSize = $image.Length / 1KB

        # 1) 上傳原圖： POST https://api.tinify.com/shrink，成功回傳 201 + Location 標頭
        $response = Invoke-WebRequest -Uri $API_URL `
            -Method Post `
            -Headers $authHeader `
            -InFile $image.FullName `
            -ContentType 'application/octet-stream' `
            -UseBasicParsing

        if ($response.StatusCode -ne 201) {
            throw "非預期狀態碼 $($response.StatusCode)"
        }

        $location = $response.Headers['Location']
        if ($location -is [array]) { $location = $location[0] }
        if ([string]::IsNullOrWhiteSpace($location)) {
            throw "回應缺少 Location 標頭"
        }

        # 2) 下載壓縮後的圖片
        Invoke-WebRequest -Uri $location `
            -Method Get `
            -Headers $authHeader `
            -OutFile $outputPath `
            -UseBasicParsing

        $compressedSize = (Get-Item -LiteralPath $outputPath).Length / 1KB
        $saved = $originalSize - $compressedSize
        $totalOriginal += $originalSize
        $totalCompressed += $compressedSize
        $successCount++

        $pct = if ($originalSize -gt 0) { [math]::Round(($saved / $originalSize) * 100, 0) } else { 0 }
        Write-Host ("  [OK] -{0}%  ({1} KB -> {2} KB)" -f $pct, [math]::Round($originalSize, 1), [math]::Round($compressedSize, 1)) -ForegroundColor Green
    }
    catch {
        Write-Host "  [失敗] $($_.Exception.Message)" -ForegroundColor Red
        $failCount++
    }

    # 稍作停頓，避免觸發 API 頻率限制
    Start-Sleep -Milliseconds 300
}

$savedMB = [math]::Round((($totalOriginal - $totalCompressed) / 1024), 2)

Write-Host "`n==================================================" -ForegroundColor Cyan
Write-Host " 壓縮完成" -ForegroundColor Green
Write-Host " 成功： $successCount    失敗： $failCount" -ForegroundColor Green
Write-Host (" 節省： {0} MB  ({1} MB -> {2} MB)" -f $savedMB, [math]::Round($totalOriginal / 1024, 2), [math]::Round($totalCompressed / 1024, 2)) -ForegroundColor Green
Write-Host " 輸出資料夾： $OUTPUT_FOLDER" -ForegroundColor Cyan
Write-Host "==================================================" -ForegroundColor Cyan

Write-Host "`n下一步：" -ForegroundColor Yellow
Write-Host "  1. 檢查 $OUTPUT_FOLDER 內的圖片品質是否可接受" -ForegroundColor White
Write-Host "  2. 確認無誤後覆蓋原圖： Copy-Item '$OUTPUT_FOLDER\*' '$SOURCE_FOLDER' -Recurse -Force" -ForegroundColor White
Write-Host "  3. 用瀏覽器測試網站顯示正常" -ForegroundColor White
