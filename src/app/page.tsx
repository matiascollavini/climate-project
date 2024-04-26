import { fetchWeatherData } from "./_actions";
import SunnyWithClouds from "./_ui/sunny-with-clouds";

export default async function Home() {
      const climateApi = await fetchWeatherData()
  return (
  <main className="flex flex-col justify-center items-center h-screen gap-10">
    <div className="flex flex-row justify-center items-center border rounded-lg bg-gray-200 shadow p-5">
      <div className="flex justify-start items-center">
        <SunnyWithClouds />
      </div>
      <div className="flex justify-end items-center">
        <div className="flex flex-col justify-center items-start gap-2">
            <h1 className="text-2xl">°C</h1>
          <div>
            <p>Temperatura: {climateApi.temp_c}°</p>
            <p>Sensacion termica: {climateApi.feelslike_c}°</p>
          </div>
        </div>
      </div>
    </div>
  </main>
  )
}
