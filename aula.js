/*function writeMyName() {
    console.log('Evanio');
}


writeMyName() 

function verificarIdade(idade) {
    
    
    
    if (idade >= 18) {
        console.log("Você é maior de idade");
    }
    else {
        console.log("Você é menor de idade");
    }
    
}

verificarIdade(17) 

function writeName(nome) {
    return 'Evanio'
}

function writeSobrenome() {
    console.log(writeName() + ' Matias');
}
writeSobrenome() */
const produto = 100


function calcPay(selectpay) {

    if ( selectpay === 1) {
        console.log(produto - (100/100*10));
    }
    else if ( selectpay === 2) {
        console.log(produto - (100/100*15));
    }
    else if (selectpay === 3) {
        console.log(produto);
    }
    else {
        console.log(produto + (100/100*10))
    }
    
}

calcPay(4)