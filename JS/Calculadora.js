import { signos, resultado } from './Operaciones.js';
import { borrar } from './Borrar.js';

const operacion = document.querySelector('.js-operacion');
const resultadoDisplay = document.querySelector('.js-resultado-operacion');

const botonesNumeros = document.querySelectorAll('.js-numero');
const botonesOperaciones = document.querySelectorAll('.js-signo');
const resultadoBoton = document.querySelector('.js-resultado');
const salirBoton = document.querySelector('.js-salir');
const delBoton = document.querySelector('.js-DEL');
const cBoton = document.querySelector('.js-C');

var op_0 = '', op_1 = '', opi = '', opi_2 = '', operacion_tpm = '', def = 0;

/**
 * Controla el uso de un solo '.' por numero.
 * @param {String} op - Variable que guarda los valores ingresados
 * @param {String} numero - Variable a guardar el textContent de los botones (Numeros)
 * @returns {String} numero - Retorna la concatenación de los numeros ingresados, excepto dos veces '.'
 */
function ingresarValidarNumero(op, numero) {
    if (op.includes('.') && numero === '.') {
        return '';
    } else {
        return numero;
    }
}

/**
 * Cambia el textContent del Display de la calculadora, según los valores ingresados.
 */
function validarOperacion() {
    if (op_0 && !operacion_tpm) {
        operacion_tpm = operacion.textContent;
        operacion.textContent = operacion.textContent + op_1;
    } else if (op_0 && operacion_tpm) {
        operacion.textContent = operacion_tpm + op_1;
    } else {
        operacion.textContent = op_1;
    }
}

/**
 * Asigna y concatena el textContent de los numeros a 'op_1'.
 */
botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => {
        op_1 = op_1 + ingresarValidarNumero(op_1, boton.innerText);
        validarOperacion();
    });
});

/**
 * Resetea todas las variables a un String vació.
 */
function borrarTodo() {
    op_1 = '';
    op_0 = '';
    opi = '';
    opi_2 = '';
    operacion_tpm = '';
    def = 0;
    operacion.textContent = '';
    resultadoDisplay.textContent = '';
}

/**
 * Envia al usuario a 'www.google.com'
 */
function salir() {
    location.href = "https://www.google.com/"
}

/**
 * Función que inicia todos los eventos de escucha para el boton de salir, 
 * borrar ultimo caracter, borrar todo, numeros, signos y resultado.
 */
function init() {
    salirBoton.addEventListener('click', salir, true);
    cBoton.addEventListener('click', borrarTodo, true)

    delBoton.addEventListener('click', () => {
        let operacionTextContent = operacion.textContent;
        ({
            operacionTextContent,
            op_0,
            op_1,
            opi,
            operacion_tpm
        } =
            borrar(op_0,
                op_1,
                opi,
                operacion.textContent,
                operacion_tpm));
        operacion.textContent = operacionTextContent;
    },
        true);


    botonesOperaciones.forEach(botonOperacion => {
        botonOperacion.addEventListener('click',
            () => {
                if (operacion.textContent) {
                    let operacionTextContent = operacion.textContent;
                    let signo = botonOperacion.value;
                    ({
                        operacionTextContent,
                        op_0,
                        op_1,
                        operacion_tpm,
                        opi,
                        opi_2,
                    } =
                        signos(
                            operacion.textContent,
                            op_0,
                            op_1,
                            operacion_tpm,
                            opi,
                            opi_2,
                            signo)
                    );
                    operacion.textContent = operacionTextContent;
                } else {
                    swal({
                        title: 'Debes seleccionar un numero primero',
                        icon: 'error'
                    });
                }
            },
            true);
    });

    resultadoBoton.addEventListener('click',
        () => {
            let resultadoDisplayTextContent = resultadoDisplay.textContent;
            ({
                resultadoDisplayTextContent,
                op_0,
                op_1,
                def,
                operacion_tpm,
                resultadoDisplayTextContent
            } = resultado(
                operacion.textContent,
                op_0,
                op_1,
                def,
                operacion_tpm,
                resultadoDisplayTextContent,
                opi,
                opi_2
            ));
            resultadoDisplay.textContent = resultadoDisplayTextContent;
        },
        true);
}

init();