
let paa = "paa"
let px = 600
let maxPx = 700

window.onscroll = function () {
    if (window.scrollY >= px || window.pageYOffset >= px) {
        document.getElementsByClassName("KF2")[0].classList.add(paa)
    } /*else {
        document.getElementsByClassName("KF2")[0].classList.remove(paa);
    }*/
    if(window.scrollY >= maxPx || window.pageYOffset >= maxPx){
        document.getElementsByClassName("KF2")[0].classList.remove("paa")
    }
    
}
