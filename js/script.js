//Colored bar when scroll down.
const header = document.querySelector(".header");

document.addEventListener('scroll', function () {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.classList.add("solid");
    } else {
        header.classList.remove("solid");
    }
});

// hamburger menu
function myFunction() {
    var navbar = document.querySelector('.nav-header');
    navbar.classList.toggle('show');
    console.log("working");
};