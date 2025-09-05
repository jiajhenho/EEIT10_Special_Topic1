// 導覽圖
document.addEventListener('DOMContentLoaded', function () {
    // 取得輪播圖元件
    const carouselElement = document.getElementById('carouseljs');
    // 取得輪播項目
    const carouselItems = carouselElement.querySelectorAll('.carousel-item');
    // 取得指示器容器
    const indicatorsContainer = document.getElementById('carousel-indicators');

    // 檢查輪播項目數量
    if (carouselItems.length > 0) {
        carouselItems.forEach((item, index) => {
            // 建立指示器按鈕
            const button = document.createElement('button');
            button.setAttribute('type', 'button');
            button.setAttribute('data-bs-target', '#carouseljs');
            button.setAttribute('data-bs-slide-to', index);
            button.setAttribute('aria-label', `Slide ${index + 1}`);

            // 設定第一個項目為 active
            if (index === 0) {
                button.classList.add('active');
                button.setAttribute('aria-current', 'true');
            }

            // 將按鈕加入指示器容器
            indicatorsContainer.appendChild(button);
        });
    }
});

// 內容區塊按鈕
document.addEventListener('DOMContentLoaded', () => {
    const mainButton = document.querySelector('.radial-menu-main-button');
    const itemsContainer = document.querySelector('.radial-menu-items');
    const radialMenuItems = document.querySelectorAll('.radial-menu-item');

    mainButton.addEventListener('click', () => {
        // 切換主按鈕的 'open' 類別
        mainButton.classList.toggle('open');
        // 切換子按鈕容器的 'open' 類別
        itemsContainer.classList.toggle('open');
    });

    // 處理子按鈕的點擊事件
    radialMenuItems.forEach(item => {
        item.addEventListener('click', function () {
            const content = this.getAttribute('data-content');
            alert(`你點擊了按鈕，內容是: ${content}`);

            // (可選) 點擊子按鈕後自動收闔選單
            mainButton.classList.remove('open');
            itemsContainer.classList.remove('open');
        });
    });
});