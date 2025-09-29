// 1
const entreprise ={
    adresse :{
        rue : 'msalla lkdima',
        ville : 'oued zem',
        codePostal : 25350
    }
}
// 2
const produits = [
    { nom: "Chaise", prix: 50, quantite: 10 },
    { nom: "Table", prix: 120, quantite: 5 },
    { nom: "Lampe", prix: 30, quantite: 20 }
];
function valeurTotale(Table){
    Table.map((element)=>{
        return console.log(element.nom ,'valeur totale :', element.prix * element.quantite);
    })
}
valeurTotale(produits);
// 3
class Animale{
    constructor(nom, type) {
        this.nom = nom;
        this.type = type;
    }
    parler(){
        console.log('wof wof wof');
    }
}
const chien = new Animale('roky','goldenRetriver');
chien.parler()

// 4
const employes = [
  { nom: "Alice", salaire: 2800 },
  { nom: "Bob", salaire: 3200 },
  { nom: "Claire", salaire: 4000 }
];

const employe_3000 = employes.filter(e => e.salaire > 3000);

console.log(employe_3000);

// 5
function cloner(obj) {
  return { ...obj };
}

const original = { nom: "Test", age: 25 };
const copie = cloner(original);

console.log(copie); 
