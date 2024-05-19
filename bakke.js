import { incVerdi, settVerdi, faVerdi } from "../update.js"

const ground = document.querySelectorAll("[data-ground]") 
const fart = 0.03 


export function setupGround() {
    settVerdi(ground[0], "--left", 0)
    settVerdi(ground[1], "--left", 300)
  }
  
  export function updateGround(delta, speedScale) {
    ground.forEach(ground => {
      incVerdi(ground, "--left", delta * speedScale * fart * -1)
  
      if (faVerdi(ground, "--left") <= -300) {
        incVerdi(ground, "--left", 600)
      }
    })
  }