//Desarrolla una función para reemplazar una Palabra del Arreglo por otra palabra

function replaceWord(newWord) {
    let message = ["Hola, es un placer atenderte, ","Usuario"]
    message[1] = newWord
     return console.log(message[0] + message[1])
}

replaceWord("Alex")