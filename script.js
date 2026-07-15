/* =========================================
   1. Three.js 3D 賽博龐克背景動畫
   ========================================= */
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
// 確保 HTML 裡有 <div id="canvas-container"></div>
const container = document.getElementById('canvas-container');
if (container) {
    container.appendChild(renderer.domElement);
}

const geometry = new THREE.IcosahedronGeometry(2, 1); 

const material = new THREE.MeshBasicMaterial({ 
    color: 0x111111, 
    wireframe: true, 
    wireframeLinewidth: 2,
    transparent: true,
    opacity: 0.8
});

const wireframeGeometry = new THREE.WireframeGeometry(geometry);
const wireframeMaterial = new THREE.LineBasicMaterial({ color: 0x00ffff }); 
const wireframe = new THREE.LineSegments(wireframeGeometry, wireframeMaterial);

const mesh = new THREE.Mesh(geometry, material);
mesh.add(wireframe); 

mesh.position.x = 2;
scene.add(mesh);

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    mesh.rotation.x += 0.005;
    mesh.rotation.y += 0.005;
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
        images: [
            'jpg/Lee_Po-Sheng Portfolio_page-0024.jpg',
            'jpg/Lee_Po-Sheng Portfolio_page-0025.jpg',
            'jpg/Lee_Po-Sheng Portfolio_page-0012.jpg',
            'jpg/Lee_Po-Sheng Portfolio_page-0016.jpg'
        ]
    },
    'mask': {
        title: 'MASK 賽博龐克防護面罩',
        img: 'jpg/Lee_Po-Sheng Portfolio_page-0009.jpg',
        desc: '深入探討主動式通風機制的氣流力學，以及 A2 模組化濾網的快拆結構設計。運用極簡的白色主體搭配科技霓虹光環，展現強烈的工業機甲美學。',
        images: [
            'jpg/Lee_Po-Sheng Portfolio_page-0010.jpg',
            'jpg/Lee_Po-Sheng Portfolio_page-0011.jpg'
        ]
    },
    'l1': {
        title: 'L1 RACING 概念賽車',
        img: 'jpg/l1.jpg',
        desc: '在 Rhinoceros 中經歷複雜的曲面建構，完美融合 Café Racer 的復古骨戢與現代空力套件。特製的散熱鷚片與中心樢紐轉向系統展現了高度的機械合理性。',
        images: [
            'jpg/Lee_Po-Sheng Portfolio_page-0014.jpg',
            'jpg/Lee_Po-Sheng Portfolio_page-0015.jpg'
        ]
    },
    'device': {
        title: 'Gain Support Device',
        img: 'jpg/device.jpg',
        desc: '針對 L3-S1 椭間約區域的防護機制所開發。展示了如何將碳纖維的輕量化特性與乳膠減震科技結合，為現代工作者打造具備人因工程的穿戴式裝備。',
        images: [
            'jpg/Lee_Po-Sheng Portfolio_page-0021.jpg',
            'jpg/Lee_Po-Sheng Portfolio_page-0022.jpg'
        ]
    }
};

function openModal(projectId) {
    const modal = document.getElementById('project-modal');
    const bodyContent = document.getElementById('modal-body-content');
    const data = projectData[projectId];

    // 動態將資料塞入視窗內
    let contentHTML = `
        <h2>${data.title}</h2>
        <img src="${data.img}" alt="${data.title}">
        <div class="project-details">
            <p>${data.desc}</p>
        </div>
    `;
    
    // 如果有額外圖片，添加到內容中
    if (data.images && data.images.length > 0) {
        contentHTML += '<div class="additional-images">';
        data.images.forEach((imgSrc) => {
            contentHTML += `<img src="${imgSrc}" alt="${data.title} detail">`;
        });
        contentHTML += '</div>';
    }
    
    bodyContent.innerHTML = contentHTML;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // 鎖住背後網頁不讓它滾動
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