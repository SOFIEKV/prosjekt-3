


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

document.getElementById("kildeKnapp").addEventListener('click', function () {
    const extraInfo = document.querySelector('.kilder');
    if (extraInfo.style.display === 'none') {
        extraInfo.style.display = 'block';
        document.getElementById("kildeKnapp").textContent = 'Skjul';
    } else {
        extraInfo.style.display = 'none';
        document.getElementById("kildeKnapp").textContent = 'Kilder';
    }
});

