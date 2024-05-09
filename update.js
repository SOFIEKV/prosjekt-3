export function faVerdi(elem, prop){
    return parseFloat(getComputedStyle(elem).getPropertyValue(prop))||0
}

export function settVerdi(elem, prop, value){
 elem.style.setProperty(prop, value)
}

export function incVerdi(elem, prop, inc){
settVerdi(elem, prop, faVerdi(elem, prop)+ inc)
}