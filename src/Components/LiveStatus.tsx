import axios from 'axios';
import React, { useState } from 'react';

export const LiveStatus = () => {
  const [status, setStatus] = useState(null);

  const Live_Status = async () => {
    const tno = document.getElementById('tno').value;

    try {
      const response = await axios.get(
        `https://irctc-api2.p.rapidapi.com/liveTrain?trainNumber=${tno}&startDay=1`,
        {
          headers: {
            'x-rapidapi-key': 'd435d5eca9msh0b9d3f14f573657p1a56a4jsnc3c7b2b9d3d5',
            'x-rapidapi-host': 'irctc-api2.p.rapidapi.com',
          },
        }
      );

      setStatus(response.data); // update state with actual data
    } catch (error) {
      console.error('Error fetching train status:', error);
    }
  };

  return (
    <>
      <div>
        <label>Enter Train Number</label>
        <input type="text" name="Tno" id="tno" />
        <button onClick={Live_Status}>Submit</button>
      </div>

      {status && (
        <div>
          <h3>Train Status:</h3>
          <pre>{JSON.stringify(status, null, 2)}</pre>
        </div>
      )}
    </>
  );
};
