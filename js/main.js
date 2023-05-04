const btnPrimary = document.querySelector(".nav__h1-responsive");
btnPrimary.addEventListener("click", e => {
    window.location.reload()   
})

const body = document.querySelector(".body");

const btnNav = document.querySelector(".nav-responsive__nav-btn");
const navResponsive = document.getElementById("navResponsive");
btnNav.addEventListener("click", () => navResponsive.classList.toggle("QuitNav"))

