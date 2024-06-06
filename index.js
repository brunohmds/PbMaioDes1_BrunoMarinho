const bolas = [
    "verde",
    "azul", "azul",
    "amarelo", "amarelo", "amarelo",
    "vermelho", "vermelho", "vermelho", "vermelho", "vermelho"]

for(let i = 1; i <= 1000; i++){
    let linha = ""
    for (let j = 0; j < 4; j++){    
        let indice = Math.floor(Math.random() * bolas.length) // Obtém um número aleatório de 0 a 10
        linha = linha + bolas[indice] + ","
    }
    console.log(linha.slice(0,-1))
}