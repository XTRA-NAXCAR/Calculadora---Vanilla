/** 
 * Borra el ultimo caracter de la operación.
 * @param {String} op_0 - Primer valor de la operación
 * @param {String} op_1 - Segundo valor de la operación
 * @param {String} opi - Signo de la Operación
 * @param {String} operacionTextContent - Operación mostrada en el Display de la calculadora
 * @returns {Object} Object - Retorna nuevos valores para 'operacionTextContent'y 'op_1'                       
 */
export function borrar(op_0, op_1, opi, operacionTextContent, operacion_tpm)
{
    if (op_1 && !opi) {        
        op_1 = op_1.slice(0,-1);   
        operacionTextContent = operacionTextContent.slice(0,-1);    
    } else if(opi && !op_1) {
        operacionTextContent = operacionTextContent.slice(0,-3);
        op_0 = op_0.slice(0, -3);
        opi = '';
        operacion_tpm = operacion_tpm.slice(0.-3);
    } else if(op_1 && opi) {
        op_1 = op_1.slice(0,-1);
        operacionTextContent = operacionTextContent.slice(0,-1);
    } else if (op_0) {
        op_0 = op_0.slice(0,-1);        
        operacionTextContent = operacionTextContent.slice(0,-1);
        operacion_tpm = operacion_tpm.slice(0, -1);
    }

    return { operacionTextContent: operacionTextContent, op_1: op_1, op_0: op_0, opi: opi, operacion_tpm: operacion_tpm };    
}
