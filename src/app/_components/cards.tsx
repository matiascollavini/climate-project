import { fetchWeatherData } from "../_actions";
import SunnyWithClouds from "../_ui/climate-icon";

export default async function ClimateCard ({ locationID, locationName }: { locationID: string, locationName: string }) {
  const climateApi = await fetchWeatherData('current', locationID)
  return (
    <div className="flex flex-row justify-center items-center rounded-lg bg-gradient-to-b from-[#353d49] to-[#2f2c2c] shadow p-5">
      <div className="flex justify-start items-center">
        <SunnyWithClouds climate={climateApi.wx_desc} />
      </div>
      <div className="flex flex-col justify-end items-start w-full text-white">
        <h1 className="text-2xl font-medium">{locationName}</h1>
        <div className="flex flex-col justify-center items-start gap-2">
            <h1 className="text-2xl font-bold">{climateApi.temp_c}°C</h1>
          <div>
            <p>Sensacion termica: {climateApi.feelslike_c}°C</p>
          </div>
        </div>
      </div>
    </div>
  )
}