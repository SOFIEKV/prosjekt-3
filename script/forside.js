
let B = "borte"
let px = 750

window.onscroll = function () {
    if (window.scrollY >= px) {
        document.getElementsByClassName("header")[0].classList.remove(B)
    } else {
        document.getElementsByClassName("header")[0].classList.add(B);
    }
}


const skrollned = document.querySelector(".lesMer");

skrollned.addEventListener("click", function () {
    window.scrollTo({
        top: 750,
        behavior: "smooth"
    });
});