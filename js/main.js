import driversNavBtns from './drivers/navBtns.js'
let isVisibleNavBar = false;


const btnPrimary = document.querySelector(".nav__h1-responsive");
btnPrimary.addEventListener("click", e => {
    window.location.reload()   
});

driversNavBtns()


const btnNav = document.querySelector(".nav-responsive__nav-btn");
const navResponsive = document.querySelector(".nav-responsive");
btnNav.addEventListener("click", () => {
    const body = document.querySelector(".body");
    if (!isVisibleNavBar) {
        isVisibleNavBar = true;
        navResponsive.children[2].style.display = "flex";
        navResponsive.children[1].children[0].style.display = "none";
        navResponsive.children[1].children[1].style.display = "block"    
        navResponsive.children[2].style.borderBottom = "1px solid black";
        navResponsive.style.borderBottom = "1px solid black"
        navResponsive.style.background = "rgb(69, 6, 6)";
        navResponsive.style.position = "fixed";
    } else {
        isVisibleNavBar = false;
        navResponsive.children[2].style.display = "none";
        navResponsive.children[1].children[1].style.display = "none";
        navResponsive.children[1].children[0].style.display = "block"    
        navResponsive.style.borderBottom = "none"
        navResponsive.style.background = "transparent";
        navResponsive.style.position = "absolute";
    }
});
