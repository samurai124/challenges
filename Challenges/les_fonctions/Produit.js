function  produitTableau(tab){
    let produit = 1;
    for(let i = 0;i<tab.length ; i++){
        produit *= tab[i]
    }
    return produit
}

let tableua = [1,2,3,4,5,6];
console.log(produitTableau(tableua));
