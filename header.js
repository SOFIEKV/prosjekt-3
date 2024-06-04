
let paa = "paa"
let px = 750

window.onscroll = function () {
    if (window.scrollY >= px || window.pageXOffset >= px) {
        document.getElementsByClassName("header")[0].classList.remove(paa)
    } else {
        document.getElementsByClassName("header")[0].classList.add(paa);
    }
}