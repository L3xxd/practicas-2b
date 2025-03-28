// Realiza una función para saber si todos los elementos de un arreglo son positivos con for e if

function validPositives() {
    let numbersList = [-1,2,3,4,5,6,7,8,9,10]

    for (let i = 0; i <= numbersList.length; i++) {
        if (numbersList[i] < 0) {
            return console.log("No se cumple la condicion de TODOS positivos");
        } else if (i === numbersList.length  ) {
            return console.log("TODOS son positivos");

        }

    }
}

validPositives();