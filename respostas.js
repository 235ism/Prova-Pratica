function corrigir() {
    let tela = document.getElementById('tela');
    tela.classList.remove('hide');
    let acertos = 0;
    let nom = document.getElementById('texto').value;
    document.getElementById('nome').innerHTML = 'Nome: '+nom;
    let q01 = document.getElementById('Q01').value;
    if (q01 == 'informatica') {
        acertos += 1;
    }
    let q02 = document.getElementById('Q02').value;
    let op1 = q02.includes('Informática');
    let op2 = q02.includes('Administração');
    let op3 = q02.includes('Enfermagem');
    if (op1 && op2 && op3) {
        acertos += 1;
    }
    if (document.getElementById('check1').checked || document.getElementById('check3').checked) {
        
    } else if (document.getElementById('check2').checked && document.getElementById('check4').checked) {
        acertos += 1;
    }
    if (document.getElementById('con').checked) {
        acertos += 1;
    }
    if (document.getElementById('ver').checked) {
        acertos += 1;
    }
    
    document.getElementById('corretas').innerHTML = 'Você respondeu corretamente ' + acertos + ' de 5';
    document.getElementById('percentual').innerHTML = 'Percentual de acertos: '+((acertos / 5) * 100)+'%';
}