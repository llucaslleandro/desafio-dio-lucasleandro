let heroi = 'Daath'
let xp = 0
let nivel = ''
let partidasGanhas = 25 // ganha 50 pontos de xp

for(let i = 1; i <= partidasGanhas; i++){
    xp += 50
    console.log("O jogador ganhou uma partida ranqueda e obteve " + xp + " pontos")
}


if(xp < 1000){
    nivel = 'Ferro'

}else if(xp >= 1001 && xp <= 2000){
    nivel = 'Bronze'

}else if(xp >= 2001 && xp <= 5000){
    nivel = 'Prata'
    
}else if(xp >= 5001 && xp <= 7000){
    nivel = 'Ouro'
    
}else if(xp >= 7001 && xp <= 8000){
    nivel = 'Platina'
    
}else if(xp >= 8001 && xp <= 9000){
    nivel = 'Ascendente'
    
}else if(xp >= 9001 && xp <= 10000){
    nivel = 'Imortal'
    
}else if(xp >= 10001){
    nivel = 'Radiante'
    
}

console.log("O Herói de nome " + heroi + " está no nível de: " + nivel)
