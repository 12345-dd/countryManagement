import React from 'react'

export const CityList = ({state,countryId,countries,setcountries}) => {
    const addCity = () => {
        const name = prompt("Enter city name:");
        if (name) {
          setcountries(
            countries.map((c) =>
              c.id === countryId
                ? {
                    ...c,
                    states: c.states.map((s) =>
                      s.id === state.id ? { ...s, cities: [...s.cities, { id: Date.now(), name }] } : s
                    ),
                  }
                : c
            )
          );
        }
      };
    
      const deleteCity = (cityId) => {
        if (window.confirm("Are you sure you want to delete this city?")) {
          setcountries(
            countries.map((c) =>
              c.id === countryId
                ? {
                    ...c,
                    states: c.states.map((s) =>
                      s.id === state.id ? { ...s, cities: s.cities.filter((city) => city.id !== cityId) } : s
                    ),
                  }
                : c
            )
          );
        }
      };
  return (
    <div className="ms-5 mt-2">
        <button className="btn btn-info mb-2" onClick={addCity}>Add City</button>
        {state.cities.map((city) => (
            <div key={city.id} className="alert alert-primary d-flex justify-content-between">
                <span>{city.name}</span>
                <button className="btn btn-sm btn-danger" onClick={() => deleteCity(city.id)}>Delete</button>
            </div>
        ))}
    </div>
  )
}
