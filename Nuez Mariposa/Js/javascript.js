let titulo = document.createElement("h1")
titulo.textContent = "Javascript"
titulo.style.color = "red"
document.body.appendChild(titulo);

let subtitulo1 = document.createElement("h2")
subtitulo1.textContent = "¿Qué es JavaScript?"
subtitulo1.style.color = "green"
document.body.appendChild(subtitulo1);

let parrafo1 = document.createElement("p")
parrafo1.textContent = "JavaScript (JS) es un lenguaje de programación de alto nivel, interpretado y orientado a objetos, ampliamente utilizado para crear interacciones en páginas web. Fue creado por Brendan Eich en 1995 y se ha convertido en la base para el desarrollo web interactivo. "
parrafo1.style.color = "black"
document.body.appendChild(parrafo1);

let subtitulo2 = document.createElement("h2")
subtitulo2.textContent = "Interacción con el navegador:"
subtitulo2.style.color = "blue"
document.body.appendChild(subtitulo2);

let parrafo2 = document.createElement("p")
parrafo2.textContent = "Los scripts de JavaScript se ejecutan directamente en el navegador del usuario, sin necesidad de compilarse previamente. "
parrafo2.style.color = "black"
document.body.appendChild(parrafo2);

let imagen = document.createElement("img")
imagen.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAilBMVEXw208yMzDy4XXw2krx3Fby4G314FARGS2glEAjKC+5qkXy3U8vMDD44lArLS/izkxCQDEdIi4hJS4ZHy7q1k4oKi/Rv0n/6VIAEC3Lukg5OTHcyUt7czpzbDkMFi3DskZMSTOvoUMACCxmYDdcVzWJfzyTiD5UUDWajj+nmkH05YxtZjcAACyCeTv1Er++AAAFx0lEQVR4nO2aa3eqOBSG4cxMEJJwvwiIgIrKOP7/vzfB1pqERKNHaNdZeb9VSHnY2cm+EOPXz9O/xl8/T/8YP08aSlUaSlUaSlUaSlUaSlUaSlUaSlUaSlUaSlUaSlUaSlUaSlUaSlUaSlUaSlUaSlUaSlUaSlUaSlUaSlUaSlUaSlUaSlUaSlUaSlUaSlUaSlUaSlUaSlUaSlUaSlV/LhRkJb8NYJxdhIH8tvdAwdijFYsfB0BcOvtq5/vN7rRvUw8CGdc7oEBf+DchB4juydJuF1pB4iKE3CSwrKZyABZjvQMKLwJ001oABWHdBLZr0kJJGPQxng7Kph5mjaFwfApYok+uqMmzb4LCrZ0IkC5Y607g8TNA4dZCEqbh9m7s79ND4eNajjTcX42oJofCaXSXyTSjIz/fU0NBz78zdx9aOtwanBoKd8EjJhOZ3H47MRT07jvUh+wT+w8nhsJ7m32+G4Z2aCfMlLrRijXVtFAwPrCPD099ndf9qghvPwZNnc05fZBdem6RGxgAEvK86nrBDc7xvKsPL2go5HvXZQbJjnr5LTqk46g8MVRFX7FbaunjI+FNgsXITJNDZQc6DrsGbROwCpenNBMlLxNDFZSfo4bJCGCcLIAo9ZoVyt2xaQoQJ1OTQ2HGUj6XO0mz9IktxQQ+17tTLMwItaWzO3svm69ZoXBH7dxkB3CEi21mKOBYNBRKWiheb3NCwZJNzpFVlZKyakaoeMtVMUmwKh9aa+rU5RianMJklWf3zTV1khfbPBSxVuS33j2sydPhvTWmMl2r2cfylTh54RAfRLWxiWzi87IOx+QlFsj/E0ENzoUqySTOUIw60nomWa6EQXmGsh30MluR/NxvBa41R4MjaxNpQYqWW29krFlaQSC1R9vVzbX8lKeaBYrkc10kXISD3KiduWz/FAR1I+ybXaYwqVmqmaCIsXB/WEuwUJAzY2aDIsaKW1/S0nN9pm6fD2qoQHFdBcJdK+zoQXNCDdYyys4MBbMYlJSp5oUauHC8EDhXuKJKndmhLuZyDry1UEGVOt8ANVgLtD63ndrUsG+BulhrxVLRrv5NUIO1jkz6525v174NyoAZ0ydCxW2rmgVK/G0Plsz8Rb8HxT/jARTEpbCJwNVfG+93oADg2t74yEDVLBTALWqEaS9evQuKxHu/4xLejoZaM8EVwtwPUHQUZb3vgiL7cRclqGRfvKLDrJVC6navumQsfHJyuWicaKjlq1Ak0AfEKsmBng7oFUy2eyPG8T744EVWOnb/lB6F3NccHWbl7qMFbfV0n5dpraDD9Y1h1jZfHWtk5lyFALMTvX26zUtQ2Ft9BVKSwV7/BYhNpl13+mwbwvwQ0c3F9YIppwDsmMZ/snoh9pH39m+pEAoWGF8OIWTxjkncvtp1mI9uwa7Gw3mEQSDztlyYWTwfZkj5zX50jVCfp2lan7k0JLw6D8j5r4/uMunqtPS8Mm13Gz57KV+xVMX1T1AUFAWyOHMgG0tHkKuhhfym8W2LR3IP1NyqQ5UPv3BeDHjbkaDhC7/7E41/tejdTd3RxU0d/on0LOA8UHoRomRrvJYOw63sdMFNAbN1Y+fRR+3ruyTli4UD9JC0yv2UW7DBGveRkq3WPbPhP7N54lTkDfQLI37fJrZ69CIm44hPQ5FVbt97BFrXo1iCa1/Q9WSHRXsuiXgu9uHyIPcSFzmC0zQ4ru4by3b5YwnPZglDvi92dxT6pTAPHpIXuYETezse9mw+BXG+W497YMgyF9KePYDOzgoF7ojC5ckR5H/PZ57ASE9FErrXhyDXDky/96SH2S4FVXr2UWh/DRpGhag4p8I3eSEdHoKws9/60WazXG6W5u68SGUH2W5jMMz789YPh0HLjVWQUbmRvfNzLQTAiGOPBOTSiw35iT9uDBwGlWSUF8cff4v1eon1+AjlvTF3R/25h0/fLQ2lKg2lKg2lqp8K9ffP06//AcZIbet1prgkAAAAAElFTkSuQmCC"
document.body.appendChild(imagen);




let num1 = Number(prompt("Ingrese un valor"));
let num2 = Number(prompt("Ingrese otro número"));

let opcion = Number(prompt("Elija una opción:\n1 - Suma\n2 - Resta\n3 - Multiplicación\n4 - División"));

switch (opcion) {
    case 1:
        alert("Resultado de la suma: " + (num1 + num2));
        break;
    case 2:
        alert("Resultado de la resta: " + (num1 - num2));
        break;
    case 3:
        alert("Resultado de la multiplicación: " + (num1 * num2));
        break;
    case 4:
        if (num2 !== 0) {
            alert("Resultado de la división: " + (num1 / num2));
        } else {
            alert("No se puede dividir por cero.");
        }
        break;
    default:
        alert("Opción inválida");
}





