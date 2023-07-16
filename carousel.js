// gather all components
const carouselSlides = document.querySelectorAll(".carouselSlide");
const numberOfSlides = carouselSlides.length;
const navDots = document.querySelectorAll(".carouselNavDot");

let currentSlideNumber = 0;
let previousSlideNumber;

function jumpTo(requestedSlideNumber) {
    previousSlideNumber = currentSlideNumber;
    currentSlideNumber = requestedSlideNumber;

    // deactivate previous slide
    const previousSlide = carouselSlides[previousSlideNumber];
    previousSlide.classList.remove('activeSlide');
    previousSlide.classList.add('inactiveSlide');

    // deactivate previous dot
    const previousDot = navDots[previousSlideNumber];
    previousDot.classList.remove('activeDot');
    previousDot.classList.add('inactiveDot');

    // activate requested slide
    const requestedSlide = carouselSlides[requestedSlideNumber];
    requestedSlide.classList.remove('inactiveSlide');
    requestedSlide.classList.add('activeSlide');

    // activate requested dot
    const requestedDot = navDots[requestedSlideNumber];
    requestedDot.classList.remove('inactiveDot');
    requestedDot.classList.add('activeDot');
}

// start up actions -------------------------------------------
// add eventlistener to dots
for  (let i=0; i<numberOfSlides; i++) {
    navDots[i].addEventListener('click', () => {
        jumpTo(i);
    });
}

jumpTo(currentSlideNumber);