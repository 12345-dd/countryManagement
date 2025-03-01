import React, { useState } from "react";
import { CountryList } from "./components/CountryList";
import "./components/styles.css";

function App() {
  const [countries, setcountries] = useState([])

  const addCountry = () => {
    const countryName = prompt("Enter Country Name:");
    if(countryName){
      setcountries([...countries,{id:Date.now(),countryName,states:[]}])
    }
  }

  return (
    <div className="container mt-4">
      <h1 className="text-center">Country, State and City Management</h1>
      <div className="text-center">
        <button className="btn btn-primary mb-3" onClick={addCountry}>Add Country</button>
      </div>
      <CountryList countries={countries} setcountries={setcountries}/>
    </div>
  )
}

export default App
