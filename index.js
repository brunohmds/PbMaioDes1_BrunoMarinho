const fs = require("fs")
const readline = require('readline')

const bolas = [
    "verde",
    "azul", "azul",
    "amarelo", "amarelo", "amarelo",
    "vermelho", "vermelho", "vermelho", "vermelho", "vermelho"]
    
fs.writeFile("resultado.txt", "", function(error) {
    if (error) {
        console.log(error)
    }
})

escolheBolinha(bolas)

function escolheBolinha(listaBolas){
    // Cria o arquivo
    

    let contadorVerde = 0
    let contadorAzul = 0
    let contadorAmarelo = 0
    let contadorVermelho = 0

    for(let i = 1; i <= 10; i++){
        let linha = ""
        for (let j = 0; j < 4; j++){    
            let indice = Math.floor(Math.random() * listaBolas.length) // Obtém um número aleatório de 0 a 10
            /*if (listaBolas[indice] === "verde"){
                contadorVerde++
            } else if (listaBolas[indice] === "azul"){
                contadorAzul++
            } else if (listaBolas[indice] === "amarelo"){
                contadorAmarelo++
            } else if (listaBolas[indice] === "vermelho"){
                contadorVermelho++
            }*/
            linha = linha + listaBolas[indice] + ","
        }
        // Adiciona conteúdo ao arquivo
        fs.appendFile("resultado.txt", linha.slice(0,-1) + "\n", function(error) {
            if (error) {
                console.log(error)
            }
        })
        
         
        
    /*console.log("verde: " + contadorVerde)
    console.log("azul: " + contadorAzul)
    console.log("amarelo: " + contadorAmarelo)
    console.log("vermelho: " + contadorVermelho)
    */
    }

    lerArquivoLinhaALinha("resultado.txt")
    
}

function lerArquivoLinhaALinha(arquivo){
    const linha = readline.createInterface({
        input: fs.createReadStream(arquivo),
        crlfDelay: Infinity,
    })
      
    linha.on('line', (line) => {
        console.log(line)
    })
}