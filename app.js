/*========================================
--> NAVIGATION
========================================*/

// Nav elements
const nav = document.querySelector("nav");
// Contains nav items (Home, Talks, Papers)
const navList = document.querySelector(".navList");
// Only visible in mobile view. Contains navBtn.
const navBar = document.querySelector(".navBar");
// Toggles nav visibility in mobile view.
const navBtn = document.querySelector(".nav__btn");
// Screen size for toggling between mobile and bigger screens
// Must be the same parm as in style.css/NAVIGATION/media query for bigger screen sizes
let biggerScreens = window.matchMedia("(min-width: 600px)");

// A helper function. Answers the question if navList should be opened and sets the parameters for the different nav elements.
function openNav(bool) {
  navBtn.classList.remove(bool ? "openNav" : "closeNav");
  navBtn.classList.add(bool ? "closeNav" : "openNav");
  navBtn.setAttribute("aria-label", `${bool ? "close" : "open"} navigation`);
  navList.style.transform = `translateY(${bool ? "0" : "-12rem"})`;
}

// Toggles navList in mobile view
function navToggle() {
  if (navBtn.classList.contains("openNav")) {
    openNav(true);
  } else {
    openNav(false);
  }
}

// Toggles the visibility of navList and navBar depending on screensize
function navVisibility(screenSize) {
  if (screenSize.matches) {
    // If media query matches
    openNav(true);
    navBar.style.display = "none";
  } else {
    openNav(false);
    navBar.style.display = "flex";
  }
}

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

/*========================================
--> INDEX
========================================*/

const indexBtn = document.querySelector(".index__btn");
const indexList = document.querySelector(".index");
// Must be the same as in style.css/VARIABLES/--index-width
const indexWidth = "30vw";

function openIndex(bool) {
  indexList.style.transform = bool ? `translateX(-${indexWidth})` : "translateX(0)";
  indexBtn.classList.remove(bool ? "openIndex" : "closeIndex");
  indexBtn.classList.add(bool ? "closeIndex" : "openIndex");
}

function toggleIndex() {
  if (indexBtn.classList.contains("openIndex")) {
    openIndex(true);
  } else {
    openIndex(false);
  }
}

// Toggles the visibility of indexList and indexBtn depending on screensize
function indexVisibility(screenSize) {
  if (screenSize.matches) {
    // If media query matches
    openIndex(true);
    indexBtn.style.display = "none";
    indexList.style.transform = `translateX(0)`;
  } else {
    openIndex(false);
    indexBtn.style.display = "block";
  }
}

/*========================================
--> SECURE EMAIL DISPLAY
========================================*/

const emailContainer = document.querySelector(".contact__email");
const email1 = "sandor.kisfaludi-bak";
const email2 = "mpi-inf.mpg.de";

// Checking if the element exists on the page
// (If it doesn't, it will stop the JS interpreter and won't execute the rest of the code)
if (emailContainer) {
  emailContainer.innerHTML = `${email1}@${email2}`;
}

/*========================================
--> FOOTER - CURRENT YEAR
========================================*/
const yearBox = document.querySelector(".footer__year");
let currentYear = new Date().getFullYear();

if (yearBox) {
  yearBox.innerHTML = currentYear;
}

/*========================================
--> EVENT LISTENERS
========================================*/

document.addEventListener(
  "click",
  function(event) {
    if (event.target.matches(".nav__btn")) {
      navToggle();
    }

    if (event.target.matches(".index__btn")) {
      toggleIndex();
    }
  },
  false
);

navVisibility(biggerScreens); // Call listener function at run time
biggerScreens.addListener(navVisibility); // Attach listener function on state changes

if (indexList) {
  indexVisibility(biggerScreens); // Call listener function at run time
  biggerScreens.addListener(indexVisibility); // Attach listener function on state changes
}
