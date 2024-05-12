import { Cloudy, LightRain, MistIcon, MostlyCloudy, PartlyCloudy, SunIcon } from "../_icons";

export default function ClimateIcon ({ climate, className, divClassName }: { climate: any, className?: string, divClassName?: any }) {
  const iconClassname = className ? className : 'h-36 w-36'
  return(
    <div className={`${divClassName ? divClassName : 'min-h-[150px] min-w-[200px]' } flex justify-center items-center`}>
      {climate === 'Light Rain' &&
        <LightRain className={iconClassname} />
      }
      {climate === 'Light rain shower' &&
        <LightRain className={iconClassname} />
      }
      {climate === 'Light drizzle'  &&
        <LightRain className={iconClassname} />
      }
      {climate === 'Partly cloudy' &&
        <PartlyCloudy className={iconClassname} />
      }
      {climate === 'Cloudy' &&
        <Cloudy className={iconClassname} />
      }
      {climate === 'Mostly cloudy' &&
        <MostlyCloudy className={iconClassname} />
      }
      {climate === 'Mist' &&
        <MistIcon className={iconClassname} />
      }
      {climate === 'Clear skies' &&
        <SunIcon className={iconClassname} />
      }
    </div>
  )
}