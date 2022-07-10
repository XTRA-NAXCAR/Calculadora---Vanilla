import { operar } from './Operar.js';

/**
 * Teniendo en cuenta el signo opera el primer y segundo operando, luego modifica el contenido (string) de la operacion.
 * @param {String} operacionTextContent - Operacion del Display de la calculadora
 * @param {String} op_0 - Primer numero del Display de la calculadora
 * @param {String} op_1 - Segundo numero del Display de la calculadora
 * @param {String} operacion_tpm - Operación temporal que guaradara el primer numero y el signo de la operación en el Display de la calculadora
 * @param {String} opi - Signo de la operacion
 * @param {String} opi_2 - Segundo signo para una siguiente operación
 * @param {String} signo - Signo de la operación
 * @returns {Object} Object - Retornando nuevos valores para operacionTextContent, op_0, op_1, operacion_tpm, opi, opi_2
 */
export function signos(operacionTextContent, op_0, op_1, operacion_tpm, opi, opi_2, signo) {
    if (op_0 && op_1) {
        operacionTextContent = String(operar(op_0, op_1, opi));
        op_1 = operacionTextContent;
        op_0 = '';
        operacion_tpm = '';
        opi = opi_2;
        opi_2 = '';
        ({
            operacionTextContent,
            op_0,
            op_1,
            operacion_tpm,
            opi,
            opi_2,
        } =
            signos(
                operacionTextContent,
                op_0,
                op_1,
                operacion_tpm,
                opi,
                opi_2,
                signo,
            )
        );
    } else if (!operacionTextContent.includes(signo)) {
        opi = ' ' + signo + ' ';
        opi_2 = ' ' + signo + ' ';

        let signos = ['*', '/', '+', '-'];
        let validarSignos = signos.filter((item) => item !== signo);

        validarSignos.forEach(signo => {
            if (operacionTextContent.includes(signo)) {
                op_0 = op_0.slice(0, -3);
                operacion_tpm = op_0;
                operacionTextContent = op_0;
            }
        });
        operacionTextContent = operacionTextContent + opi;
        op_0 = operacionTextContent;
        operacion_tpm = op_0;
        op_1 = '';
    } else {
        swal({
            title: 'Debes seleccionar otra operación para continuar',
            icon: 'error'
        });
    }
    return {
        operacionTextContent: operacionTextContent,
        op_0: op_0,
        op_1: op_1,
        operacion_tpm: operacion_tpm,
        opi: opi,
        opi_2: opi_2,
    };
}

/**
 * Resultado de la operación.
 * @param {String} operacionTextContent - Operacion del Display de la calculadora
 * @param {String} op_0 - Primer numero del Display de la calculadora
 * @param {String} op_1 - Segundo numero del Display de la calculadora
 * @param {String} def - Variable que representa el resultado de la operación
 * @param {String} operacion_tpm - Operación temporal que guaradara el primer numero y el signo de la operación en el Display de la calculadora
 * @param {String} resultadoDisplayTextContent - Resultado del Display de la calculadora
 * @param {String} opi - Signo de la operacion
 * @param {String} opi_2 - Segundo signo para una siguiente operación
 * @return {Object} Object - Retorna un objeto con el resultado de la operación
 */
export function resultado(operacionTextContent, op_0, op_1, def, operacion_tpm, resultadoDisplayTextContent, opi, opi_2) {
    if (!operacionTextContent.includes('*') &&
        !operacionTextContent.includes('/') &&
        !operacionTextContent.includes('+') &&
        !operacionTextContent.includes('-')) {
        def = op_1;
    }
    if (operacionTextContent.includes('*') ||
        operacionTextContent.includes('/') ||
        operacionTextContent.includes('+') ||
        operacionTextContent.includes('-')) {
        def = String(operar(op_0, op_1, opi));
    }
    resultadoDisplayTextContent = ' = ' + def
    operacion_tpm = '';
    op_0 = '';
    op_1 = '';

    return {
        def: def,
        operacion_tpm: operacion_tpm,
        op_0: op_0,
        op_1: op_1,
        resultadoDisplayTextContent: resultadoDisplayTextContent,
    };
}