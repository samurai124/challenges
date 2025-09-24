const prompt = require('prompt-sync')();
let tableau = [];
let carees_tableau = [];
for(let i = 0; i< 5 ;i++){
    tableau.push(parseInt(prompt("Entrer un nombre entier :")));
}
carees_tableau = tableau.map((element)=> element*el);

console.log(carees_tableau);
