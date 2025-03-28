// Desarrolla una función para Convertir todas las palabras de un arreglo a mayúsculas
 function convertUpperCases(){
    let wordsList = ['gato', 'b', 'c', 'd', 'e', 'f'];
    for (let j = 0; j < wordsList.length; j++) {
        let converter =wordsList[j]
        console.log(converter.toUpperCase())
    }
 }

 convertUpperCases()