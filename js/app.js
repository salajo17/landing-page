/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const navBar = document.querySelector('ul');
var section1 = document.getElementById('section1');
var section1Bounding = section1.getBoundingClientRect();
var section1Height = section1.offsetHeight;
var section1Width = section1.offsetWidth;

var section2 = document.getElementById('section2');
var section2Bounding = section2.getBoundingClientRect();
var section2Height = section2.offsetHeight;
var section2Width = section2.offsetWidth;

var section3 = document.getElementById('section3');
var section3Bounding = section3.getBoundingClientRect();
var section3Height = section2.offsetHeight;
var section3Width = section3.offsetWidth;

document.addEventListener('scroll', elementInViewport);

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function elementInViewport() {

    var section1Bounding = section1.getBoundingClientRect();
    var section2Bounding = section2.getBoundingClientRect();
    var section3Bounding = section3.getBoundingClientRect();

    if (section1Bounding.top >= -section1Height
        && section1Bounding.left >= -section1Width
        && section1Bounding.right <= (window.innerWidth || document.documentElement.clientWidth) + section1Width
        && section1Bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + section1Height) {

        console.log('Element1 is in the viewport!');
    } else if (section2Bounding.top >= -section2Height
        && section2Bounding.left >= -section2Width
        && section2Bounding.right <= (window.innerWidth || document.documentElement.clientWidth) + section2Width
        && section2Bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + section2Height) {

        console.log('Element2 is in the viewport!');
    } else if (section3Bounding.top >= -section3Height
        && section3Bounding.left >= -section3Width
        && section3Bounding.right <= (window.innerWidth || document.documentElement.clientWidth) + section3Width
        && section3Bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + section3Height) {

        console.log('Element3 is in the viewport!');
    }
}

function navHandler(event) {
    event.preventDefault();
    const targetSection = event.target.getAttribute("data-target");
    document.getElementById(targetSection).scrollIntoView({ behavior: "smooth" });
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
for (let i = 1; i < 4; i++) {
    const newListItem = document.createElement('li');
    const newAnchorItem = document.createElement('a');

    newAnchorItem.href = `#section${i}`;
    newAnchorItem.textContent = `Section ${i}`;
    newAnchorItem.id = `section${i}link`;

    newListItem.appendChild(newAnchorItem);
    navBar.appendChild(newListItem);

    newAnchorItem.addEventListener('click', navHandler);
}

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

