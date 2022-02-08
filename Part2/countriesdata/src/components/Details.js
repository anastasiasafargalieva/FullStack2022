import React from "react";
import Weather from "./Weather";

const CountryDetail = ( {country, weatherAccessKey} ) => {
        const languages = Object.entries( country.languages ).map( l =>l[1])
        return <div>
                <h1>{country.name.common}</h1>
                The capital is {country.capital[0]}<br/>
                Population is  {country.population}
                <h2>Official languages</h2>
                <ul> {languages.map( l => <li key={l}>{l}</li> )} </ul>
                <img alt={"flag"} src={country.flags.png}/>
                <Weather cityName={country.capital[0]} apiKey={weatherAccessKey} />
        </div>
}

export default CountryDetail