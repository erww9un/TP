function calculer() {
    let total = 0;
    for (let i = 1; i <= 3; i++) {
        let q = Number(document.getElementById("q" + i).value);
        let p = Number(document.getElementById("p" + i).value);
        let r = q * p;
        document.getElementById("r" + i).value = r;
        total += r;
    }
    document.getElementById("total").value = total;
}

function reinit() {
    for (let i = 1; i <= 3; i++) {
        document.getElementById("r" + i).value = "";
    }
    document.getElementById("total").value = "";
}