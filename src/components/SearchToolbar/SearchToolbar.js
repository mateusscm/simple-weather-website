import React from "react";
import * as S from "./styles/SearchToolbar.styles";
import { countries } from "./data/countries";

export default function SearchToolbar({
  searchText,
  city,
  country,
  handleInputSearchCity,
  handleSelectSearchCountry,
}) {
  return (
    <S.FormSearch onSubmit={searchText} role="search">
      {/* <label for="search">Search for stuff</label> */}
      <input
        id="search"
        type="text"
        placeholder="Type a city..."
        required
        value={city}
        onChange={handleInputSearchCity}
      />
      <select required value={country} onChange={handleSelectSearchCountry}>
        <option value="">Select a country</option>
        {countries.map((c) => (
          <option value={c.value} key={c.label}>
            {c.label}
          </option>
        ))}
      </select>
      <button type="submit">Go</button>
    </S.FormSearch>
  );
}
