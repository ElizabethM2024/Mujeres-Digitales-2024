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

/*  Funciones:
- Crea una función llamada “suma” que tome dos números como parámetros y retorne su
suma
*/

function suma(num1, num2) {
    return num1 + num2;
 }
console.log(suma(5, 3));

/*  JSON:
Crea un objeto JSON que represente un libro con las propiedades: título, autor y año de 
publicación.*/

let libro = {
    titulo: "Despues de ti",
    autor: "Diana Molina",
    añoPublicacion: 1981
 };
console.log(libro);

/* Desafío final: 
Escribe un programa que reciba un arreglo de números y retorne un nuevo arreglo con 
solo los números pares utilizando funciones. */

function filtrarPares(numeros) {
    return numeros.filter(numero => numero % 2 === 0);
}
let arregloNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(filtrarPares(arregloNumeros));

















