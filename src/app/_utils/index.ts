 // Función para normalizar una cadena eliminando los acentos
export const normalizeString = (str: string) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};