function motsLongs(tabmos , longeur){
    let newtab = []
    newtab = tabmos.filter((element)=>element.length >= longeur);
    return newtab
}

let tab = ['hamza' , 'wadie' , 'reda' ,'badr' ,'naser']
console.log(motsLongs(tab,5));
