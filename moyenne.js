
let students = [
    {
        name: "john",
        notes: [1, 20, 18, 19, 12]
    },
    {
        name: "jane",
        notes: [17, 18, 20, 13, 15]
    },
    {
        name: "sophie",
        notes: [17, 12, 14, 15, 13]
    },
    {
        name: "marc",
        notes: [2, 3, 5, 8, 9]
    },
    {
        name: "janet",
        notes: [18, 17, 18, 19, 12]
    }
]

function moyenne(notes){
    let somme = 0
    for(let i in notes)
        somme+=notes[i]
    return somme/notes.length 
}

for(let student of students){
    student.moyenne = moyenne(student.notes)
    student.best = Math.max(...student.notes)
    student.words = Math.min(...student.notes)
} 

const comparStudent = (x, y) =>  {
    return y.moyenne - x.moyenne
}

console.log(students.sort(comparStudent))

// for(let student of students)
//     console.log(student.moyenne)

const format = (student) => {
    return`${student.name} avec une moyenne de ${student.moyenne}` 
}

console.log(`top 3 des etudiants`)
for(let i = 0; i <= 2; i++)
    console.log(`${i+1}:${format(students[i])} meilleur notes :${students[i].best}, pire note:${students[i].words}`)

    let tempo = []
    for(let student of students)
        tempo.push(student.best) 

console.log(`la meilleur note de la classe est: ${Math.max(...tempo)}`)
   