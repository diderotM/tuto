
/*
    pour generer un nombre aleatoire dans l'intervale [0, 1| en js, on utilise la fonctio Math.random
    pour recuperer le plus grand entier <= a un nombre, on utilise la fonction Math.floor
*/
/*
let x = Math.floor(Math.random() * 11)
let nbr 
const N=3

function isRigth(n){
    if(n === x)
        return true
    else
        return false    
}

function guess(){
    nbr = prompt("veillez entrer un nombre entre 0 et 10")*1
    if(isRigth(nbr))
        return true
    else
        return false
}

for(let i=0; i < N; i++){
    if(guess()){
        console.log("felicitation, vous avez deviner le nombre")
        break
    }else{
        if(i===2)
            console.log("desoler, vous avez atteint votre limite d'essais; Le nombre correct est:"+x)
    }
}

*/

function isPremier(n){
    if(n < 2)
        return false
    for(let i = 2; i <= Math.floor(n/2); i++){
        if(n%i === 0)
            return false
    }
    return true   
}

console.log(isPremier(0))
console.log(isPremier(1))
console.log(isPremier(2))
console.log(isPremier(3))
console.log(isPremier(12))
console.log(isPremier(99999991))