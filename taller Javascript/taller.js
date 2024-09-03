/* Variables & Condicionales:
Declara una variable llamada “temperatura”.
Si la temperatura es mayor a 30 grados, muestra un mensaje que diga "Hace calor",
de lo contrario, muestra "Hace frío". */



let temperatura = 25;

if (temperatura > 30) {console.log("Hace Calor");
}

else {console.log("Hace Frio");
}

/* Ciclos:
Usa un ciclo “for” para imprimir los números del 1 al 10 */

for (let i = 1; i <= 10; i++) {
    console.log(i);
}


/* Arreglos:
Crea un arreglo con tus 3 colores favoritos y muestra el primer color en la consola*/

let coloresfavoritos = ["azul", "blanco", "rojo"];
console.log(coloresfavoritos[0]);

/**
 * 4. Funciones:
- Crea una función llamada “suma” que tome dos números como parámetros y retorne su
suma
*/

function suma(num1, num2) {
    return num1 + num2;
}

console.log(suma(5, 3));




