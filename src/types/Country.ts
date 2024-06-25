type Selectable = {
  isSelected?: boolean;
};

export type Country = {
  area: number,
  name: { common: string, official: string },
  capital: string[]
  flags: { png: string, svg: string, alt: string }
} & Selectable;
