const prompt = require('prompt-sync')();
let tableau = [];
let isExist = false;
let index ;
let num_chercher ;
for(let i = 0; i< 8 ;i++){
    tableau.push(parseInt(prompt("Entrer un nombre entier :")));
}
num_chercher = prompt("Entrez le numero à rechercher : ")
for(let i = 0; i<8;i++){
    if(num_chercher == tableau[i]){
        isExist = true
        index = i
    }
}
if(isExist){
    console.log(num_chercher ,"exist dans le tableau");
    console.log(num_chercher ,"position :" ,index);
}else{
    console.log(num_chercher,"n'existe pas dans le tableau");
}
