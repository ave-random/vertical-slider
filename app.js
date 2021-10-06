const aside = document.querySelector('aside');
const main = document.querySelector('main');

const slidesCount = main.querySelectorAll('.slide').length;

aside.style.top = `-${slidesCount - 1}00vh`;

let slideIndex = 0;

document.querySelector('.up-button').addEventListener('click', () => scroll('up'));

document.querySelector('.down-button').addEventListener('click', () => scroll('down'));

document.addEventListener('wheel', (e) => {
    if (e.deltaY > 0) {
        e = scroll('up')
    } else if (e.deltaY < 0) {
        e = scroll('down')
    }
}) 

document.addEventListener('keydown', e => {
    if (e.key === 'ArrowUp' || e.key === 'ArrowRight') {
        scroll('up');
    } else if (e.key === 'ArrowDown' || e.key === 'ArrowLeft') {
        scroll('down');
    }
});

function scroll(dir) {
    if (dir == 'up') {
        slideIndex++
        if (slideIndex === slidesCount) {
            slideIndex = 0
        }
    } else if (dir == 'down') {
        slideIndex--
        if (slideIndex < 0) {
            slideIndex = slidesCount -1
        }
    }

    const height = document.querySelector('.container').clientHeight;

    main.style.transform = `translateY(-${slideIndex * height}px)`;

    aside.style.transform = `translateY(${slideIndex * height}px)`;
}
