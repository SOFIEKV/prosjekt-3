let paa = "paa"
let px = 700

window.onscroll = function () {
    if (window.scrollY >= px || window.pageYOffset >= px) {
        document.getElementsByClassName("header")[0].classList.add(paa)
    } else {
        document.getElementsByClassName("header")[0].classList.remove(paa);
    }
}


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

