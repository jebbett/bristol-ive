function growImage(imageId) {
    let img = document.getElementById(imageId);
    let width = img.width;
    let height = img.height;
    setInterval(() => {
        width *= 1.001;
        height *= 1.001;
        img.style.width = width + 'px';
        img.style.height = height + 'px';
    }, 100);
}

function bounceImage(imageId) {
    let img = document.getElementById(imageId);
    let posX = 0, posY = 0;
    let velocityX = 1, velocityY = 1;
    const imgWidth = 200, imgHeight = 200;

    setInterval(() => {
        posX += velocityX;
        posY += velocityY;

        if (posX + imgWidth > window.innerWidth || posX < 0) {
            velocityX = -velocityX;
        }

        if (posY + imgHeight > window.innerHeight || posY < 0) {
            velocityY = -velocityY;
        }

        img.style.left = posX + 'px';
        img.style.top = posY + 'px';
    }, 10);
}

function moveRandomly(imageId) {
    const img = document.getElementById(imageId);

    function move() {
        const randomX = Math.floor(Math.random() * (window.innerWidth - img.width));
        const randomY = Math.floor(Math.random() * (window.innerHeight - img.height));
        img.style.left = randomX + 'px';
        img.style.top = randomY + 'px';
    }

    img.addEventListener('mouseover', move);
    img.addEventListener('click', move);
}

function scrollToRandomPosition() {
    setInterval(() => {
        const halfPageHeight = window.innerHeight / 2;
        const randomOffset = Math.random() < 0.5 ? -halfPageHeight : halfPageHeight;
        window.scrollBy({ top: randomOffset, behavior: 'smooth' });
    }, 10000);
}

window.onload = function() {
    growImage('img_1a4e855');
    growImage('img_2eed27d');
    bounceImage('img_bounce');
    moveRandomly('img_annoying');
    scrollToRandomPosition();
};
