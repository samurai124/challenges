function maxTable(tabl){
    let max = -Infinity
    for(let i = 0 ; i<tabl.length;i++){
        if(max < tabl[i]){
            max = tabl[i]
        }
    }
    return max
}

let tableua = [1,2,3,4,5,6];
console.log(maxTable(tableua));
