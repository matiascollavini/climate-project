 // Función para normalizar una cadena eliminando los acentos
export const normalizeString = (str: string) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export function getWindDirection (iniciales: string) {
  switch (iniciales.toUpperCase()) {
      case 'N':
          return 'Norte';
      case 'NE':
          return 'Noreste';
      case 'E':
          return 'Este';
      case 'SE':
          return 'Sureste';
      case 'S':
          return 'Sur';
      case 'SW':
          return 'Suroeste';
      case 'W':
          return 'Oeste';
      case 'NW':
          return 'Noroeste';
      case 'NNE':
          return 'Nornordeste';
      case 'ENE':
          return 'Estenordeste';
      case 'ESE':
          return 'Estesureste';
      case 'SSE':
          return 'Sursureste';
      case 'SSW':
          return 'Sursuroeste';
      case 'WSW':
          return 'Oestesuroeste';
      case 'WNW':
          return 'Oestenoroeste';
      case 'NNW':
          return 'Nornoroeste';
      default:
          return 'Dirección no reconocida';
  }
}

export function translateCliamte (inglishClimate: string) {
  switch (inglishClimate) {
      case 'Cloudy':
          return 'Nublado';

      case 'Mostly cloudy':
          return 'Mayormente Nublado'

      case 'Light Rain':
          return 'Llovizna'

      case 'Partly cloudy':
          return 'Parcialmente Nublado'

      case 'Rain':
          return 'Lluvia'

      case 'Rain with Thunderstorm':
          return 'Lluvia con Tormenta'

      case 'Light Rain with Thunderstorm':
          return 'Llovizna con Tormenta'

      default:
          return inglishClimate;
  }
}