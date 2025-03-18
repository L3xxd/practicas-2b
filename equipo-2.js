// Declaracion normal mediante sintaxis
let numeros = [10,20,30,40,50]
console.log(numeros)

// Declarar arreglo mediante un constructor
let planetas = new Array ("Marte","Jupiter","Jupiter")
console.log(planetas)
console.log("Primer planeta : " + planetas[0])
console.log("Ultimo planeta" + planetas.length - 1)

// Agregar elemento
planetas.push("Saturno")
console.log("Despues de método push: " + planetas)

// Eliminar elemento
planetas.pop()
console.log("Despues de método pop: " + planetas)

//Para ordenar un arreglo
let numerosUsos = [3,4,2,6,9,5,1]
console.log("Elementos ordenados" + numeros.sort(numerosUsos))

//Para invertir un arreglo
console.log("Elementos ordenados" + numeros.reverse(numerosUsos))

// Matriz (arreglo bidimencional)
let miMatriz = [
    ["Juan", 19],
    ["Alan",20],
    ["Valeria",21]

]
