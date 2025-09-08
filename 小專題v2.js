document.addEventListener('DOMContentLoaded', function () {

    // --- 1. 輪播圖指示器生成 ---
    const carouselElement = document.getElementById('carouseljs');
    const carouselItems = carouselElement ? carouselElement.querySelectorAll('.carousel-item') : [];
    const indicatorsContainer = document.getElementById('carousel-indicators');

    if (carouselItems.length > 0 && indicatorsContainer) {
        carouselItems.forEach((item, index) => {
            const button = document.createElement('button');
            button.setAttribute('type', 'button');
            button.setAttribute('data-bs-target', '#carouseljs');
            button.setAttribute('data-bs-slide-to', index);
            button.setAttribute('aria-label', `Slide ${index + 1}`);

            if (index === 0) {
                button.classList.add('active');
                button.setAttribute('aria-current', 'true');
            }
            indicatorsContainer.appendChild(button);
        });
    }

    // --- 2. 徑向選單主按鈕開關 ---
    const mainButton = document.querySelector('.radial-menu-main-button');
    const menuContainer = document.querySelector('.radial-menu-container');
    const radialMenuItemsContainer = document.querySelector('.radial-menu-items'); // 子按鈕們所在的容器
    const childButtons = document.querySelectorAll('.radial-menu-child-button');
    

    if (mainButton && menuContainer) {
        mainButton.addEventListener('click', function () {
            menuContainer.classList.toggle('open'); // 切換容器的 'open' 類別
            radialMenuItemsContainer.classList.toggle('open'); // 同步切換子按鈕容器的 'open' 類別
        });
    }

    // --- 3. 子按鈕點擊，顯示內容 ---
    const contentPlaceholder = document.getElementById('content-placeholder'); // 內容顯示的 div
    const contentDisplayArea = document.getElementById('content-display-area'); // 整個內容顯示的 section

    if (childButtons.length > 0) {
        childButtons.forEach(button => {
            button.addEventListener('click', function () {
                // 獲取按鈕上的 data-content-id
                const contentId = this.getAttribute('data-content-id');

                if (contentId) {
                    // 尋找要顯示的內容元素
                    const contentElement = document.getElementById(contentId);

                    // 確保內容顯示區域存在
                    if (contentPlaceholder && contentDisplayArea) {
                        // 隱藏所有 .content-item
                        document.querySelectorAll('.content-item').forEach(item => {
                            item.style.display = 'none';
                        });

                        // 如果找到了要顯示的內容元素
                        if (contentElement) {
                            // 獲取內容的 HTML
                            const contentHtml = contentElement.innerHTML;
                            // 將內容插入到 placeholder
                            contentPlaceholder.innerHTML = contentHtml;
                            // 顯示這個選中的內容元素
                            contentElement.style.display = 'block';
                        } else {
                            // 如果找不到對應的內容 ID
                            contentPlaceholder.innerHTML = `<p>抱歉，找不到 ID 為 "${contentId}" 的內容。</p>`;
                            console.warn(`Content element with ID "${contentId}" not found.`);
                        }
                    }
                } else {
                    console.warn('Child button is missing data-content-id attribute.');
                }
            });
        });
    }
    

    // --- 4. (可選) 點擊選單外區域關閉選單 ---
    document.addEventListener('click', function (event) {
        // 檢查點擊的目標是否是主按鈕或其內部元素，或是子按鈕或其內部元素
        const isClickInsideMenu = menuContainer.contains(event.target);

        // 如果點擊的目標不在選單內部，並且選單是打開的，則關閉選單
        if (!isClickInsideMenu && menuContainer.classList.contains('open')) {
            menuContainer.classList.remove('open');
            radialMenuItemsContainer.classList.remove('open');
        }
    });

}); // --- 結束 DOMContentLoaded ---

