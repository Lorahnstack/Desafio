
let heroi = "Asta"
let xp = 10000
let rank = ""

if (xp <= 1000){
    rank = "Ferro"
}

else if (xp > 1001 && xp <= 2000){
    rank = "Bronze"
}
else if (xp > 2001 && xp <= 5000){
    rank = "Prata"
}
else if (xp > 5001 && xp <= 7000){
    rank = "Ouro"
}
else if (xp > 7001 && xp <= 8000) {
    rank = "Platina"
}

else if (xp > 8001 && xp <= 9000) {
    rank = "Ascendente"
}
else if (xp > 9001 && xp <= 10000){
    rank = "Imortal"
}

else {
    rank = "Radiante"
}
console.log("O Herói de nome " + heroi + " está no nivel " + rank)
