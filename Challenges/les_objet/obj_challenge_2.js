// 1
const etudient = {
    nom : 'eren',
    age : 20,
    sePresenter(){
        console.log(`Bonjour, je m'appelle ${nom} et j'ai ${age} ans.`)
    }
}
// 2
const personne = {
    nom : ' Valverde ',
    prenom : 'Federico Valverde ',
    age : 27,
    nationalite : 'Uruguayen'
}
for(cle in personne){
    console.log(cle ," : ",personne[cle]);
}
// 3
const classe = {
    etudiants : ['hamza','hayat','wassim','sofian'],
    afficherEtudiants(){
        this.etudiants.map((element)=>{
            return console.log(element);
        })
    }
}
classe.afficherEtudiants()

// 4
const livres = [
    { titre: "Le Seigneur des Anneaux", auteur: "J.R.R. Tolkien", annee: 1954 },
    { titre: "1984", auteur: "George Orwell", annee: 1949 },
    { titre: "Harry Potter à l'école des sorciers", auteur: "J.K. Rowling", annee: 1997 }
];
livres.map((element)=>{
    return console.log(element.titre);
})
// 5

function trouverLivre(titre){
    return livres.find((element)=>{
        return element.titre == titre
    })
}

console.log(trouverLivre('Le Seigneur des Anneaux'));

