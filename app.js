/*========================================
--> NAVIGATION
========================================*/

// Nav elements
const nav = document.querySelector("nav");
const navList = document.querySelector(".navList"); // Contains nav items (Home, Talks, Papers)
const navBar = document.querySelector(".navBar"); // Only visible in mobile view. Contains navToggleBtn.
const navToggleBtn = document.querySelector(".navToggle"); // Toggles nav visibility in mobile view.

// A helper function. Answers the question if navList should be opened and sets the parameters for the different nav elements.
function openNav(bool) {
  navToggleBtn.classList.remove(`${bool ? "navClosed" : "navOpen"}`);
  navToggleBtn.classList.add(`${bool ? "navOpen" : "navClosed"}`);
  navToggleBtn.setAttribute("aria-label", `${bool ? "close" : "open"} navigation`);
  navList.style.transform = `translateY(${bool ? "0" : "-12rem"})`;
}

// Toggles navList in mobile view
function navToggle() {
  if (navToggleBtn.classList.contains("navClosed")) {
    openNav(true);
  } else {
    openNav(false);
  }
}
navToggleBtn.addEventListener("click", navToggle);

// Hides nav on scroll down
// Reveals nav on scroll up
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    nav.style.top = "0";
  } else {
    nav.style.top = "-12rem";
  }
  prevScrollpos = currentScrollPos;
};

// Toggles the visibility of navList and navBar depending on screensize
function navVisibility(screenSize) {
  if (screenSize.matches) {
    // If media query matches
    openNav(true);
    navToggleBtn.removeEventListener("click", navToggle);
    navBar.style.display = "none";
  } else {
    openNav(false);
    navToggleBtn.addEventListener("click", navToggle);
    navBar.style.display = "flex";
  }
}
let biggerScreens = window.matchMedia("(min-width: 600px)"); // Must be the same parm as in style.css/NAVIGATION/media query for bigger screen sizes
navVisibility(biggerScreens); // Call listener function at run time
biggerScreens.addListener(navVisibility); // Attach listener function on state changes

/*========================================
--> SECURE EMAIL DISPLAY
========================================*/
const emailContainer = document.querySelector(".contact__email");
const email1 = "sandor.kisfaludi-bak";
const email2 = "mpi-inf.mpg.de";

emailContainer.innerHTML = `${email1}@${email2}`;
