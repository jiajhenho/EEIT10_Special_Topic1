document.addEventListener('DOMContentLoaded', () => {
    // 修正: 使用 ID 選擇器 '#' 來選取元素
    const container = document.querySelector('#falling-leaves-container'); 
    
    // 如果找不到容器，則停止執行後續程式碼
    if (!container) {
        console.error("Falling leaves container not found. Check your HTML file.");
        return;
    }

    const leafImages = [
        'leaf1.png',
        'leaf2.png',
        'leaf3.png',
        'leaf4.png',
        'leaf5.png',
        // 可以添加更多楓葉圖片
    ];

    function createLeaf() {
        const leaf = document.createElement('div');
        leaf.classList.add('leaf');
        
        // 確保路徑是正確的
        leaf.style.backgroundImage = `url('./img/${leafImages[Math.floor(Math.random() * leafImages.length)]}')`;

        // 隨機設定起始位置、大小和動畫持續時間
        leaf.style.left = `${Math.random() * 100}vw`;
        leaf.style.animationDuration = `${Math.random() * 10 + 5}s`; // 5到15秒
        leaf.style.animationDelay = `${Math.random() * 5}s`;
        leaf.style.width = `${Math.random() * 20 + 20}px`; // 20到40px
        leaf.style.height = leaf.style.width;

        container.appendChild(leaf);

        // 飄落到底部後移除楓葉，並創建一個新的
        leaf.addEventListener('animationend', () => {
            leaf.remove();
            createLeaf();
        });
    }

    // 創建初始數量的楓葉
    const numberOfLeaves = 80;
    for (let i = 0; i < numberOfLeaves; i++) {
        createLeaf();
    }
});