let num1= parseInt (prompt ("escribe un numero: "));
let num2= parseInt (prompt ("escribe otro numero: "));
let operacion = prompt("escribe cual operacion deseas realizar entre los dos numeros escritos antes: ");
let resultado = 0;
if (operacion == "sumar" ) {
    resultado = num1 + num2;
}
if (operacion == "restar" ) {
    resultado = num1 - num2;
}
if (operacion == "multiplicar" ) {
    resultado = num1 * num2;
}
if (operacion == "dividir" ) {
    resultado = num1 / num2;
}
alert ("el resultado de tu operacion es: " + resultado);
