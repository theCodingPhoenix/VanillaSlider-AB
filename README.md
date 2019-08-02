# Slider

The Slider is built using HTML5, CSS3 (and SASS) and VanillaJS (ES6).

## HTML
The idea here is that although all slides by default are on the page, opacity defines which slide is currently active/visible to the user.
I built the HTML just adding the slides:
- Background images from assets provided
- Content for the slide, from the text provided on the assets (this includes the CTA buttons)
- Navigation buttons (next/prev)
- Indicators are the bottom

## CSS
To begin with I just added simple (but styles resembling the assets) for desktop so that I can test the slideshow (by adding my JS next). I created a transition which I wanted on the slides. The images to change opacity and text to slide in from left or right for odd or even slides simultaneously. I have used a few SASS features to keep the styles nice and 

### The approach to Responsive web design
As above, having sorted out what I wanted from the transition of slides, in order to cater for responsive websites the approach is to style for mobile first, in this case, using the breakpoints to style the elements as the viewport / screen size changes. You can see background images for the slides changing according to the device it is being displayed on and the transitions vary based on the same.

With regards to testing these, Chrone dev tools provide means to simulate multiple device viewports. I have used this functionality to test the responsiveness of this slider on multiple devices that I could emulate. Here you also have the option to view the media queries / breakpoints as you change the viewports for testing. 

## JS
This slider does not use any library hence the functionalities for sliding are added through JS which uses the ES6 syntax.
