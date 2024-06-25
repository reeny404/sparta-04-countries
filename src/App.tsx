import { useCallback, useEffect, useState } from "react";
import countryAPI from "./api/CountryAPI";
import CountryList from "./components/CountryList";
import { Country } from "./types/Country";

function App() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [isSort, setIsSort] = useState(false);

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

  const handleClickSort = () => setIsSort(!isSort);
  const unSelectedCountries = countries.filter(
    (country) => !country.isSelected
  );

  return (
    <main className="flex flex-col justify-center items-center bg-slate-200">
      <section className="max-w-[1000px]">
        <h3 className="text-md font-bold text-center p-4">
          Favorite Countires
        </h3>
        <div>
          <CountryList
            countries={countries.filter((country) => country.isSelected)}
            onClick={handleOnClick}
          />
        </div>
      </section>
      <section className="max-w-[1000px]">
        <h3 className="text-lg font-bold text-center p-4">Countries</h3>
        <div>
          <div className="flex justify-start p-2">
            <span
              className={`py-1 px-4 rounded-full ${
                isSort ? "bg-slate-600 text-white" : "bg-slate-50"
              }`}
              onClick={handleClickSort}
            >
              sort by: a-z
            </span>
          </div>
          <CountryList
            countries={
              isSort
                ? unSelectedCountries.sort((a, b) =>
                    a.name.common.localeCompare(b.name.common)
                  )
                : unSelectedCountries
            }
            onClick={handleOnClick}
          />
        </div>
      </section>
    </main>
  );
}

export default App;
