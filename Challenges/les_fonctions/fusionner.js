function fusionner1(tab1,tab2){
    let fusion_tab = tab1.concat(tab2)
    return fusion_tab
}

function fusionner2(tab1,tab2){
    for(let i = 0 ;i < tab2.length ; i++){
        tab1.push(tab2[i])
    }
    return tab1
    
}


let tab1 = ['hamza']
let tab2 = ['zaidi','robbin','tochak']

 console.log(fusionner2(tab1 , tab2));
