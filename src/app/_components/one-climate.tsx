import { translateCliamte } from "../_utils";
import SunnyWithClouds from "./climate-icon";

export default function OneClimate ({ climateApi, locationName }: { climateApi: any, locationName: string }) {
  return (
    <div className="flex justify-between items-center">
        <div className="flex justify-start items-center">
          <SunnyWithClouds climate={climateApi.wx_desc} />
        </div>
        <div className="flex flex-col justify-end items-start w-full dark:text-white gap-2">
          <h1 className="text-4xl font-medium">{locationName}</h1>
          <div className="flex flex-col justify-center items-start gap-2">
            <h1 className="text-5xl font-bold">{climateApi.temp_c}°C</h1>
            <div>
              <p className="text-2xl">{translateCliamte(climateApi.wx_desc)}</p>
            </div>
          </div>
        </div>
    </div>
  )
}