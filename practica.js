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




let num1= parseInt(prompt("Escribe un numero: "));
let num2= parseInt(prompt("Porfavor escribe otro numero: "));
let operaciones = prompt("Escribe cual operacion deseas realizar entre los dos numero que acabaste de escribir: ");
/* let resultado = 0;
if(operaciones == "suma" || operaciones == "+"){
     resultado = num1 + num2;
}
else
if(operaciones == "restar" || operaciones == "-"){
    resultado = num1 - num2;
}
else
    if(operaciones == "multiplicar" || operaciones == "*"){
        resultado = num1 * num2;
    }
    else
        if(operaciones == "dividir" || operaciones == "/"){
            resultado = num1 / num2;
        } */
       

        resultado= operaciones == "suma" || operaciones == "+" ? num1 + num2:   operaciones == "restar" || operaciones == "-" ? num1 - num2:   operaciones == "multiplicar" || operaciones == "*" ? num1 - num2: num1 - num2 ;
        alert("El resultado de tu operacion es: " + resultado);