console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
console.log("(La solution est " + solution + ")");


for (var i=1; i<=6; i++){
    var nb = Number(prompt("saisir la valeur de votre choix :"));

    while (isNaN(nb)){
        console.log("la valeur demandée doit etre un chiffre ou un nombre! ");
        nb = Number(prompt());
    }
    
    if (nb < solution){
        console.log(nb+" est trop petit");
    } else if (nb > solution){
        console.log(nb+" est trop grand");
    } else if (nb === solution){
        console.log("Bravo! la solution etait "+nb);
        console.log("vous avez trouvé la reponse en "+ i +" essai(s)! Bien joué.");
        i = 6;
    }
}

if ((i === 7) & (nb !== solution)){
    console.log("perdu... La solution etait "+ solution);    
}