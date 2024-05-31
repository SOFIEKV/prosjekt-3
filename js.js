


const kildeKnapp = document.getElementById("kildeKnapp")
const kilder = document.querySelector(".kilder")

kildeKnapp.addEventListener("click", function () {
    if (kilder.style.display == "none") {
        kilder.style.display = "block"
    }
    else {
        kilder.style.display = "none";
    }
})

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}


