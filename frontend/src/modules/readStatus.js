/**
 * Devuelve mensaje de estado
 * @param {Number} dataStatus 
 * @returns String
 */
function readStatus(dataStatus) {
  return (
    (dataStatus === 0) ? 'OK' :
    (dataStatus === 1) ? 'Sin coincidencias' :
    'Datos...'
  );
}

export default readStatus;