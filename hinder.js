import { faVerdi, incVerdi, settVerdi } from "../update.js"

const hinderFart = 0.03
const hinderMinIntervall = 500
const hinderMaxIntervall = 2000
const boksElem = document.querySelector("[data-boks]")


let nesteHinderTime
export function setupHinder() {
  nesteHinderTime = hinderMinIntervall
  document.querySelectorAll("[data-hinder]").forEach(hinder => {
    hinder.remove()
  })
  document.querySelectorAll("[data-hinder]").forEach(hinder => {
    hinder.remove()
  })
}

  
export function updateHinder(delta, speedScale) {
    document.querySelectorAll("[data-hinder]").forEach(hinder => {
      incVerdi(hinder, "--left", delta * speedScale * hinderFart * -1)
      if (faVerdi(hinder, "--left") <= -100) {
        hinder.remove()
      }
    })
  
    if (nesteHinderTime <= 0) {
      lagHinder()
      nesteHinderTime = randomTallMellom(hinderMinIntervall, hinderMaxIntervall) / speedScale
    }
    nesteHinderTime -= delta
  }

  export function hinderRect(){
    return [...document.querySelectorAll("[data-hinder]")].map(hinder => {
        return hinder.getBoundingClientRect()
    })
  }

  function lagHinder() {
    const hinder = document.createElement("img")
    hinder.dataset.hinder = true
    hinder.src = "bilder/hinder.png"
    hinder.classList.add("hinder")
    settVerdi(hinder, "--left", 100)
    boksElem.append(hinder)
  }


  function randomTallMellom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
/*

  export function getCactusRects() {
    return [...document.querySelectorAll("[data-cactus]")].map(cactus => {
      return cactus.getBoundingClientRect()
    })
  }
*/


  

  
  