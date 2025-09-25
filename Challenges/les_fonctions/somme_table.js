function sommeTableau(tabl){
    let somme = 0;
    somme = tabl.reduce((element,somme)=>somme += element)
    return somme
}

let tableua = [1,2,3,4,5,6];
 console.log(sommeTableau(tableua))



