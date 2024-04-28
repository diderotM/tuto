class Rectangle{

    constructor(width, height){
        if(!(height > 0) || !(width > height) )
            throw new Error("les donnees ne sont pas corrects")
        else{
            this.height = height
            this.width = width
        }           
    }

    /*isValid() {
        if(this.width <= this.height ){
            console.log("les doonnées saisis ne sont pas valide")
            return false
        }
        return true
    }
    */

    perimetre(){
        // if(this.isValid())
            return (this.height + this.width)*2
    }

    isBiggerThan(fig){
        return (fig.perimetre() < this.perimetre())
    }
}

class Square extends Rectangle{

    constructor (height){
        // super(height, height){
        if(!(height > 0) )
            throw new Error("les donnees ne sont pas corrects")
        else{
            this.height = height
            this.width = height
        }
        
        // }
    }

    // isValid(){
    //     if(this.height > 0)
    //         return true
    //     else{
    //         console.log("les doonnées ne sont pas valide")
    //         return false    
    //     }
    // }

    perimetre(){
        // if(this.isValid())
            return this.coté*4
    }

}

// let width = parseInt(prompt("entrez la longueur"))
// let height = parseInt(prompt("entrez la largeur"))

// const r = new Rectangle(width, height)

// console.log( `le perimettre du reectangle est :${r.perimetre()} `)

try{
    let width = parseInt(prompt("entrez la longueur"))
    let height = parseInt(prompt("entrez la largeur"))
    // let cote = parseInt(prompt("entrez le coter du carré"))

    const r = new Rectangle(width, height)
    // const c = new Square(cote)

    console.log( `le perimettre du reectangle est :${r.perimetre()} `)
}
catch(e){
    console.log("il y a une erreur dans les donnees saisir")
}

// const r2 = new Rectangle(18, 20)

// console.log(r.isBiggerThan(r2))

// const c = new Square(-4)
// console.log(c.isBiggerThan(r))