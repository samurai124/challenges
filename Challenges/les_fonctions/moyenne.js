function moyenne(tab){
    let somme = 0;
    let moyenne = 0;
    somme = tab.reduce((element,somme)=>somme += element,0)
    moyenne = somme / tab.length
    return moyenne
}

let tableua = [1,2,3,4,5,6];
console.log(moyenne(tableua));
