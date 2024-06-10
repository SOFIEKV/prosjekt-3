import { incVerdi, faVerdi,settVerdi } from "./update.js"

const hoppfart = 0.41
const tyngde = 0.0013    
const spillerElem = document.querySelector("[data-spiller]")
const DINO_FRAME_COUNT = 2
const FRAME_TIME = 100

let hopper
let spillerFrame
let currentFrameTime
let yVelocity

 
export function setupSpiller() {
    hopper = false
    spillerFrame = 0
    currentFrameTime = 0
    yVelocity = 0
    settVerdi(spillerElem, "--bottom", 0)
    document.removeEventListener("keydown", onHopp)
    document.addEventListener("keydown", onHopp)
  }
  
  export function spillertapt(){
    spillerElem.src= "bilder/spiller.png"
  }

  export function updateSpiller(delta, speedScale) {
    lop(delta, speedScale)
    hopp(delta)
  }

  export function spillerRect(){
    return spillerElem.getBoundingClientRect()
    }

export function startSpiller() {
    spillerElem.src = "../bilder/spiller.png"
  }

  
function lop(delta, speedScale) {
    if (hopper) {
      spillerElem.src = `../bilder/spiller.png`
      return
    }
  
    if (currentFrameTime >= FRAME_TIME) {
      spillerFrame = (spillerFrame + 1) % DINO_FRAME_COUNT
      spillerElem.src = `../bilder/spiller${spillerFrame}.png`
      currentFrameTime -= FRAME_TIME
    }
    currentFrameTime += delta * speedScale
  }

  function hopp(delta) {
    if (!hopper) return
  
    incVerdi(spillerElem, "--bottom", yVelocity * delta)
  
    if (faVerdi(spillerElem, "--bottom") <= 0) {
      settVerdi(spillerElem, "--bottom", 0)
      hopper = false
    }
  
    yVelocity -= tyngde * delta
  }
  

  function onHopp(e) {
    if (e.code !== "Space" || hopper) return
  
    yVelocity = hoppfart
    hopper = true
  }
