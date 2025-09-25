const prompt = require("prompt-sync")();
let tableau = [];
let reversed_tableau = []
for(let i = 0; i< 5;i++){
    tableau.push(parseInt(prompt("Entrer un nombre :")));
}
 tableau.map((element)=>console.log(element))
for(let i = tableau.length -1; i >= 0; i--){
    reversed_tableau.push(tableau[i])   
}
 reversed_tableau.map((element)=>console.log(element))