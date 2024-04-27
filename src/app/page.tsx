import { fetchWeatherData } from "./_actions";
import { locations } from "./_consts/locations";
import ClimateCard from "./_components/cards";
import SunnyWithClouds from "./_components/climate-icon";
import SearchBar from "./_ui/search-bar";
import { normalizeString } from "./_utils";

interface Location {
  id: number;
  location: string;
  cords: string;
}

interface SearchParams {
  query?: string;
  page?: string;
}

export default async function Home({ searchParams }: { searchParams?: SearchParams }) {
  const query = searchParams?.query || '';

// Filtrar las ubicaciones basadas en la consulta de búsqueda normalizada
const filteredLocations: Location[] = locations.filter((location: Location) =>
  normalizeString(location.location.toLowerCase()).includes(normalizeString(query.toLowerCase()))
);

  return (
    <>
      <header></header>
      <main className="min-h-[calc(100vh-121px)] mx-auto py-10 px-6 flex justify-center items-center gap-10 grow">
        <div className="w-full flex flex-col justify-center items-center gap-20">
          <div className="w-full flex justify-center items-center">
            <SearchBar />
          </div>
          <div className={`grid grid-flow-row ${filteredLocations.length > 0 && filteredLocations.length < 4 ? `grid-cols-${filteredLocations.length}` : 'md:grid-cols-3 grid-cols-1' }  justify-center items-center gap-4`}>
          {filteredLocations.length > 0 ?
          <>
            {filteredLocations.map((location: Location) =>
              <div key={location.id} className="md:min-h-[200px] md:min-w-[500px]">
                <ClimateCard locationID={location.cords} locationName={location.location} />
              </div>
            )}
          </>
          : 
          <>
            <div></div>
            <div className="min-h-[200px] min-w-[500px] flex justify-center items-center text-white font-semibold">No hay resultados disponibles</div>
          </>
          }
          </div>
        </div>
      </main>
      <footer></footer>
    </>
  );
}
