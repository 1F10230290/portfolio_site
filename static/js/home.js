document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.works_item');
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');
    let currentIndex = 0;

    function updateClasses(current, next, direction) {
        // 現在表示中のWorksをスライドアウト
        current.classList.remove('active');
        if (direction === 'right') {
            current.classList.add('move-left'); // 右から左へスライドアウト
        } else {
            current.classList.add('move-right'); // 左から右へスライドアウト
        }

        // 次のWorksをスライドイン
        next.classList.remove('move-left', 'move-right');
        next.classList.add('slide-in'); // 中央にスライドイン
        next.classList.add('active'); // 表示

        // スライドインのアニメーションが終わった後、次のアイテムを準備
        setTimeout(() => {
            next.classList.remove('slide-in');
            next.classList.add('active'); // 常に表示
            current.classList.remove('move-left', 'move-right'); // 元に戻す
        }, 500); // アニメーション時間と一致させる
    }

    nextBtn.addEventListener('click', () => {
        const currentItem = items[currentIndex];
        const nextIndex = (currentIndex + 1) % items.length;
        const nextItem = items[nextIndex];

        updateClasses(currentItem, nextItem, 'right');
        currentIndex = nextIndex;
    });

    prevBtn.addEventListener('click', () => {
        const currentItem = items[currentIndex];
        const prevIndex = (currentIndex - 1 + items.length) % items.length;
        const prevItem = items[prevIndex];

        updateClasses(currentItem, prevItem, 'left');
        currentIndex = prevIndex;
    });
});
