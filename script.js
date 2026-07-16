/* =========================================
   1. Three.js 3D Liquid Glass 背景動畫
   ========================================= */
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.1;
renderer.outputColorSpace = THREE.SRGBColorSpace;
// 確保 HTML 裡有 <div id="canvas-container"></div>
const container = document.getElementById('canvas-container');
if (container) {
    container.appendChild(renderer.domElement);
}

// 生成一個簡易的工作室光源環境貼圖,讓玻璃材質產生真實的高光與折射反射
function createEnvironmentTexture() {
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    pmremGenerator.compileEquirectangularShader();

    const envScene = new THREE.Scene();
    envScene.background = new THREE.Color(0x0a0a0f);

    const panelGeometry = new THREE.PlaneGeometry(24, 24);

    const whitePanel = new THREE.Mesh(panelGeometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));
    whitePanel.position.set(-18, 12, -8);
    whitePanel.lookAt(0, 0, 0);
    envScene.add(whitePanel);

    const cyanPanel = new THREE.Mesh(panelGeometry, new THREE.MeshBasicMaterial({ color: 0x00e5ff }));
    cyanPanel.position.set(20, -6, 10);
    cyanPanel.lookAt(0, 0, 0);
    envScene.add(cyanPanel);

    const softPanel = new THREE.Mesh(new THREE.PlaneGeometry(40, 40), new THREE.MeshBasicMaterial({ color: 0x33334a }));
    softPanel.position.set(0, -25, 0);
    softPanel.rotation.x = -Math.PI / 2;
    envScene.add(softPanel);

    const renderTarget = pmremGenerator.fromScene(envScene, 0.04);
    pmremGenerator.dispose();
    return renderTarget.texture;
}

scene.environment = createEnvironmentTexture();

const ambientLight = new THREE.AmbientLight(0xffffff, 0.35);
scene.add(ambientLight);

const keyLight = new THREE.PointLight(0x00e5ff, 2.5, 50);
keyLight.position.set(5, 5, 5);
scene.add(keyLight);

const fillLight = new THREE.PointLight(0xffffff, 1.5, 50);
fillLight.position.set(-5, -3, 4);
scene.add(fillLight);

// 玻璃球背後放一片細格線,讓透光材質有東西可以折射,才看得出「液態玻璃」的扭曲感
const backdropGrid = new THREE.GridHelper(30, 30, 0x2a2a3a, 0x1a1a24);
backdropGrid.position.z = -6;
backdropGrid.rotation.x = Math.PI / 2;
scene.add(backdropGrid);

const glassGeometry = new THREE.SphereGeometry(2, 96, 96);

const glassMaterial = new THREE.MeshPhysicalMaterial({
    color: 0xffffff,
    metalness: 0,
    roughness: 0.05,
    transmission: 1,
    thickness: 2,
    ior: 1.45,
    envMapIntensity: 1.2,
    clearcoat: 1,
    clearcoatRoughness: 0.08,
    transparent: true,
});

const mesh = new THREE.Mesh(glassGeometry, glassMaterial);
mesh.position.x = 2;
scene.add(mesh);

camera.position.z = 5;

let elapsed = 0;
function animate() {
    requestAnimationFrame(animate);
    elapsed += 0.005;
    mesh.rotation.x = elapsed * 0.3;
    mesh.rotation.y = elapsed * 0.5;
    mesh.position.y = Math.sin(elapsed) * 0.3;
    renderer.render(scene, camera);
}
animate();

window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});


/* =========================================
   2. 滿版科技感視窗 (Modal) 互動邏輯
   ========================================= */
