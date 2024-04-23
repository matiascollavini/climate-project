'use server'

export async function fetchWeatherData() {
  const LocalWeatherType = 'current'
  const Location = '-34.72,-58.40'
  const APP_ID = 'aa9dcee8'
  const APP_KEY = 'f2b7727d37ca4ee6963e5db484247d2c'

    try {
        const response = await fetch(`http://api.weatherunlocked.com/api/${LocalWeatherType}/${Location}?app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await response.json();

        return data
    } catch (error) {
        console.error('Se produjo un error:', error);
    }
}
