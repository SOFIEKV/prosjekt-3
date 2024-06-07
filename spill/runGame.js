import { setupGround, updateGround } from './bakke.js'
import { updateSpiller, setupSpiller, spillerRect, spillertapt } from "./spiller.js"
import { updateHinder, setupHinder, hinderRect } from "./hinder.js"

const boksBredde = 100
const boksHoyde = 30
const speedInc = 0.00001
const boksElm = document.querySelector('[data-boks]')
const scoreElem = document.querySelector('[data-score]')
const startElem = document.querySelector('[data-start]')

scale()
window.addEventListener("resize", scale)
document.addEventListener("keydown", start, { once: true })

let sisteTid
let speedScale
let score
function update(time) {
    if (sisteTid == null) {
        sisteTid = time
        window.requestAnimationFrame(update)
        return
    }
    const delta = time - sisteTid

    updateGround(delta, speedScale)
    updateSpiller(delta, speedScale)
    updateHinder(delta, speedScale)
    updateSpeed(delta)
    updateScore(delta)
    if(skjekkerKollisjon()) return tap()

    sisteTid = time
    window.requestAnimationFrame(update)
}

function skjekkerKollisjon() {
    const spillRect = spillerRect()
    return hinderRect().some(rect => erKollisjon(rect, spillRect))
}
function erKollisjon(rect1, rect2) {
    return rect1.left < rect2.right &&
     rect1.top < rect2.bottom &&
     rect1.right > rect2.left &&
      rect1.bottom > rect2.top
}


function updateSpeed(delta) {
    speedScale += delta * speedInc
}

function updateScore(delta) {
    score += delta * 0.01
    scoreElem.textContent = Math.floor(score)
}

function start() {
    sisteTid = null
    speedScale = 1
    score = 0
    setupGround()
    setupSpiller()
    setupHinder()
    startElem.classList.add("hide")
    window.requestAnimationFrame(update)
}
function tap(){
    spillertapt()
    setTimeout(() => {
document.addEventListener("keydown", start, {once:true})
startElem.classList.remove("hide")
    }, 100)
}


function scale() {
    let boksScale
    if (window.innerWidth / window.innerHeight < boksBredde / boksHoyde) {
        boksScale = window.innerWidth / boksBredde
    }
    else {
        boksScale = window.innerHeight / boksHoyde
    }
    boksElm.style.width = `${boksBredde * boksScale}px`
    boksElm.style.height = `${boksHoyde * boksScale}px`
}


const popup = document.querySelector(".intro")
window.addEventListener("load", function () {
  popup.classList.add("aktiv");
});


const lukk = document.getElementById("lukkKnapp")
lukk.addEventListener("click", function () {
  if (popup.classList.contains("aktiv")) {
    window.location.href = "../html/index.html";
  }
});


const startspill = document.getElementById("startSpill")
startspill.addEventListener("click", function () {
  if (popup.classList.contains("aktiv")) {
    popup.classList.remove("aktiv");
  }
});

const exit = document.querySelector(".exit")
exit.addEventListener("click", function () {
    window.location.href = "../html/index.html";
  }
);

