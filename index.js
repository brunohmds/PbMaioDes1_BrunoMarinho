const fs = require("fs")
const readline = require("readline")

const bolas = [
    "verde",
    "azul", "azul",
    "amarelo", "amarelo", "amarelo",
    "vermelho", "vermelho", "vermelho", "vermelho", "vermelho"]

escolheBolinha(bolas)

function escolheBolinha(listaBolas){
    // Cria o arquivo
    fs.writeFile("resultado.txt", "", function(error) {
        if (error) {
            console.log(error)
        }
    })

    // Validações
    if(listaBolas.length === 0){
        throw new Error("Lista vazia")
    } 
    
    if(listaBolas.length !== 11){
        throw new Error("Lista com número de bolas equivocado")
    }

    verificaQuantidadeBolasPorCor(listaBolas)
    
    // Escreve as linhas com as bolas sortidas no arquivo
    for(let i = 1; i <= 1000; i++){
        let linha = ""
        for (let j = 0; j < 4; j++){    
            let indice = Math.floor(Math.random() * listaBolas.length) // Obtém um número aleatório de 0 a 10
            linha = linha + listaBolas[indice] + ","
        }
        fs.appendFile("resultado.txt", linha.slice(0,-1) + "\n", function(error) {
            if (error) {
                console.log(error)
            }
        })
    }
    // Lê arquivo e exibe a quantidade de cada bola
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

function verificaQuantidadeBolasPorCor(listaBolas){
    let quantidadePorCor = {};

    for (let bola of listaBolas) {
        if (quantidadePorCor[bola] === undefined) {
            quantidadePorCor[bola] = 1;
        } else {
            quantidadePorCor[bola]++;
        }
    }
        
    if(quantidadePorCor["verde"] != 1){
        throw new Error("Quantidade de bolas verdes incorreta")
    } else if(quantidadePorCor["azul"] != 2){
        throw new Error("Quantidade de bolas azuis incorreta")
    } else if(quantidadePorCor["amarelo"] != 3){
        throw new Error("Quantidade de bolas amarelas incorreta")
    } else if(quantidadePorCor["vermelho"] != 5){
        throw new Error("Quantidade de bolas vermelhas incorreta")
    }
}