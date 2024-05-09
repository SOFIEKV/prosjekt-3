import { incVerdi } from "./update.js"

const bakke = document. querySelectorAll("[data-bakke]") 
const fart = .05 

export function updateBakke(delta){
    bakke.forEach(bakke => {
incVerdi(bakke, "--left ", delta * fart* -1)
    } )
}