const projectData = {
    'floating': {
        title: 'Floating Life 浮生未央',
        img: 'jpg/Lee_Po-Sheng Portfolio_page-0023.jpg',
        desc: '這是一個探討空間動線與秩序美學的策展計畫。利用深邃的視覺與浮動元素，創造出脫離日常引力的展演空間。這裡未來可以補上更多關於你如何建構這些空間的 3D 渲染圖與理念。',
        video: 'hyXIjNYpf2k',
        images: [
            'jpg/Lee_Po-Sheng Portfolio_page-0024.jpg',
            'jpg/Lee_Po-Sheng Portfolio_page-0025.jpg',
            'jpg/Lee_Po-Sheng Portfolio_page-0026.jpg',
            'jpg/Lee_Po-Sheng Portfolio_page-0027.jpg'
        ]
    },
    'mask': {
        title: 'MASK 賽博龐克防護面罩',
        img: 'jpg/Lee_Po-Sheng Portfolio_page-0009.jpg',
        desc: '深入探討主動式通風機制的氣流力學，以及 A2 模組化濾網的快拆結構設計。運用極簡的白色主體搭配科技霓虹光環，展現強烈的工業機甲美學。',
        images: [
            'jpg/Lee_Po-Sheng Portfolio_page-0010.jpg',
            'jpg/Lee_Po-Sheng Portfolio_page-0011.jpg',
            'jpg/Lee_Po-Sheng Portfolio_page-0012.jpg'
        ]
    },
    'l1': {
        title: 'L1 RACING 概念賽車',
        img: 'jpg/l1.jpg',
        desc: '在 Rhinoceros 中經歷複雜的曲面建構，完美融合 Café Racer 的復古骨架與現代空力套件。特製的散熱鰭片與中心樞紐轉向系統展現了高度的機械合理性。',
        video: '58FEiOlyQSM',
        images: [
            'jpg/Lee_Po-Sheng Portfolio_page-0014.jpg',
            'jpg/Lee_Po-Sheng Portfolio_page-0015.jpg',
            'jpg/Lee_Po-Sheng Portfolio_page-0016.jpg',
            'jpg/Lee_Po-Sheng Portfolio_page-0017.jpg'
        ]
    },
    'device': {
        title: 'Gain Support Device',
        img: 'jpg/device.jpg',
        desc: '針對 L3-S1 椎間盤區域的防護機制所開發。展示了如何將碳纖維的輕量化特性與乳膠減震科技結合，為現代工作者打造具備人因工程的穿戴式裝備。',
        images: [
            'jpg/Lee_Po-Sheng Portfolio_page-0021.jpg',
            'jpg/Lee_Po-Sheng Portfolio_page-0022.jpg'
        ]
    },
    'geometry': {
        title: 'GEOMETRY Mobile Chandelier',
        img: 'jpg/Lee_Po-Sheng Portfolio_page-0004.jpg',
        desc: '運用幾何分割與對稱美學打造的模組化吊燈設計。精妙的球形結構由多層對稱葉片組成，完美詮釋了形式與功能的統一。通過光影交錯的呈現，展現極簡主義與空間藝術的完美結合，為室內空間增添雕塑般的視覺韻味。',
        images: [
            'jpg/Lee_Po-Sheng Portfolio_page-0005.jpg',
            'jpg/Lee_Po-Sheng Portfolio_page-0006.jpg',
            'jpg/Lee_Po-Sheng Portfolio_page-0007.jpg'
        ]
    },
    'pc-build-1': {
        title: '組裝電腦作品 01',
        img: 'jpg/電腦店/福利連顯卡/Gemini_Generated_Image_p48gkpp48gkpp48g.png',
        desc: '結合 AI 創作技術與高端電腦組裝的融合專案，展現個性化 Gaming PC 的設計美學與功能完整性。這張圖片作為作品 01 的主視覺展示。',
        images: [
            'jpg/電腦店/福利連顯卡/Gemini_Generated_Image_xuhakgxuhakgxuha.png',
            'jpg/電腦店/福利連顯卡/Gemini_Generated_Image_y16r1gy16r1gy16r.png'
        ]
    },
    'pc-build-2': {
        title: '組裝電腦作品 02',
        img: 'jpg/電腦店/32800/Gemini_Generated_Image_b1ov80b1ov80b1ov.png',
        desc: '結合 AI 創作技術與高端電腦組裝的融合專案，展現個性化 Gaming PC 的設計美學與功能完整性。這張圖片作為作品 02 的主視覺展示。',
        images: [
            'jpg/電腦店/32800/Gemini_Generated_Image_b1ov80b1ov80b1ov.png',
            'jpg/電腦店/32800/Gemini_Generated_Image_wdah9fwdah9fwdah.png'
        ]
    },
    'pc-build-3': {
        title: '組裝電腦作品 03',
        img: 'jpg/電腦店/5070TI/Gemini_Generated_Image_r15k8or15k8or15k.png',
        desc: '結合 AI 創作技術與高端電腦組裝的融合專案，展現個性化 Gaming PC 的設計美學與功能完整性。這張圖片作為作品 03 的主視覺展示。'
    }
};

