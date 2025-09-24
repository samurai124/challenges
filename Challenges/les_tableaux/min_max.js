const prompt = require('prompt-sync')();
let tableau = [];
let min = +Infinity;
let max = -Infinity;
for(let i = 0; i< 7 ;i++){
    tableau.push(parseInt(prompt("Entrer un nombre entier :")));
}
for(let i = 0; i < 7 ; i++){
    if(min > tableau[i]){
        min = tableau[i]
    }
    if(max < tableau[i]){
        max = tableau[i]
    }
}
console.log("le min :",min);
console.log("le max :",max);

