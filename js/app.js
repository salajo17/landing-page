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

const section4 = document.getElementById('section4');
const section4Bounding = section4.getBoundingClientRect();
const section4Height = section4.offsetHeight;
const section4Width = section4.offsetWidth;

let currentActiveSection = null;

document.addEventListener('scroll', elementInViewport);

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// function for checking element are in view port/ changing class
function elementInViewport() {

    const section1Bounding = section1.getBoundingClientRect();
    const section2Bounding = section2.getBoundingClientRect();
    const section3Bounding = section3.getBoundingClientRect();

    if (section1Bounding.top >= -section1Height) {

        section1.classList.add("active");
        if (currentActiveSection == null) {
            currentActiveSection = section1;
        } else if (currentActiveSection != section1) {
            currentActiveSection.classList.remove("active");
            currentActiveSection = section1;
        }
        console.log('Element1 is in the viewport!', currentActiveSection);
    } else if (section2Bounding.top >= -section2Height) {

        section2.classList.add("active");
        if (currentActiveSection == null) {
            currentActiveSection = section2;
        } else if (currentActiveSection != section2) {
            currentActiveSection.classList.remove("active");
            currentActiveSection = section2;
        }
        console.log('Element2 is in the viewport!');
    } else if (section3Bounding.top >= -section3Height) {

        section3.classList.add("active");
        if (currentActiveSection == null) {
            currentActiveSection = section3;
        } else if (currentActiveSection != section3) {
            currentActiveSection.classList.remove("active");
            currentActiveSection = section3;
        }
        console.log('Element3 is in the viewport!');
    } else if (section4Bounding.top >= -section4Height) {

        section4.classList.add("active");
        if (currentActiveSection == null) {
            currentActiveSection = section4;
        } else if (currentActiveSection != section4) {
            currentActiveSection.classList.remove("active");
            currentActiveSection = section4;
        }
        console.log('Element4 is in the viewport!');
}}

// Scroll to anchor ID using scrollTO event
function navHandler(event) {
    event.preventDefault();
    const targetSection = event.target.getAttribute("data-target");
    console.log(targetSection);
    document.getElementById(targetSection).scrollIntoView({ behavior: "smooth" });
}

// build the nav
for (let i = 1; i < 5; i++) {
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