const voiture = {
    marque : 'Ford',
    modele : 'mustang',
    annee : 2009
}
// 1
console.log("La marque : " ,voiture.marque,"\n l'annee :",voiture.annee);
// 2
voiture.annee = 2020;
console.log(voiture);
// 3
voiture.color = 'red';
// 5
delete voiture.marque

