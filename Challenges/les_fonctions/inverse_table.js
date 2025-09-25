function inverserTableau(tab){
    let reversed_tableau = [];
    for(let i = tab.length-1 ; i >= 0; i--){
       reversed_tableau.push(tab[i])   
    }
    return reversed_tableau;
}

let tableua = [1,2,3,4,5,6];
console.log(inverserTableau(tableua));
