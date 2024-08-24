/**
 * Compara dos objetos
 * Nota: El orden de los atributos es relevante en la comparación
 * @param {Object} obj1 primer objeto
 * @param {Object} obj2 segundo objeto
 * @returns Boolean
 */
const compareTwoObjects = (obj1, obj2) =>
  JSON.stringify(obj1) === JSON.stringify(obj2);

export default compareTwoObjects;