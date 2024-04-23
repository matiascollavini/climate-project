import { fetchWeatherData } from "./_actions";

export default async function Home() {
      const climateApi = await fetchWeatherData()
  return (
  <main className="flex flex-col justify-center items-center h-screen gap-10">
    <div className="flex flex-col justify-center items-center gap-2">
      <h1 className="text-xl">Grados Celsius</h1>
      <div>
        <p>Temperatura: {climateApi.temp_c}°</p>
        <p>Sensacion termica: {climateApi.feelslike_c}°</p>
      </div>
    </div>
    <div className="flex flex-col justify-center items-center gap-2">
      <h1 className="text-xl">Grados Fahrenheit</h1>
      <div>
        <p>Temperatura: {climateApi.temp_f}°</p>
        <p>Sensacion termica: {climateApi.feelslike_f}°</p>
      </div>
    </div>
  </main>
  )
}
