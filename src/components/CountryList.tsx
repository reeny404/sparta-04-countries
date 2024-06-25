import { Country } from "../types/Country";
import CountryCard from "./CountryCard";

interface CountryListProps {
  countries: Country[];
  onClick: (area: number) => void;
}

function CountryList({ countries, onClick }: CountryListProps) {
  return (
    <ul className="flex flex-wrap gap-4 justify-left">
      {countries.map((country, i) => (
        <li key={i}>
          <CountryCard country={country} onClick={onClick} />
        </li>
      ))}
    </ul>
  );
}

export default CountryList;
