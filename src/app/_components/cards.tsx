'use client'

import ClimateIcon from "./climate-icon";
import DialogModal from "../_ui/dialog-modal";
import { useState } from "react";
import { getWindDirection, normalizeString, translateCliamte } from "../_utils";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

export default function ClimateCard ({ climateApi, locationName, forecastApi}: { climateApi: any, locationName: string, forecastApi:any }) {
  const [showDialog, setShowDialog] = useState(false)
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()
  const params = new URLSearchParams(searchParams)

  const handleShowMore = (locationName: string) => {
    params.set('query', normalizeString(locationName))
    replace(`${pathname}?${params.toString()}`)
    setShowDialog(false)
  }

  const today = new Date().toLocaleDateString('en-GB');
  // Buscar el clima que corresponde a hoy
  const todayForecast = forecastApi.Days.find((day: any)=>{
    return day.date === today;
  });

  if(todayForecast){
  return (
    <>
      <div
        onClick={() => setShowDialog(true)} 
        className="transition flex flex-row justify-center items-center rounded-lg bg-gradient-to-b from-slate-400 to-slate-500 dark:from-[#353d49] dark:to-[#2f2c2c] shadow p-5 cursor-pointer hover:scale-105">
      
        <div className="flex flex-col justify-start items-center place-content-center">
          <ClimateIcon climate={climateApi.wx_desc} />
          <p className="font-mono text-center text-white">{translateCliamte(climateApi.wx_desc)}</p>
        </div>
        <div className="flex flex-col w-full dark:text-white">
          <h1 className="text-2xl font-medium mt-0">{locationName}</h1>
          <div className="flex flex-col justify-center items-start gap-2 h-150 mb-4 mt-4">
            <p className="text-sm pt-2">Temperatura maxima: {todayForecast.temp_max_c}</p>
            <p className="text-sm pt-2">Temperatura minima: {todayForecast.temp_min_c}</p>
          </div>
          <div className="flex w-full flex-row justify-end ">
            <h1 className="text-4xl font-bold pr-8 mt-5">{climateApi.temp_c}°C</h1>
          </div>
        </div>
      </div>
      <DialogModal
        showDialog={showDialog}
        setShowDialog={setShowDialog}
        title={locationName}
      >
        <div className="flex flex-col justify-center items-center w-full">
          <div className="flex justify-center items-center">
            <ClimateIcon className="h-56 w-56" climate={climateApi.wx_desc} />
          </div>
        <div className="flex flex-col justify-end items-center w-full text-black dark:text-white">
          <div className="flex justify-center items-end gap-4 mb-8 relative w-full">
            <h1 className="text-5xl font-bold">{climateApi.temp_c}°C</h1>
            <p className="text-xs md:text-base font-medium font-mono absolute truncate left-[245px] md:left-[360px]">{translateCliamte(climateApi.wx_desc)}</p>
          </div>
          <div className="flex flex-col justify-center items-center mt-2">
              <div className="grid grid-flow-col grid-cols-2 justify-center items-start gap-4">
                <div className="flex flex-col justify-center items-start gap-4">
                  <p>Sensacion termica: {climateApi.feelslike_c}°C</p>
                  <p>Porcentaje de humedad: {climateApi.humid_pct}%</p>
                  <p>Velocidad del viento: {climateApi.windspd_kmh} km/h</p>
                </div>
                <div className="flex flex-col justify-center items-start gap-4">
                  <p>Dirección del viento: {getWindDirection(climateApi.winddir_compass)}</p>
                  <p>Porcentaje de nubosidad: {climateApi.cloudtotal_pct}%</p>
                  <p>Distancia de visibilidad: {climateApi.vis_km} km</p>
                </div>
              </div>
            </div>
          </div>
          <button type="button" onClick={() => handleShowMore(locationName)} className="text-black dark:text-white text-lg flex justify-end items-end w-full mt-10">
            Ver más
          </button>
        </div>
      </DialogModal>
    </>
  )
}else {
  return <p>No se encontró el pronóstico para hoy</p>;
}
}