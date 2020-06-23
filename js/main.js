// 
// Handling the menu toggle
// 

var mobileNav = document.querySelector(".mobile-nav");
function showmenu(x) {
    x.classList.toggle("change");
    mobileNav.classList.toggle("open-nav");
}