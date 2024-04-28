/*const a = prompt("entre un nombre")
const b = prompt("entre un secon nombre") 
const p=a*b

if(p<0)
    console.log(a+ "*"+b+"="+p+" est negatif");
else
    console.log("le produit "+a+ " * "+b+" = "+p+" est positif");
    

let nbr
do{
    nbr=prompt("entre un nombre compris entre 0 et 10")
}while(nbr<0 || nbr>10);    
console.log('le nombre est entre 0 et 10')
while(nbr>=0){
    console.log(nbr)
    nbr--
}

*/

let nbr=15

let nombre=prompt("entre un nombre")*1

while(nombre !== nbr){
    if(nombre > nbr)
        nombre = prompt("le nombre n'est pas correct, entre un nombre plus petit")*1
    else{
        if(nombre < nbr)
        nombre = prompt("le nombre n'est pas correct, entre un nombre plus grand")*1
    } 
        
}

console.log("bravo!! le nombre est correct")