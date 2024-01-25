/* 1- Suma de elementos pares:
Escribe una función que reciba un array de números y devuelva la suma de los elementos
que son pares */


function sumarPares(array) {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
       
        if ( array[i]  %2 === 0 ) {
            suma += array[i]
        }
    }
    return suma;
}

console.log(sumarPares([3, 2, 4, 6, 1, 7, 20, 10, 8, 9, 30, 90, 42, 31, 12]));

// /* 2. Filtrar números mayores:
// Crea una función que tome un array de números y un número límite. La función debería
// devolver un nuevo array que contenga solo los números que son mayores al límite dado */

function numeroMayor(arr, limite) {

    const newArray = [];

    for (let numero = 0; numero < arr.length; numero++) {
        
        if (arr[numero] > limite) {
            newArray.push(arr[numero])
        }
        
    }
    return newArray;
}

console.log(numeroMayor([3, 2, 4, 6, 1, 7, 20, 10, 8, 30, 90, 42, 31, 12, 100, 200], 20));

/* 3. Encontrar el elemento máximo:
Escribe una función que encuentre el elemento máximo en un array de números */

const elementoMaximo = (array) => {

    let numeroMaximo = -Infinity;

    for (let j = 0; j < array.length; j++) {
        
        if (array[j] > numeroMaximo) {
            numeroMaximo = array[j];
        }
        
    }

    return numeroMaximo;
}

console.log(elementoMaximo([3, 2, 4, 3000, 1, 7, 500, 10, 8, 30, 90, 42, 31, 12, 100, 200]));

/* 4. Multiplicar elementos por un número:
Crea una función que tome un array de números y un número multiplicador. La función debe
devolver un nuevo array donde cada elemento del array original esté multiplicado por el
número dado */

function multiplyNumbers (arr, multiplicador) {
    let newArrayMultiplicado = []

    for (let i = 0; i < arr.length; i++) {
        newArrayMultiplicado[i] = arr[i] * multiplicador;
    }

    return newArrayMultiplicado;
}

console.log(multiplyNumbers([3, 2, 4, 6, 1, 7, 20, 10, 8, 30, 90, 42, 31, 12, 100, 200], 5));

/* 5. Eliminar elementos duplicados:
Escribe una función que elimine los elementos duplicados de un array. */

function deleteDuplicateElements (array) {
    const arraySinDuplicados = [];

    for (let i = 0; i < array.length; i++) {
        
        let estaDuplicado = false;

        for (let j = 0; j < arraySinDuplicados.length; j++) {
            if (array[i] === arraySinDuplicados[j]) {
                estaDuplicado = true;
            }
            
        }
        
        if (!estaDuplicado) {
            arraySinDuplicados.push(array[i]);
        }
    }
    return arraySinDuplicados;
}

console.log(deleteDuplicateElements([3, 2, 4, 3000, 1, 3000, 500, 10, 8, 30, 90, 42, 31, 12, 100, 200]));

/* Contar ocurrencias:
Crea una función que cuente cuántas veces aparece un elemento específico en un array. */

function CalcularVeces (array, element) {

    let cuantasVeces = 0;

    for (let i = 0; i < array.length; i++) {
        
        if (array[i] === element) {
            cuantasVeces++;
        }
        
    }
    return cuantasVeces;
}

console.log(CalcularVeces(['Jairo', 'Messi', 'Josh', 'Diego', 'Ronaldinho', 'Messi', 'Messi', 'Josh'], 'Messi'));

/* 7. Filtrar palabras por longitud:
Escribe una función que tome un array de palabras y un número de longitud. La función
debería devolver un nuevo array que contenga sólo las palabras que tienen una longitud
mayor o igual al número dado. */

function calcularLongitud (arr, longitud) {
    let nuevoArrayPorPalabra = [];
    
    for (let i = 0; i < arr.length; i++) {
       
        if (arr[i].length >= longitud) {
            nuevoArrayPorPalabra.push(arr[i])
        }
        
    }
    return nuevoArrayPorPalabra
}

console.log(calcularLongitud(['Jairo', 'Messi', 'Josh', 'Diego', 'Ronaldinho', 'Pele', 'Lucho', 'Spiderman'], 10));
