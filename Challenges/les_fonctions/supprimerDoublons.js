// i hade never pushed my brain to the limits untill this time
let tab = ['hamza','zaidi','hamza','zaidi','ahmed','ahmed','reda']

function supprimerDoublons1(tab){
    let filtred = []
    let repeted = [];
    for(let i = 0 ; i < tab.length ; i++){
        for(let j = 0; j < tab.length ; j++){
            if(tab[i] == tab[j]){
                repeted.push(tab[i])
            }
        }
    }
    let indexs = [];
    for(let i = 0 ; i < repeted.length ; i++){
        indexs.push(tab.indexOf(repeted[i]))
    }
    for(let i = 0 ; i < indexs.length ; i++){
        tab.splice(indexs[i],1);
    }
    return repeted;
}

console.log(supprimerDoublons1(tab));

// let tab = ['ooo','aaa','zzz','sss','ccc','ddd','xxx']
// let indexs = [1 , 2 , 3]
// let filtred = []

// for(let i = 0 ; i < indexs.length ; i++){
//         tab.splice(indexs[i],1);
//     }


// console.log(tab);

