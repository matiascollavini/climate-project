'use client'

import SunnyWithClouds from "./climate-icon";
import DialogModal from "../_ui/dialog-modal";
import { useState } from "react";
import { getWindDirection, translateCliamte } from "../_utils";

export default function ClimateCard ({ climateApi, locationName }: { climateApi: any, locationName: string }) {
  const [showDialog, setShowDialog] = useState(false)

  return (
    <>
      <div
        onClick={() => setShowDialog(true)} 
        className="transition flex flex-row justify-center items-center rounded-lg bg-gradient-to-b from-[#353d49] to-[#2f2c2c] shadow p-5 cursor-pointer hover:scale-105">
        <div className="flex justify-start items-center">
          <SunnyWithClouds climate={climateApi.wx_desc} />
        </div>
        <div className="flex flex-col justify-end items-start w-full text-white">
          <h1 className="text-2xl font-medium">{locationName}</h1>
          <div className="flex flex-col justify-center items-start gap-2">
            <h1 className="text-2xl font-bold">{climateApi.temp_c}°C</h1>
            <div>
              <p>{translateCliamte(climateApi.wx_desc)}</p>
            </div>
          </div>
        </div>
      </div>
      <DialogModal
        showDialog={showDialog}
        setShowDialog={setShowDialog}
        title={locationName}
      >
        <div className="flex flex-col md:flex-row justify-center items-center w-full">
          <div className="flex justify-center items-center">
            <SunnyWithClouds climate={climateApi.wx_desc} />
          </div>
        <div className="flex flex-col justify-end items-center md:items-start w-full text-white">
          <h1 className="text-2xl font-medium">{translateCliamte(climateApi.wx_desc)}</h1>
          <div className="flex flex-col justify-center items-center md:items-start mt-2 md:mt-0">
          <h1 className="text-2xl font-bold mb-4">{climateApi.temp_c}°C</h1>
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
        </div>
      </DialogModal>
    </>
  )
}