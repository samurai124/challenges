function tableMultiplication(n){
    let tabl_multi = []
    for(let i = 1 ; i <= 10 ; i++){
        tabl_multi.push(i*n);
    }
    return tabl_multi
}

console.log(tableMultiplication(5));