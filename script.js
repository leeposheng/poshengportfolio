// 1. 初始化場景、相機、渲染器
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); // alpha: true 允許背景透明

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.getElementById('canvas-container').appendChild(renderer.domElement);

// 2. 建立幾何模型 (這裡先用二十面體模擬 L1 RACING 的幾何結構)
const geometry = new THREE.IcosahedronGeometry(2, 1); // 半徑 2，細節 1

// 3. 建立材質：結合深色實體與發光網格
const material = new THREE.MeshBasicMaterial({ 
    color: 0x111111, // 深色實體
    wireframe: true, // 顯示網格
    wireframeLinewidth: 2,
    transparent: true,
    opacity: 0.8
});

// 在實體外面再套一層發光的純網格，增加科技感
const wireframeGeometry = new THREE.WireframeGeometry(geometry);
const wireframeMaterial = new THREE.LineBasicMaterial({ color: 0x00ffff }); // 青色發光線條
const wireframe = new THREE.LineSegments(wireframeGeometry, wireframeMaterial);

const mesh = new THREE.Mesh(geometry, material);
mesh.add(wireframe); // 將發光線條加入模型中

// 將模型向右推一點，與左邊的文字平衡
mesh.position.x = 2;
scene.add(mesh);

camera.position.z = 5;

// 4. 動畫迴圈 (讓模型緩慢旋轉)
function animate() {
    requestAnimationFrame(animate);

    mesh.rotation.x += 0.005;
    mesh.rotation.y += 0.005;

    renderer.render(scene, camera);
}

animate();

// 5. 視窗縮放自適應 (RWD)
window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});