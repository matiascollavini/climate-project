import { fetchWeatherData } from "./_actions";
import ClimateCard from "./_components/cards";
import SunnyWithClouds from "./_ui/sunny-with-clouds";
import SearchBar from "./_ui/search_bar";

export default async function Home() {
  
   const locations = [
    { id: 1, location: 'Banfield', cords: '-34.74,-58.40' },
    { id: 2, location: 'Lomas de Zamora', cords: '-34.76,-58.42' },
    { id: 3, location: 'Remedios de Escalada', cords: '-34.72,-58.40' },
    { id: 4, location: 'Lanús', cords: '-34.69,-58.41' },
    { id: 5, location: 'Avellaneda', cords: '-34.66,-58.36' }
  ]
  return (
    <>
      <header></header>
      <main className="container min-h-[calc(100vh-121px)] mx-auto pb-10 px-6 flex justify-center items-center h-screen gap-10">
        <div className="grid grid-flow-col grid-rows-2 justify-center items-center gap-4">
        <SearchBar />
        {locations.map((location: any) => 
          <div key={location.id} className="min-h-[200px] min-w-[500px]">
            <ClimateCard locationID={location.cords} locationName={location.location} />
          </div>
        )}
        </div>
      </main>
      <footer></footer>
    </>
  )
}
