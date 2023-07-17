import { valida } from "./validaciones.js";

const inputs = document.querySelectorAll("input")//All para que seleccione todos los inputs, regresa un arreglo

inputs.forEach( input => {
    input.addEventListener('blur', (input) =>{
        valida(input.target);
    });
});