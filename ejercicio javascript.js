// Definir variable para contar cuántos números son mayores que 5
let contador = 0;

// Usar un ciclo for para imprimir los números del 1 al 10
for (let numero = 1; numero <= 10; numero++) {
    console.log(numero);
    
    // Usar una condicional if para contar cuántos números son mayores que 5
    if (numero > 5) {
        contador++;
    }
}

// Imprimir el conteo de números mayores que 5
console.log("Hay " + contador + " números mayores que 5.");

