
const dropDown = document.querySelector(".dropDown");
const navBar = document.querySelector(".navBar");
const navLink = document.querySelectorAll(".link");


dropDown.addEventListener("click", mobileMeny);
navLink.forEach(n => n.addEventListener("click", closeMeny));

function mobileMeny() {
    dropDown.classList.toggle("active");
    navBar.classList.toggle("active");
}

function closeMeny() {
    dropDown.classList.remove("active");
    navBar.classList.remove("active");
}



let paa = "paa"
let px = 700

window.onscroll = function () {
    if (window.scrollY >= px || window.pageYOffset >= px) {
        document.getElementsByClassName("header")[0].classList.add(paa)
    } else {
        document.getElementsByClassName("header")[0].classList.remove(paa);
    }
}
