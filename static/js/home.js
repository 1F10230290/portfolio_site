let currentIndex = 0;

const contents = [
    {
        image: "{% static 'img/Game_screen.png' %}",
        text: "松原 有泰が制作した物"
    },
    {
        image: "{% static 'img/another_image.png' %}",  // 他の画像のパスを追加
        text: "別の制作物"
    },
    {
        image: "{% static 'img/another_image2.png' %}",  // 他の画像のパスを追加
        text: "さらに別の制作物"
    },
    // 必要に応じて追加
];

function changeContent(direction) {
    if (direction === 'next') {
        currentIndex = (currentIndex + 1) % contents.length;
    } else if (direction === 'prev') {
        currentIndex = (currentIndex - 1 + contents.length) % contents.length;
    }

    // 画像とテキストを更新
    document.getElementById("content-image").src = contents[currentIndex].image;
    document.getElementById("overlay-text").textContent = contents[currentIndex].text;
}
