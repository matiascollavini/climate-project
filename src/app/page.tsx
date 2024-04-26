import { fetchWeatherData } from "./_actions";
import { locations } from "./_consts/locations";
import ClimateCard from "./_components/cards";
import SunnyWithClouds from "./_ui/sunny-with-clouds";
import SearchBar from "./_ui/search_bar";

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

 // Función para normalizar una cadena eliminando los acentos
 const normalizeString = (str: string) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

// Filtrar las ubicaciones basadas en la consulta de búsqueda normalizada
const filteredLocations: Location[] = locations.filter((location: Location) =>
  normalizeString(location.location.toLowerCase()).includes(normalizeString(query.toLowerCase()))
);

  return (
    <>
      <header></header>
      <main className="container min-h-[calc(100vh-121px)] mx-auto pb-10 px-6 flex justify-center items-center h-screen gap-10">
        <div className="grid grid-flow-col grid-rows-2 justify-center items-center gap-4">
          <SearchBar />
          {filteredLocations.map((location: Location) =>
            <div key={location.id} className="min-h-[200px] min-w-[500px]">
              <ClimateCard locationID={location.cords} locationName={location.location} />
            </div>
          )}
        </div>
      </main>
      <footer></footer>
    </>
  );
}
