import React from 'react'
import { CityList } from './CityList';

export const StateList = ({country,countries,setcountries}) => {
    const addState = () => {
        const name = prompt("Enter state name:");
        if (name) {
          setcountries(
            countries.map((c) =>
              c.id === country.id ? { ...c, states: [...c.states, { id: Date.now(), name, cities: [] }] } : c
            )
          );
        }
      };
    
      const editState = (stateId) => {
        const name = prompt("Enter new state name:");
        if (name) {
          setcountries(
            countries.map((c) =>
              c.id === country.id
                ? { ...c, states: c.states.map((s) => (s.id === stateId ? { ...s, name } : s)) }
                : c
            )
          );
        }
      };
    
      const deleteState = (stateId) => {
        if (window.confirm("Are you sure you want to delete this state?")) {
          setcountries(
            countries.map((c) =>
              c.id === country.id ? { ...c, states: c.states.filter((s) => s.id !== stateId) } : c
            )
          );
        }
      };
  return (
    <div className="ms-4 mt-2">
        <button className="btn btn-success mb-2" onClick={addState}>Add State</button>
        {country.states.map((state) => (
            <div className="card state-card">
                <div className="card-body">
                  <div className='d-flex justify-content-between'>
                    <h4>{state.name}</h4>
                    <div className='d-flex justify-content-end'>
                      <button className="btn btn-warning me-2" onClick={() => editState(state.id)}>Edit</button>
                      <button className="btn btn-danger" onClick={() => deleteState(state.id)}>Delete</button>
                    </div>
                  </div>
                  <CityList state={state} countryId={country.id} countries={countries} setcountries={setcountries} />
                </div>
            </div>
        ))}
    </div>
  )
}
