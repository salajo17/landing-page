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
const section1 = document.getElementById('section1');
const section1Bounding = section1.getBoundingClientRect();
const section1Height = section1.offsetHeight;
const section1Width = section1.offsetWidth;

const section2 = document.getElementById('section2');
const section2Bounding = section2.getBoundingClientRect();
const section2Height = section2.offsetHeight;
const section2Width = section2.offsetWidth;

const section3 = document.getElementById('section3');
const section3Bounding = section3.getBoundingClientRect();
const section3Height = section2.offsetHeight;
const section3Width = section3.offsetWidth;

let currentActiveSection = null;

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

        section1.classList.add("active");
        if (currentActiveSection == null) {
            currentActiveSection = section1;
        } else if (currentActiveSection != section1) {
            currentActiveSection.classList.remove("active");
            currentActiveSection = section1;
        }
        console.log('Element1 is in the viewport!', currentActiveSection);
    } else if (section2Bounding.top >= -section2Height
        && section2Bounding.left >= -section2Width
        && section2Bounding.right <= (window.innerWidth || document.documentElement.clientWidth) + section2Width
        && section2Bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + section2Height) {

        section2.classList.add("active");
        if (currentActiveSection == null) {
            currentActiveSection = section2;
        } else if (currentActiveSection != section2) {
            currentActiveSection.classList.remove("active");
            currentActiveSection = section2;
        }
        console.log('Element2 is in the viewport!');
    } else if (section3Bounding.top >= -section3Height
        && section3Bounding.left >= -section3Width
        && section3Bounding.right <= (window.innerWidth || document.documentElement.clientWidth) + section3Width
        && section3Bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + section3Height) {

        section3.classList.add("active");
        if (currentActiveSection == null) {
            currentActiveSection = section3;
        } else if (currentActiveSection != section3) {
            currentActiveSection.classList.remove("active");
            currentActiveSection = section3;
        }
        console.log('Element3 is in the viewport!');
    }
}

function navHandler(event) {
    event.preventDefault();
    const targetSection = event.target.getAttribute("data-target");
    console.log(targetSection);
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

    newAnchorItem.setAttribute("data-target", `section${i}`);

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

