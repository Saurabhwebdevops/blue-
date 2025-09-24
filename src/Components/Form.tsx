import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Form() {
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [cities, setCities] = useState([]);

  // Fetch states of India on mount
  useEffect(() => {
    axios.get('https://countriesnow.space/api/v0.1/countries/states')
      .then(res => {
        const countries = res.data.data;
        const india = countries.find(country => country.name === "India");
        if (india && india.states) {
          const stateNames = india.states.map(it => it.name);
          setStates(stateNames);
        }
      });
  }, []);

  // Fetch cities when a state is selected
  useEffect(() => {
    if (selectedState) {
      axios.post('https://countriesnow.space/api/v0.1/countries/state/cities', {
        country: "India",
        state: selectedState
      })
      .then(res => {
        setCities(res.data.data);
      })
      .catch(err => {
        console.error("Error fetching cities:", err);
      });
    }
  }, [selectedState]);

  return (
    <div>
      <h3>Select State:</h3>
      <select onChange={(e) => setSelectedState(e.target.value)}>
        <option value="">--Select State--</option>
        {states.map((state, index) => (
          <option key={index} value={state}>{state}</option>
        ))}
      </select>

      {selectedState && (
        <>
          <h4>Cities in {selectedState}:</h4>
          <select>
            {cities.map((city, index) => (
              <option key={index}>{city}</option>
            ))}
          </select>
        </>
      )}
    </div>
  );
}

export default Form;
