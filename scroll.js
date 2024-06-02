
let paa = "paa";
let px = 500;
let maxPx = 600;

window.onscroll = function () {
    document.querySelectorAll(".KF2").forEach((section, index) => {
        let sectionTop = section.offsetTop;
        let sectionBottom = sectionTop + section.offsetHeight;

        if (window.scrollY + window.innerHeight >= sectionTop + px) {
            section.classList.add(paa);
        } 

        if (window.scrollY + window.innerHeight >= sectionBottom + maxPx) {
            section.classList.remove(paa);
        }
    });
};

