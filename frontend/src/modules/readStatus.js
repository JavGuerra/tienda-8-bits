/**
 * Devuelve mensaje de estado
 * @param {Number} dataStatus 
 * @returns String
 */
function readStatus(dataStatus) {
  return dataStatus === 1 ? 'Sin coincidencias' : '¿Datos...?';
}

export default readStatus;