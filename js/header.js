const headerClass = document.querySelector(".header");
let overlay = document.querySelector(".overlay");
let openBtn = document.querySelector(".open-btn");
let closeBtn = document.querySelector(".close-btn");

openBtn.addEventListener("click", () => {
    overlay.classList.remove("hide");
    headerClass.classList.add("headerMobileOpen");
    openBtn.classList.add("hide");
    closeBtn.classList.remove("hide");
});

closeBtn.addEventListener("click", () => {
    overlay.classList.add("hide");
    headerClass.classList.remove("headerMobileOpen");
    closeBtn.classList.add("hide");
    openBtn.classList.remove("hide");
});

let scrollPosition = window.scrollY;

window.addEventListener("scroll", function () {

    scrollPosition = window.scrollY

    if (scrollPosition >= 1) {
        headerClass.classList.add("scrolled");
    } else {
        headerClass.classList.remove("scrolled");
    }
});