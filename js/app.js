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
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// function for checking element are in view port/ changing class
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const navLinks = document.querySelectorAll('.navbar__menu a');
            const activeLink = document.querySelector(`a[href="#${entry.target.id}"]`);

            navLinks.forEach((link) => {
                link.classList.remove('active')
            });

            sections.forEach((section) => {
                section.classList.remove('active')
            });
            activeLink.classList.add('active');
            entry.target.classList.add('active');
        }
    });
}, { threshold: .5 });

sections.forEach((section) => observer.observe(section));

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
    newAnchorItem.classList.add("menu__link");

    newAnchorItem.setAttribute("data-target", `section${i}`);

    newListItem.appendChild(newAnchorItem);
    navBar.appendChild(newListItem);

    newAnchorItem.addEventListener('click', navHandler);
}