function compterOccurrences(tab, valeur){
    let compt = 0;
    for(let i = 0 ; i < tab.length ; i++){
        if(tab[i] == valeur){
            compt++
        }
    }
    return compt
}

let tableua = [1,2,4,2,3,4,5,2,6];
console.log(compterOccurrences(tableua ,4))
