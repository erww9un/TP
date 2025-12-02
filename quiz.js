function testqcm() {
    let score = 0;
    
    if (document.getElementById('q1_c').checked) {
        score++;
    }

    if (document.getElementById('q2_a').checked) {
        score++;
    }

    if (document.getElementById('q3_b').checked && document.getElementById('q3_d').checked) {
        score++;
    }
    if (document.getElementById('q4_c').checked) { score++; }

    if (document.getElementById('q5_a').checked && document.getElementById('q5_c').checked) { score++; }

    if (document.getElementById('q6_b').checked) { score++; }

    if (document.getElementById('q7_a').checked) { score++; }

    if (document.getElementById('q8_c').checked) { score++; }

    if (document.getElementById('q9_c').checked) { score++; }

    if (document.getElementById('q10_b').checked) { score++; }

    alert("Votre score est de : " + score + " bonnes réponses.");
}

function ouvrirCorrige() {
    window.open('corrige.html', 'Corrigé du QCM', 'width=600,height=800,scrollbars=yes');
}