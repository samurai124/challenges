const prompt = require('prompt-sync')();
let tableau = [];
let chaine_exist = false;
let chaine_chercher;
let index;
for(let i = 0; i< 3 ; i++){
    tableau.push(prompt("Entrer une chaine de caracteres :"));
}
chaine_chercher = prompt("Entrer la chaine de caracteres a rechercher :")
for(let i = 0; i<3;i++){
    if(chaine_chercher == tableau[i]){
        chaine_exist = true
        index = i
    }
}
if(chaine_exist){
    console.log(chaine_chercher ,"exist dans le tableau");
    console.log(chaine_chercher ,"position :" ,index);
}else{
    console.log(chaine_chercher,"n'existe pas dans le tableau");
}