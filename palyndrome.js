/*
function isPalyndrome(str){
    let strLength = str.length;
    let i=0;
    strLength--
    while(i <= strLength){
        if(str[i] !== str[strLength])
            return false
        i++
        strLength--    
    }
    return true
}
*/

function isPalyndrome(str){
    let strCopie = str.split('').reverse().join('')                     
    return strCopie.toUpperCase() === str.toUpperCase()
}

console.log(isPalyndrome("Sos"))
console.log(isPalyndrome("kayak"))
console.log(isPalyndrome("bonjour"))



