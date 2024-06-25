import { useCallback, useEffect, useState } from "react";
import countryAPI from "./api/CountryAPI";
import CountryList from "./components/CountryList";
import { Country } from "./types/Country";

function App() {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    (async () => {
      const countries = await countryAPI.getAll();
      setCountries(countries);
    })();
  }, []);

  const handleOnClick = useCallback(
    (areaId: number): void => {
      console.log(countries.find((c) => c.area === areaId));
      setCountries(
        countries.map((country) =>
          country.area === areaId
            ? { ...country, isSelected: !country.isSelected }
            : country
        )
      );
    },
    [countries]
  );

  return (
    <main className="flex flex-col justify-center items-center bg-slate-200">
      <section>
        <h3 className="text-md font-bold text-center p-4">
          Favorite Countires
        </h3>
        <div className="max-w-[1000px]">
          <CountryList
            countries={countries.filter((country) => country.isSelected)}
            onClick={handleOnClick}
          />
        </div>
      </section>
      <section>
        <h3 className="text-lg font-bold text-center p-4">Countries</h3>
        <div className="max-w-[1000px]">
          <CountryList
            countries={countries.filter((country) => !country.isSelected)}
            onClick={handleOnClick}
          />
        </div>
      </section>
    </main>
  );
}

export default App;
