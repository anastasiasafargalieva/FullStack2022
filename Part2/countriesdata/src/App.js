import './App.css';
import React, {useState, useEffect } from 'react';
import axios from "axios";
import CountryDetail from "./components/Details";
import CountryList from "./components/List";
import Find from "./components/Find";


function App() {
  const [countries, setCountries] = useState([])
  const [findQuery, setFindQuery] = useState('')
  const [weatherAccessKey] = useState(process.env.REACT_APP_WEATHERSTACK_API_KEY)

  useEffect( () => {
    axios.get("https://restcountries.com/v3.1/all").then(response => setCountries(response.data))
  }, [])
  const filterChangeHandler = event => setFindQuery( event.target.value )
  const filteredResult = countries.filter( c => c.name.common.toLowerCase().startsWith(findQuery.toLowerCase()))

  return (
  <div>
      <Find currentQuery={findQuery} handleQueryChange={filterChangeHandler}  />
      {
          filteredResult.length > 10
              ? <p>Too many matches, specify another filter </p>
              : filteredResult.length === 1
                  ? <CountryDetail country={filteredResult[0]} weatherAccessKey={weatherAccessKey}/>
                  : <CountryList countries={filteredResult} selectHandler={filterChangeHandler} />
      }
  </div>
);
}

export default App;

