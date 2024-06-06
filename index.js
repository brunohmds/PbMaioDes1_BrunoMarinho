const bolas = [
    "verde",
    "azul", "azul",
    "amarelo", "amarelo", "amarelo",
    "vermelho", "vermelho", "vermelho", "vermelho", "vermelho"]

let contadorVerde = 0
let contadorAzul = 0
let contadorAmarelo = 0
let contadorVermelho = 0

for(let i = 1; i <= 1000; i++){
    let linha = ""
    for (let j = 0; j < 4; j++){    
        let indice = Math.floor(Math.random() * bolas.length) // Obtém um número aleatório de 0 a 10
        if (bolas[indice] === "verde"){
            contadorVerde++
        } else if (bolas[indice] === "azul"){
            contadorAzul++
        } else if (bolas[indice] === "amarelo"){
            contadorAmarelo++
        } else if (bolas[indice] === "vermelho"){
            contadorVermelho++
        }
        linha = linha + bolas[indice] + ","
    }
}

console.log("verde: " + contadorVerde)
console.log("azul: " + contadorAzul)
console.log("amarelo: " + contadorAmarelo)
console.log("vermelho: " + contadorVermelho)