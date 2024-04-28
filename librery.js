class Book{

    page = 1

    constructor(titre, nbrPage){
        this.title = titre
        this.nbrPage = nbrPage
    }

    nextBook(){
        this.page++
    }

    closeBook(){
        this.page = 1
    }
}

class library{

    libraryBooks = []

    addBook(Book){
        this.libraryBooks.push(Book)
    }

    addBooks(Books){
        Books.forEach((book) => this.addBook(book))
        // for(let Book of Books)
        //     this.libraryBooks.push(Book)
    }

    finBookByLetter(char){
        
        console.log(this.libraryBooks.filter((book) => book.title[0].toLowerCase() === char.toLowerCase()))
        // for(let book of this.libraryBooks){
        //     // let tempoBook = book.title.toLowerCase().split("")
        //     if(book.title[0].toLowerCase() === char.toLowerCase())
        //         console.log(book)
        // }
    }
}

const b = new Book("siegneur des anneaux", 200)

console.log(b.page)
b.nextBook()
console.log(b.page)
b.closeBook()
console.log(b.page)

const l = new library()

l.addBook(b)
l.addBooks([
    new Book("Ready player one", 100),
    new Book("oui-oui", 10),
    new Book("sillage", 50)
])
l.finBookByLetter("s")