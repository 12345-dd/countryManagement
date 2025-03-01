import React from 'react'
import { StateList } from './StateList';

export const CountryList = ({countries,setcountries}) => {

    const editCountry = (id) => {
        const countryName = prompt("Enter new Country name: ");
        if(countryName){
            setcountries(countries.map((country)=>(country.id === id ? {...country,countryName} : country)));
            console.log(countries);
        }
    }

    const deleteCountry = (id) => {
        if(window.confirm("Are you really want to delete?")){
            setcountries(countries.filter((country) => country.id !== id))
        }
    }
  return (
    <div>
        {countries.map((country)=>(
            <div className="card country-card">
                <div className='card-body'>
                    <h3 className='card-title'>{country.countryName}</h3>
                    <button className="btn btn-warning me-2" onClick={()=>editCountry(country.id)}>Edit</button>
                    <button className="btn btn-danger me-2" onClick={()=>deleteCountry(country.id)}>Delete</button>
                    <StateList country={country} countries={countries} setcountries={setcountries}/>
                </div>
            </div>
        ))}
    </div>
  )
}
