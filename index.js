let nomeHeroi = "Tercival Spineli"

function rankHeroi(saldo){

    if (saldo <= 10){
        rank = "Ferro"
    }else if (saldo >= 11 && saldo <= 20){
        rank = "Bronze"
    }else if (saldo >= 21 && saldo <= 50){
        rank = "Prata"
    }else if (saldo >= 51 && saldo <= 80){
        rank = "Ouro"
    }else if (saldo >= 81 && saldo <= 90){
        rank = "Diamante"
    }else if (saldo >= 91 && saldo <= 100){
        rank = "Lendário"
    }else{
        rank = "Imortal"
    }

    return rank

}

function saldoRank(vitorias, derrotas){
    
    saldo = vitorias - derrotas
    return saldo
  
}


console.log("O Herói " + nomeHeroi + " tem um Saldo de " + saldoRank(20,3) + ", Portanto pertence ao Nível " + rankHeroi(saldo))
