function canDrive(age, pays){
    /*age = prompt("entrz votre age")*1
    pays = prompt("entrez votre pays, FR pour France et US pour United State")
    let yesInFR = (age>=18 && pays == "FR")
    let yesInUs = (age>=16 && pays == "US")*/
    switch(pays){
        case "FR":
            if(age>=18)
                console.log("vous avez le droit de conduir en France")
            else
                console.log("vous n'avez pas le droit de conduir en France") 
            break 
        case "US":
            if(age>=16)
                console.log("vous avez le droit de conduir au Etat Unis")
            else
                console.log("vous n'avez pas le droit de conduir au Etat Unis")
            break 
        default :
            console.log("votrs pays n'est pas dans notre bases de donnees")
            break       
    }
}