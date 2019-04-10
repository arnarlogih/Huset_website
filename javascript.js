const headerClass = document.querySelector(".header");
var overlay = document.getElementById("overlay");
var closeMenu = document.getElementById("close-menu");

document.getElementById("open-menu").addEventListener("click", function() {
    overlay.classList.add("show-menu");
});

document.getElementById("close-menu").addEventListener("click", function() {
    overlay.classList.remove("show-menu");
});



let scrollPosition = window.scrollY;

window.addEventListener("scroll", function() {

    scrollPosition = window.scrollY

    if (scrollPosition >= 1){
        headerClass.classList.add("scrolled");
    } else{
        headerClass.classList.remove("scrolled");
    }
});
