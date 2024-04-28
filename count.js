let mots = `Il y a trois termes dont vous devez absolument comprendre le sens en HTML. Ce sont les termes élément, balise et attribut. Les éléments, tout d’abord, vont nous servir à définir des objets dans notre page. Grâce aux éléments, nous allons pouvoir définir un paragraphe (élément p), des titres d’importances diverses (éléments h1, h2, h3, h4, h5 et h6) ou un lien (élément a). Les éléments sont constitués de balises. Dans la majorité des cas, un élément est constitué d’une paire de balises : une balise ouvrante et une balise fermante.`
let ignorer = [",", ";", "!", "?", ".", ":", "...", "(", ")"]
let frequences = {}
// l'objet frequence vas contenir chaque mot de la phases et le nombre d'accurence de ces mots {mot: occurence}

mots = mots.toLowerCase()
           .replaceAll(",", "") 
           .replaceAll(":", "") 
           .replaceAll(".", "") 
           .replaceAll(")", "") 
           .replaceAll("(", "") 
           .replaceAll("à", "a") 
           .split(" ")
             
for(let mot of mots){
    if(mot !== ""){             // ceci permet d'exclure les carractere vide 
        if(frequences[mot])    // frequences[mot] renvera undefined si le mot apparait pour la premiere fois dans la phrase
             frequences[mot]++  // si le mot existe deja, le nombre d'occurence est dont incrementer
        else
            frequences[mot] = 1 
    }
}

// maintenant, nous allons organiser notre tableaux de frequence de facons a renger le different mots par leur ordre d'apparution

let frequenceArray = []

for(let ellement in frequences){
    frequenceArray.push({
        mot: ellement,
        occurence:frequences[ellement]
    })
}

console.log(frequenceArray.sort((a, b) => {
    return b.occurence - a.occurence
}))