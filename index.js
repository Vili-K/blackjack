let ekakortti = 6
let tokakortti = 16
let summa = ekakortti + tokakortti
let OnBlackjack = false
let OnPelissa = true
let viesti =""

console.log(summa)

if (summa < 21) {
    viesti = "Haluatko nostaa uuden kortin?"
}   
else if (summa === 21) {
    viesti = "Blackjack!"
    OnBlackjack = true
}   
else if (summa > 21) {
    viesti = "Hävisit!"
    OnPelissa = false
}

console.log(viesti)
console.log(OnBlackjack)
