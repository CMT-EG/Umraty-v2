import { defaultCountries, parseCountry } from "react-international-phone";

export const countriesArray = defaultCountries.map((country) =>
  parseCountry(country)
);