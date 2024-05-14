import { incVerdi } from "./update.js"

const bakke = document.querySelectorAll("[data-ground]") 
const fart = .05 

export function updateBakke(delta){
    bakke.forEach(ground => {
incVerdi(ground, "--left ", delta * fart* -1)
    } )
}