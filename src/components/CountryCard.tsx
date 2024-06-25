import { cva } from "class-variance-authority";
import { Country } from "../types/Country";

type CountryCardProps = {
  country: Country;
  onClick: (area: number) => void;
};

function CountryCard({ country, onClick }: CountryCardProps) {
  const {
    area,
    name: { common: name },
    flags: { svg: url, alt },
    capital = [],
    isSelected,
  } = country;

  return (
    <div
      className={box({ intent: isSelected ? "selected" : "unselected" })}
      onClick={() => onClick(area)}
    >
      <img src={url} alt={alt} className="h-20 mb-3" />
      <div className="w-full">
        <div className="text-sm font-bold py-1">{name}</div>
        <div className="text-xs opacity-80 text-ellipsis overflow-hidden">
          {capital[0] ?? ""}
        </div>
      </div>
    </div>
  );
}

export default CountryCard;

const box = cva(
  "flex flex-col items-center border border-solid rounded w-56 p-4 bg-gray-50 shadow-sm hover:shadow-md transition-shadow cursor-pointer",
  {
    variants: {
      intent: {
        selected: "border-green-950",
        unselected: {},
      },
    },
    defaultVariants: { intent: "unselected" },
  }
);
