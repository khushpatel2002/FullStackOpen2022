import { useState } from "react";
import Country from "./Country";

const Countries = ({ countriesToShow }) => {
  const [country, setCountry] = useState("");

  if (countriesToShow.length === 1) {
    return <Country country={countriesToShow[0]} />;
  } else if (countriesToShow.length <= 10) {
    return (
      <div>
        {countriesToShow.map((country) => (

          <div key={country.name.official}>
            
            {country.name.common}{" "}
            <button onClick={() => setCountry(country)}>show</button>
          </div>

        ))}

        {country ? <Country country={country} /> : null}
      </div>
    );
  } else if (countriesToShow.length > 10) {
    return <div>Too many matches, specify another filter</div>;
  }
};

export default Countries;
