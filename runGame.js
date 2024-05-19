import{ setupGround, updateGround }from './bakke.js'
import { updateSpiller, setupSpiller, } from "./spiller.js"

const boksBredde = 100
const boksHoyde = 30
const speedInc = 0.00001 
const boksElm = document.querySelector('[data-boks]')
const scoreElem = document.querySelector('[data-score]')
const startElem = document.querySelector('[data-start]')

scale()
window.addEventListener("resize", scale)
document.addEventListener("keydown", start, {once: true})




let sisteTid 
let speedScale 
let score 
function update(time){
    if(sisteTid == null){
        sisteTid = time
        window.requestAnimationFrame(update)
        return
    }
    const delta= time - sisteTid

    updateGround(delta, speedScale)
    updateSpiller(delta, speedScale)
    updateSpeed(delta)
    updateScore(delta)

    sisteTid = time
    window.requestAnimationFrame(update)
}
function updateSpeed(delta){
    speedScale += delta * speedInc
}

function updateScore(delta){
    score += delta * 0.01
    scoreElem.textContent = Math.floor(score)
}

function start(){
    sisteTid = null
    speedScale = 1
    score= 0
    setupGround()
    setupSpiller()
    startElem.classList.add("hide")
    window.requestAnimationFrame(update)
}

function scale(){
    let boksScale
    if(window.innerWidth/window.innerHeight < boksBredde/boksHoyde){
        boksScale = window.innerWidth/boksBredde
    }
    else{
        boksScale = window.innerHeight/boksHoyde
    }
    boksElm.style.width = `${boksBredde * boksScale}px`
    boksElm.style.height = `${boksHoyde * boksScale}px`
}
