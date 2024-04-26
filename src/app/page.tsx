import { fetchWeatherData } from "./_actions";
import ClimateCard from "./_components/cards";
import SunnyWithClouds from "./_ui/sunny-with-clouds";

export default async function Home() {
  const localWeatherType = 'current'
  const location = '-34.72,-58.40'

  const locations = [
    { id: 1, location: 'Banfield' },
    { id: 2, location: 'Lomas de Zamora' },
    { id: 3, location: 'Remedios de Escalada' },
    { id: 4, location: 'Lanús' },
    { id: 5, location: 'Avellaneda' },
  ]
  
  const climateApi = await fetchWeatherData(localWeatherType, location)
  return (
    <>
      <header></header>
      <main className="grid grid-cols-2 grid-flow-columns justify-center items-center h-screen gap-10 px-20">
        {locations.map((location: any) => 
          <div key={location.id}>
            <ClimateCard location={location.location} climateApi={climateApi} />
          </div>
        )}
      </main>
      <footer></footer>
    </>
  )
}
