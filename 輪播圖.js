document.addEventListener('DOMContentLoaded', function () {
    // 取得輪播圖元件
    const carouselElement = document.getElementById('demo');
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
            button.setAttribute('data-bs-target', '#demo');
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