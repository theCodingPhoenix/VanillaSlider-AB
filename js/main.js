const slides = document.querySelectorAll('.slide');
const nextButton = document.querySelectorAll("#next");
const prevButton = document.querySelectorAll("#prev");
const indicators = document.querySelectorAll(".indicator");

const nextSlide = () => {
    
    // grab the div which has the 'current' class
    // Current class indicates the current slide selected
    // and activeIndicator indicates what indicator is selected
    const currentSlide = document.querySelector('.current');
    const currentIndicator = document.querySelector('.activeIndicator');

    // remove the class from this element
    currentSlide.classList.remove('current');
    currentIndicator.classList.remove('activeIndicator');
    
    // now check if the current slide has any siblings but not the indicators
    if(currentSlide.nextElementSibling  && currentSlide.nextElementSibling.id != "indicators"){

        // make the next element/slide the current slide
        currentSlide.nextElementSibling.classList.add('current');
        currentIndicator.nextElementSibling.classList.add('activeIndicator');

    } else {
        // if we have come to the end of the slides
        // go back to the first slide
        slides[0].classList.add('current');
        indicators[0].classList.add('activeIndicator');
    }
};

const prevSlide = () => {

    // grab the div which has the 'current' class
    // Current class indicates the current slide selected
    // and activeIndicator indicates what indicator is selected
    const currentSlide = document.querySelector('.current');
    const currentIndicator = document.querySelector('.activeIndicator');

    // remove the class from this element
    currentSlide.classList.remove('current');
    currentIndicator.classList.remove('activeIndicator');


    // now check if the current slide has any previous siblings
    if(currentSlide.previousElementSibling && currentSlide.previousElementSibling.id != "indicators"){

        // make the previous element/slide the current slide
        currentSlide.previousElementSibling.classList.add('current');
        currentIndicator.previousElementSibling.classList.add('activeIndicator');

    } else {
        // if we have come to the beginning of the slides
        // go back to the last slide
        slides[slides.length - 1].classList.add('current');
        indicators[indicators.length - 1].classList.add('activeIndicator');
    }
};

// this function is triggered when an indicator is clicked
const displaySlide = slideIndex => {

    // grab the div which has the 'current' class
    // Current class indicates the current slide selected
    // and activeIndicator indicates what indicator is selected
    const currentSlide = document.querySelector('.current');
    const currentIndicator = document.querySelector('.activeIndicator');

    // remove the class from this element
    currentSlide.classList.remove('current');
    currentIndicator.classList.remove('activeIndicator');

    // now add the current class to the slide index we want
    slides[slideIndex].classList.add('current');
    indicators[slideIndex].classList.add('activeIndicator');
}


// add the event listener on each indicator
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', function() {
        displaySlide(index);
      });
});


// register the event handlers
prevButton[0].addEventListener('click', e => {
    prevSlide();
})

nextButton[0].addEventListener('click', e => {
    nextSlide();
})