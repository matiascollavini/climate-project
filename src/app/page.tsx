import { fetchWeatherData } from "@/app/_actions";
import { locations } from "@/app/_consts/locations";
import SearchBar from "@/app/_ui/search-bar";
import { normalizeString } from "@/app/_utils";
import ClimateCard from "@/app/_components/cards";
import DarkMode from "./_ui/darkmode";
import OneClimate from "./_components/one-climate";

interface Location {
  id: number;
  location: string;
  cords: string;
}

interface SearchParams {
  query?: string;
}

export default async function Page ({ searchParams }: { searchParams?: SearchParams }) {
  const query = searchParams?.query || ''

  const filteredLocations: Location[] = locations.filter((location: Location) =>
    normalizeString(location.location.toLowerCase()).includes(normalizeString(query.toLowerCase()))
  );
  
  return (
    <div className="w-full flex flex-col justify-center items-center gap-20">
        <div className="absolute top-5 left-5">
          <DarkMode className="h-6 w-6 text-black dark:text-white" />
        </div>
          <div className="w-full flex justify-center items-center">
            <SearchBar />
          </div>
          <div className={`grid grid-flow-row ${filteredLocations.length > 0 && filteredLocations.length < 4 ? `grid-cols-${filteredLocations.length}` : 'md:grid-cols-3 grid-cols-1' }  justify-center items-center gap-4`}>
          {(filteredLocations.length > 0 && filteredLocations.length !== 1) ?
          <>
            {filteredLocations.map(async (location: Location) => {
              const climateApi = await fetchWeatherData('current', location.cords)
              return (
              <div key={location.id} className="md:min-h-[200px] md:min-w-[500px]">
                <ClimateCard climateApi={climateApi} locationName={location.location} />
              </div>
              )
            }
            )}
          </>
          : filteredLocations.length !== 1 ?
          <>
            <div></div>
            <div className="min-h-[200px] min-w-[500px] flex justify-center items-center dark:text-white font-semibold">No hay resultados disponibles</div>
          </>
          : null
          }
          {filteredLocations.length === 1 &&
          <>
            {filteredLocations.map(async (location: Location) => {
              const climateApi = await fetchWeatherData('current', location.cords)
              return (
              <div key={location.id} className="w-full">
                <OneClimate climateApi={climateApi} locationName={location.location} />
              </div>
              )
            }
            )}
          </>
            }
          </div>
        </div>
  )
}