import { fetchWeatherData } from "./_actions";
import { locations } from "./_consts/locations";
import ClimateCard from "./_components/cards";
import SunnyWithClouds from "./_ui/climate-icon";
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
      <main className="min-h-[calc(100vh-121px)] mx-auto pb-10 px-6 flex justify-center items-center h-screen gap-10">
        <div className="flex flex-col justify-center items-center gap-20">
          <div className="w-full flex justify-center items-center">
            <SearchBar />
          </div>
          <div className="grid grid-flow-row grid-cols-3 justify-center items-center gap-4">
          {filteredLocations.length > 0 ?
          <>
            {filteredLocations.map((location: Location) =>
              <div key={location.id} className="min-h-[200px] min-w-[500px]">
                <ClimateCard locationID={location.cords} locationName={location.location} />
              </div>
            )}
          </>
          : <div className="min-h-[200px] min-w-[500px] flex justify-center items-center text-white font-semibold">No hay resultados disponibles</div>}
          </div>
        </div>
      </main>
      <footer></footer>
    </>
  );
}
