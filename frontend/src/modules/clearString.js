/**
 * Limpia cadena de texto o devuelve cadena vacía
 * @param {String} data a limpiar 
 * @returns String
 */
function clearString(data) {
  return data === undefined ? '' : data.toString().trim();
}

export default clearString;