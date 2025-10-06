function somme()
{
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a) + Number(b);
    document.getElementById("resultat").value = c;


}
function soustraction() {
    var a = Number(document.getElementById("t1").value);
    var b = Number(document.getElementById("t2").value);
    document.getElementById("resultat").value = a - b;
}

function multiplication() {
    var a = Number(document.getElementById("t1").value);
    var b = Number(document.getElementById("t2").value);
    document.getElementById("resultat").value = a * b;
}

function division() {
    var a = Number(document.getElementById("t1").value);
    var b = Number(document.getElementById("t2").value);
    if (b === 0) {
        alert("Erreur : Division par zéro impossible !");
        document.getElementById("resultat").value = "";
    } else {
        document.getElementById("resultat").value = a / b;
    }
}

function permute() {
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    document.getElementById("t1").value = b;
    document.getElementById("t2").value = a;
}

function parité() {
    var a = Number(document.getElementById("t1").value);
    var b = Number(document.getElementById("t2").value);
    var sum = a + b;
    var parityResult = (sum % 2 === 0) ? "Pair" : "Impair";
    document.getElementById("pariteResult").value = parityResult;
}

function reinitialiser() {
    t1.value = "" ;
    t2.value = "" ; 
    resultat.value = "" ;
    parite.value = "" ;
}


