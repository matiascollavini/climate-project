import { Cloudy, LightRain, MostlyCloudy, PartlyCloudy } from "../_icons";

export default function SunnyWithClouds ({ climate }: any) {
  return(
    <div className="min-h-[200px] min-w-[200px] flex justify-center items-center">
      {climate === 'Light Rain' &&
      <LightRain className="h-36 w-36" />
      }
      {climate === 'Partly cloudy' &&
        <PartlyCloudy className="h-36 w-36" />
      }
      {climate === 'Cloudy' &&
        <Cloudy className="h-36 w-36" />
      }
      {climate === 'Mostly cloudy' &&
      <MostlyCloudy className="h-36 w-36" />
      }
    </div>
  )
}