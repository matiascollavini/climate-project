'use server'

export async function fetchWeatherData (localWeather: string, locationString: string) {
  const LocalWeatherType = localWeather // Current o Forecast
  const Location = locationString // Cordenadas de ubicacion
  const APP_ID = 'aa9dcee8'
  const APP_KEY = 'f2b7727d37ca4ee6963e5db484247d2c'

    try {
        const response = await fetch(`http://api.weatherunlocked.com/api/${LocalWeatherType}/${Location}?app_id=${APP_ID}&app_key=${APP_KEY}`, { next: { revalidate: 3600 } });
        const data = await response.json();

        return data
    } catch (error) {
        console.error('Se produjo un error:', error);
    }
}
