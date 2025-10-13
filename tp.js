function calcul_moyenne() {
    var n1 = prompt("Donner la première note :");
    var n2 = prompt("Donner la deuxième note :");
    var n3 = prompt("Donner la troisième note :");

    var somme = Number(n1) + Number(n2) + Number(n3);

    document.write("Voici la somme : " + somme + "<br>");
    var moyenne = somme/3;

    document.write("Voici la moyenne :" + moyenne + "<br>");

    if (moyenne < 10) {
        document.write("Redoublant");
    }
    else if (moyenne < 12) { 
        document.write("Admis - Passable");
    }
    else if (moyenne < 14) { 
        document.write("Admis - Bien");
    }
    else { 
        document.write("Admis - Très Bien");
    }
}

function verifier_temperature() {
    let temp = prompt("Entrez la température en degrés (°C)");
    if (temp > 10) {
        document.write("Froid");
    }
    else if (temp > 25) {
        document.write("Normal");
    }
    else if (temp < 25) {
        document.write("Chaud");
    }
}

function comparaison_nombre() {
    let nb1 = prompt("Entrez le premier nombre")
    let nb2 = prompt("Entrez le deuxième nombre")
    
    if (nb1 > nb2) {
        plusGrand = nb1;
        plusPetit = nb2;
      } else if (nb2 > nb1) {
        plusGrand = nb2;
        plusPetit = nb1;
      } 
}
