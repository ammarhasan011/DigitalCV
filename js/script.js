//Colored bar when scroll down.
const header = document.querySelector(".header");

document.addEventListener("scroll", function () {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    header.classList.add("solid");
  } else {
    header.classList.remove("solid");
  }
});

// hamburger menu
function myFunction() {
  var navbar = document.querySelector(".nav-header");
  navbar.classList.toggle("show");
  console.log("working");
}

// const menuBtn = document.querySelector('.menu-btn');
// const nav = document.querySelector('.nav');

// let showNav = false;

// menuBtn.addEventListener('click', toggleNav);

// function toggleNav() {
//     if (!showNav) {
//         menuBtn.classList.add('open');
//         nav.classList.add('show-nav');

//         showNav = true;
//     } else {
//         menuBtn.classList.remove('open');
//         nav.classList.remove('show-nav');

//         showNav = false;
//     }
// }
