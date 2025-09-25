function filtrerPairs(tab){
    let filtred = []
    filtred = tab.filter((element)=> element % 2 == 0);
    return filtred
}
let tableua = [1,2,3,4,5,6];
console.log(filtrerPairs(tableua));

  