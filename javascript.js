const headerClass = document.querySelector(".header");


let scrollPosition = window.scrollY;

window.addEventListener("scroll", function() {

    scrollPosition = window.scrollY

    if (scrollPosition >= 1){
        headerClass.classList.add("scrolled");
    } else{
        headerClass.classList.remove("scrolled");
    }
});
