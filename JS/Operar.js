/**
 * Desarrollar la operación
 * @param {String} op_0 - Primer numero del Display de la calculadora
 * @param {String} op_1 - Segundo numero del Display de la calculadora
 * @param {String} opi - Signo de la operacion
 * @returns {Float} Float - Resultado de la operación
 */
export function operar(op_0, op_1, opi) {
    if (opi.includes('*')) {
        return parseFloat(op_0) * parseFloat(op_1);
    }
    if (opi.includes('/')) {
        return parseFloat(op_0) / parseFloat(op_1); 
    }
    if (opi.includes('+')) {
        return parseFloat(op_0) + parseFloat(op_1); 
    }
    if (opi.includes('-')) {
        return parseFloat(op_0) - parseFloat(op_1); 
    }
}