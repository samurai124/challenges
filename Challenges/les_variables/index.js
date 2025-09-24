 const prompt = require("prompt-sync")();
 let nom = prompt("Entrer votre nom : ")
 let prenom = prompt("Entrer votre Prenom : ")
 let age = prompt("Entrer votre age : ")
 let sexe = prompt("votre sexe (m , f ) :")
 let Num_tell = prompt("Entrer votre nulero de telephone : ")
 console.log("Nom : ", nom);
 console.log("Prenom : ", prenom);
 console.log("Age : ", age);
 console.log("Sexe : ", sexe);
 console.log("Numéro de téléphone : ", Num_tell);




let temperature = prompt("entrer la temperature en Celsius: ");
let temperature_f = (temperature*1.8)+32
console.log("la temperature en Fahrenheit :", temperature_f);


let a = 10
let b = 30
let c = 9
let e;


e = a;
a = b;
b = c;
c = e;



let a = prompt("entrer a : ");
let b = prompt("entrer b : ");
console.log(a ,"+" , b ,"=" , a + b);
console.log(a ,"-" , b ,"=" , a - b);
console.log(a ,"*" , b ,"=" , a * b);
console.log(a ,"/" , b ,"=" , a / b);
console.log(a ,"%" , b ,"=" , a % b);


let num1 = prompt("Entrer le num 1 : ");
let num2 = prompt("Entrer le num 2 : ");
let num3 = prompt("Entrer le num 3 : ");
let num4 = prompt("Entrer le num 4 : ");
let somme = num1 + num2 + num3 + num4
let moyenne = somme / 4
console.log("somme : ", somme);
console.log("moyenne : ",somme / 4);







let vitesse = prompt("entrer la vitesse :");
let temps = prompt("Entrer le temps : ");
let distance = vitesse * temps;
console.log(distance);



let rayon = prompt("entrer le rayon : ");
let c = 2*Math.PI*rayon
console.log(c);



let number = 2098;
let revnumber = number.toString().split('').reverse().join('');
console.log(revnumber);





let km = prompt('Entrer la distance en km : ') ;
let mile = km / 1.609
console.log(mile);



let euro = prompt('Entrer le somme en euros : ');
let mad = euro * 10.61;
console.log(mad);



