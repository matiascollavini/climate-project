import SunnyWithClouds from "../_ui/sunny-with-clouds";

export default function ClimateCard ({ climateApi, location }: { climateApi: any, location: string }) {
  return (
    <div className="flex flex-row justify-center items-center border rounded-lg bg-gray-200 shadow p-5">
      <div className="flex justify-start items-center">
        <SunnyWithClouds />
      </div>
      <div className="flex flex-col justify-end items-center w-full">
        <h1 className="text-2xl">{location}</h1>
        <div className="flex flex-col justify-center items-start gap-2">
            <h1 className="text-2xl">{climateApi.temp_c}°C</h1>
          <div>
            <p>Temperatura: {climateApi.temp_c}°</p>
            <p>Sensacion termica: {climateApi.feelslike_c}°</p>
          </div>
        </div>
      </div>
    </div>
  )
}