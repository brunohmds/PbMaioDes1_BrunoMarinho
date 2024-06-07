const fs = require("fs")
const readline = require('readline')

const bolas = [
    "verde",
    "azul", "azul",
    "amarelo", "amarelo", "amarelo",
    "vermelho", "vermelho", "vermelho", "vermelho", "vermelho"]

const lista = []

escolheBolinha(bolas)

function escolheBolinha(listaBolas){
    // Cria o arquivo
    fs.writeFile("resultado.txt", "", function(error) {
        if (error) {
            console.log(error)
        }
    })

    
    
    for(let i = 1; i <= 1000; i++){
        let linha = ""
        for (let j = 0; j < 4; j++){    
            let indice = Math.floor(Math.random() * listaBolas.length) // Obtém um número aleatório de 0 a 10
            linha = linha + listaBolas[indice] + ","
        }
        // Adiciona conteúdo ao arquivo
        fs.appendFile("resultado.txt", linha.slice(0,-1) + "\n", function(error) {
            if (error) {
                console.log(error)
            }
        })
    }

    lerArquivoLinhaALinha("resultado.txt")
    
}

function lerArquivoLinhaALinha(arquivo){
    let contadorVerde = 0
    let contadorAzul = 0
    let contadorAmarelo = 0
    let contadorVermelho = 0

    const linha = readline.createInterface({
        input: fs.createReadStream(arquivo),
        crlfDelay: false,
    })
      
    linha.on('line', (line) => {
        let listaAuxiliar = line.split(",")
        for(let i = 0; i < listaAuxiliar.length; i++){
            if (listaAuxiliar[i] === "verde"){
                contadorVerde++
            } else if (listaAuxiliar[i] === "azul"){
                contadorAzul++
            } else if (listaAuxiliar[i] === "amarelo"){
                contadorAmarelo++
            } else if (listaAuxiliar[i] === "vermelho"){
                contadorVermelho++
            }
        }
    })

    linha.on('close', () => {
        console.log("verde: " + contadorVerde)
        console.log("azul: " + contadorAzul)
        console.log("amarelo: " + contadorAmarelo)
        console.log("vermelho: " + contadorVermelho)
    })
}