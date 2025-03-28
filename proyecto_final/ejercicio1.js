// Realiza una función para saber si un número se encuentra dentro de una arreglo con for e if

function searchNumber(number) {
    let numbersList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    for (let i = 0; i <= numbersList.length; i++) {
        if (numbersList[i] === number) {
            return console.log("Si existe dentro del arreglo");
        } else if (i === numbersList.length  && numbersList[i] !== number) {
                return console.log("No existe dentro del arreglo");

        }

    }
}

searchNumber(66);