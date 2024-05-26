const track =document.querySelector('.carousel_track');
const slides = Array.from(track.children); //Groups elements together
const nextButton = document.querySelector('.carousel__button--right');
const previousButton = document.querySelector('.carousel__button--left');
const dotsNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;
// console.log(slideWidth);

// Arrange the slides next to one another
slides[0].style.left = slideWidth * 0 + 'px';
slides[1].style.left = slideWidth * 1 + 'px';
slides[2].style.left = slideWidth * 2 + 'px';