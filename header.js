
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
