

class student{
    ecole = "IAI-CAM"
    #notes = []

    constructor (firstname, lastName){
        this.firstname = firstname
        this.lastName = lastName
    }

    set setNotes (notes){
        if(Array.isArray(notes))
            this.#notes = notes
        else
            console.log("les notes sont contenut dans des objet")    
    }

    get getNotes (){
        return this.#notes
    }

    canPass(){ 
        let sum = 0
        for(let note of this.#notes)
            sum += note
        
        return (sum/this.#notes.length) >= 10
    }

    static numerot = 0  // static permet de declarer les variable et les methode static
   
}

class superStudent extends student{
    canPass (){
        if(super.canPass)
            return`fellicitation ${this.firstname}, vous avez reussi` 
        else
            return`desoler ${this.firstname}, vous n'avez pas reussi`
    }
}

let DDM = new superStudent("DEMNAJOU", "Diderot")

DDM.setNotes = [16, 12, 15, 18]
console.log(DDM.canPass())
console.log(DDM.getNotes)
