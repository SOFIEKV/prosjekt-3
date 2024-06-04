


document.addEventListener("DOMContentLoaded", function() {
    const dropDown = document.getElementById("dropDown");
    const navBar = document.getElementById("navBar");

    dropDown.addEventListener("click", function() {
        navBar.classList.toggle("active");
    });
});



const skrollopp = document.querySelectorAll(".skrolloppKnapp");

skrollopp.forEach(element => {
    element.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});

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


