/**
 * Limpia cadena de texto p devuelve cadena vacía
 * @param {String} data a limpiar 
 * @returns String
 */
function clearString(data) {
  return data === undefined ? "" : data.trim();
}

export default clearString;