
function nivelRanqueado(vitorias,derrotas){

    let saldoVirorias = vitorias - derrotas;


    let rank = ("")

    if (saldoVirorias <= 10 ){
        rank = "Ferro";
    }
    else if (saldoVirorias <= 11 && saldoVirorias >= 20){
        rank = "Bronze"
    }
    else if(saldoVirorias <= 21 && saldoVirorias >= 50){
        rank = "Prata"
    }
    else if(saldoVirorias <= 51 && saldoVirorias >= 80){
        rank = "Ouro"
    }
    else if(saldoVirorias <= 81 && saldoVirorias >= 90){
        rank = "Diamante"
    }
    else if(saldoVirorias <= 91 && saldoVirorias >= 100){
        rank = "Lendário"
    }
    else{
        rank = "Imortal"
    }
    return `O Herói tem um saldo de ${saldoVitorias} está no nível de ${nivel}!`;
}
let vitorias = 105;
let derrotas = 5;
const resultado = nivelRanqueado(vitorias,derrotas);
console.log(resultado);