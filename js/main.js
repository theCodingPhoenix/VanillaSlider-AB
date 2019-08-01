const slides = document.querySelectorAll('.slide');
const nextButton = document.querySelectorAll("#next");
const prevButton = document.querySelectorAll("#prev");

console.log(slides);
console.log(nextButton);

const nextSlide = () => {

    // grab the div which has the 'current' class
    // Current class indicates the current slide selected
    const currentSlide = document.querySelector('.current');

    // remove the class from this element
    currentSlide.classList.remove('current');

    // now check if the current slide has any siblings
    if(currentSlide.nextElementSibling){

        // make the next element/slide the current slide
        currentSlide.nextElementSibling.classList.add('current');
    } else {
        // if we have come to the end of the slides
        // go back to the first slide
        slides[0].classList.add('current');
    }
};

const prevSlide = () => {

    // grab the div which has the 'current' class
    // Current class indicates the current slide selected
    const currentSlide = document.querySelector('.current');

    // remove the class from this element
    currentSlide.classList.remove('current');

    // now check if the current slide has any previous siblings
    if(currentSlide.previousElementSibling){

        // make the previous element/slide the current slide
        currentSlide.previousElementSibling.classList.add('current');
    } else {
        // if we have come to the beginning of the slides
        // go back to the last slide
        slides[slides.length - 1].classList.add('current');
    }
};

// register the event handlers

prevButton[0].addEventListener('click', e => {
    prevSlide();
})

nextButton[0].addEventListener('click', e => {
    nextSlide();
})