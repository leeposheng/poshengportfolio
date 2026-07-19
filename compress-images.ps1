# TinyPNG 圖片批量壓縮腳本
# 使用方法：
# 1. 去 https://tinypng.com/developers 註冊免費帳戶
# 2. 複製你的 API Key
# 3. 在下方替換 YOUR_API_KEY
# 4. 執行: powershell -ExecutionPolicy Bypass -File compress-images.ps1

# ===== 配置 =====
$API_KEY = "YOUR_API_KEY"  # 替換為你的 TinyPNG API Key
$SOURCE_FOLDER = "c:\Users\kevin\OneDrive\桌面\作品集\jpg"
$OUTPUT_FOLDER = "c:\Users\kevin\OneDrive\桌面\作品集\jpg-compressed"
$API_URL = "https://api.tinify.com/output"

# 建立輸出資料夾
if (!(Test-Path $OUTPUT_FOLDER)) {
    New-Item -ItemType Directory -Path $OUTPUT_FOLDER -Force | Out-Null
    Write-Host "✓ 已建立輸出資料夾: $OUTPUT_FOLDER" -ForegroundColor Green
}

# 取得所有圖片
$images = Get-ChildItem -Path $SOURCE_FOLDER -Recurse -Include *.jpg,*.jpeg,*.png | Where-Object {$_.PSIsContainer -eq $false}

Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan
Write-Host "TinyPNG 圖片批量壓縮工具" -ForegroundColor Cyan
Write-Host "找到 $($images.Count) 個圖片檔案" -ForegroundColor Yellow
Write-Host "預計可節省: 約 $([math]::Round(391.5 * 0.4, 1)) MB (40% 壓縮率)" -ForegroundColor Yellow
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`n" -ForegroundColor Cyan

if ($API_KEY -eq "YOUR_API_KEY") {
    Write-Host "❌ 錯誤：請先替換 API_KEY" -ForegroundColor Red
    Write-Host "步驟：" -ForegroundColor Yellow
    Write-Host "1. 去 https://tinypng.com/developers 免費註冊" -ForegroundColor White
    Write-Host "2. 複製你的 API Key" -ForegroundColor White
    Write-Host "3. 編輯此檔案，替換第 9 行的 YOUR_API_KEY" -ForegroundColor White
    exit
}

$successCount = 0
$failCount = 0
$totalSaved = 0

foreach ($image in $images) {
    $relPath = $image.FullName.Replace($SOURCE_FOLDER, "").TrimStart("\")
    $outputPath = Join-Path $OUTPUT_FOLDER $relPath
    $outputDir = Split-Path $outputPath
    
    # 建立對應的輸出資料夾結構
    if (!(Test-Path $outputDir)) {
        New-Item -ItemType Directory -Path $outputDir -Force | Out-Null
    }
    
    Write-Host "處理: $relPath" -ForegroundColor Cyan -NoNewline
    
    try {
        # 讀取圖片
        $imageBytes = [System.IO.File]::ReadAllBytes($image.FullName)
        $originalSize = $imageBytes.Length / 1KB
        
        # 設定 TinyPNG API 請求
        $auth = [Convert]::ToBase64String([Text.Encoding]::ASCII.GetBytes("api:$API_KEY"))
        
        $headers = @{
            "Authorization" = "Basic $auth"
            "Content-Type" = "application/x-www-form-urlencoded"
        }
        
        # 上傳到 TinyPNG 並下載壓縮版本
        $response = Invoke-WebRequest -Uri "https://api.tinify.com/compress" `
            -Method Post `
            -Headers $headers `
            -Body $imageBytes `
            -UseBasicParsing
        
        if ($response.StatusCode -eq 200) {
            # 下載壓縮後的圖片
            $outputResponse = Invoke-WebRequest -Uri $response.Headers["Location"] `
                -Method Get `
                -Headers @{"Authorization" = "Basic $auth"} `
                -OutFile $outputPath `
                -UseBasicParsing
            
            $compressedSize = (Get-Item $outputPath).Length / 1KB
            $saved = $originalSize - $compressedSize
            $totalSaved += $saved
            
            Write-Host " ✓ 縮小 $([math]::Round($saved, 1)) KB (從 $([math]::Round($originalSize, 1)) KB → $([math]::Round($compressedSize, 1)) KB)" -ForegroundColor Green
            $successCount++
        }
    }
    catch {
        Write-Host " ✗ 失敗: $($_.Exception.Message)" -ForegroundColor Red
        $failCount++
    }
    
    # 暫停以避免 API 限制
    Start-Sleep -Milliseconds 500
}

Write-Host "`n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan
Write-Host "壓縮完成！" -ForegroundColor Green
Write-Host "✓ 成功: $successCount" -ForegroundColor Green
Write-Host "✗ 失敗: $failCount" -ForegroundColor Yellow
Write-Host "📊 總共節省: $([math]::Round($totalSaved / 1024, 2)) MB" -ForegroundColor Green
Write-Host "📁 輸出資料夾: $OUTPUT_FOLDER" -ForegroundColor Cyan
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan

Write-Host "`n下一步：" -ForegroundColor Yellow
Write-Host "1. 備份原始圖片：Rename-Item '$SOURCE_FOLDER' '$SOURCE_FOLDER-backup'" -ForegroundColor White
Write-Host "2. 替換圖片：Copy-Item '$OUTPUT_FOLDER\*' '$SOURCE_FOLDER' -Recurse -Force" -ForegroundColor White
Write-Host "3. 測試網站是否正常運作" -ForegroundColor White
