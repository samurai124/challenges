function supprimerDoublons(tab){
  return [...new Set(tab)]
}
let names = ['hamza','zaidi','hamza']
console.log(supprimerDoublons(names));

