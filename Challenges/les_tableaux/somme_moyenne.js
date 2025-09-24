const prompt = require('prompt-sync')();
let tableau = [];
let somme ;
let moyenne ;
for(let i = 0; i< 10 ;i++){
    tableau.push(parseInt(prompt("Entrer un nombre entier :")));
}
somme = tableau.reduce((element,somme)=> somme += element,0)
moyenne = somme/tableau.length;

console.log('somme :',somme);
console.log('moyenne :',moyenne)

