export default function SunnyWithClouds ({ climate }: any) {
  return(
    <div className="container">
      {(climate === 'Partly cloudy' || climate === 'Cloudy') &&
      <div className="cloud front">
        <span className="left-front"></span>
        <span className="right-front"></span>
      </div>
      }
      {(climate === 'Sunny' || climate === 'Partly cloudy') &&
        <>
          <span className="sun sunshine"></span>
          <span className="sun"></span>
        </>
      }
      {(climate === 'Partly cloudy' || climate === 'Cloudy') &&
      <div className="cloud back">
        <span className="left-back"></span>
        <span className="right-back"></span>
      </div>
      }
      {climate === 'Light Rain' &&
      <div className="text-white">
        (Light Rain)
      </div>
      }
    </div>
  )
}