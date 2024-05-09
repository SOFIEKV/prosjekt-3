import{ updateBakke }from './bakke.js'
const boksElm = document.querySelector('[data-boks]')
const boksBredde = 100
const boksHoyde = 30


scale()
window.addEventListener("resize", scale)

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

let sisteTid = 0
function update(time){
    if(sisteTid == null){
        sisteTid = time
        window.requestAnimationFrame(update)
        return
    }
    const delta= time - sisteTid

    updateBakke(delta)


    console.log(delta)
 
    sisteTid = time
    window.requestAnimationFrame(update)
}
window.requestAnimationFrame(update)