function openModal(projectId) {
    const modal = document.getElementById('project-modal');
    const bodyContent = document.getElementById('modal-body-content');
    const data = projectData[projectId];

    // 動態將資料塞入視窗內
    let contentHTML = `
        <h2>${data.title}</h2>
    `;
    
    // 如果有影片，優先顯示影片
    if (data.video) {
        contentHTML += `
            <div class="video-container">
                <iframe width="100%" height="400" src="https://www.youtube.com/embed/${data.video}?autoplay=0" title="${data.title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        `;
    }
    
    if (data.img) {
        contentHTML += `<img src="${data.img}" alt="${data.title}">`;
    }
    
    contentHTML += `
        <div class="project-details">
            <p>${data.desc}</p>
        </div>
    `;
    
    // 如果有額外圖片，添加到內容中
    if (data.images && data.images.length > 0) {
        contentHTML += `<div class="additional-images additional-images-${projectId}">`;
        data.images.forEach((imgSrc) => {
            contentHTML += `<img src="${imgSrc}" alt="${data.title} detail">`;
        });
        contentHTML += '</div>';
    }
    
    bodyContent.innerHTML = contentHTML;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // 鎖住背後網頁不讓它滾動
    
    // 為 modal 內容元素添加動畫
    setTimeout(() => {
        const heading = bodyContent.querySelector('h2');
        const images = bodyContent.querySelectorAll('img');
        const details = bodyContent.querySelector('.project-details');
        const additionalImages = bodyContent.querySelector('.additional-images');
        
        if (heading) heading.style.animation = 'fadeInUp 0.6s ease-out';
        if (details) details.style.animation = 'fadeInUp 0.6s ease-out 0.2s both';
        if (additionalImages) additionalImages.style.animation = 'fadeInUp 0.6s ease-out 0.3s both';
        
        images.forEach((img, index) => {
            if (index === 0) {
                img.style.animation = 'fadeInUp 0.6s ease-out 0.1s both';
            }
        });
    }, 50);
    
    // 為所有圖片添加點擊放大功能
    setTimeout(() => {
        const images = bodyContent.querySelectorAll('img');
        images.forEach((img) => {
            img.style.cursor = 'pointer';
            img.addEventListener('click', () => openLightbox(img.src));
        });
    }, 0);
}

function closeModal() {
    const modal = document.getElementById('project-modal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto'; // 恢復背後網頁滾動
}

// 點擊 Modal 外部深色遮罩時，自動關閉視窗
window.onclick = function(event) {
    const modal = document.getElementById('project-modal');
    if (event.target === modal) {
        closeModal();
    }
}

/* =========================================
   3. 圖片放大燈箱 (Lightbox) 功能
   ========================================= */
function openLightbox(imageSrc) {
    let lightbox = document.getElementById('lightbox');
    
    // 如果不存在則創建燈箱
    if (!lightbox) {
        lightbox = document.createElement('div');
        lightbox.id = 'lightbox';
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <span class="lightbox-close">&times;</span>
            <img class="lightbox-image" src="" alt="Enlarged image">
        `;
        document.body.appendChild(lightbox);
        
        // 關閉按鈕事件
        lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
        
        // 點擊燈箱外部關閉
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }
    
    lightbox.querySelector('.lightbox-image').src = imageSrc;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// 按 ESC 鍵關閉燈箱
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeLightbox();
    }
});