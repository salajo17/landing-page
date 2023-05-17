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

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function anchorLinkClicked(evt) {
    console.log(evt);
    var sectionName = evt.getAttribute('href');
    console.log(sectionName);
    evt.preventDefault();
    sadadssdasd
};

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
}

const sectionLink2 = document.getElementById('section2link');
const section2 = document.getElementById('section2')

sectionLink2.addEventListener('click', (e) => {
    console.log('section2 clicked')
    section2.scrollIntoView({behavior: "smooth"});
    e.preventDefault();
    }, false);

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


