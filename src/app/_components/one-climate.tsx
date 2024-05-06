import { Card } from "@tremor/react";
import { translateCliamte } from "../_utils";
import ClimateIcon from "./climate-icon";
import { format } from "@formkit/tempo";

export default function OneClimate ({ climateApi, locationName, forecastApi }: { climateApi: any, locationName: string, forecastApi: any }) {
  const fiveDaysArray = [forecastApi.Days[1], forecastApi.Days[2], forecastApi.Days[3], forecastApi.Days[4], forecastApi.Days[5]]
  return (
    <div className="flex flex-col justify-center items-center gap-10">
      <div className="flex justify-between items-center gap-10">
        <div className="flex justify-start items-center">
          <ClimateIcon className="h-60 w-60" climate={climateApi.wx_desc} />
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
        <div className="flex justify-center items-center gap-5">
          {fiveDaysArray.map((day: any) => {
            return (
              <div className="flex flex-col justify-center items-center gap-3">
                <p className="dark:text-white text-2xl">{parseNumberToDate(new Date (parseStringDate(day.date)).getDay())}</p>
                <ClimateIcon divClassName='min-h-[100px] min-w-[200px]' className="h-24 w-24" climate={day.Timeframes[0].wx_desc} />
                <p className="dark:text-white flex justify-center items-center gap-3"><span><span className="text-xl">{day.temp_max_c}°</span>.</span> <span className="text-gray-500"><span className="text-xl">{day.temp_min_c}°</span>.</span></p>
                <p className="dark:text-white">{translateCliamte(day.Timeframes[0].wx_desc)}</p>
              </div>
          )})}
        </div>
    </div>
  )
}

function parseStringDate (date: string) {
  const destructuredDate = date.split('/')
  return `${destructuredDate[1]}/${destructuredDate[0]}/${destructuredDate[2]}`
}

function parseNumberToDate (number: number) {
    switch (number) {
        case 0:
            return 'Dom';
        case 1:
            return 'Lun';
        case 2:
            return 'Mar';
        case 3:
            return 'Mie';
        case 4:
            return 'Jue';
        case 5:
            return 'Vie';
        case 6:
            return 'Sab';
        default:
            return '';
    }
  }
