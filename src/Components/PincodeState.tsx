import axios from 'axios'
import React, { useState } from 'react'

export const PincodeState = () => {
    const[state,setState]=useState();
    const[city,setCity]=useState(['']);
  const sendPincode=async(e)=>{
    let Val=e.target.value;
    if(Val.length=== 6){
     let data=axios.get(`https://api.postalpincode.in/pincode/${Val}`);
     data.then(res=>{
        res.data.map((item,index)=>{
            setState(item.PostOffice[0].State);
            setCity(item.PostOffice.map((item)=>{
                return item.Name;
            }));
        })
     })
    }
  }
    return (
   <>
   <label htmlFor="Pincode">Enter PinCode</label>
   <input type="text" maxLength={6} onChange={sendPincode}/>
   
   <input type="text" name="" id="" value={state} />
   
   <select>
     <option value="Select city">Select City</option>

    {
      city.map((t,i)=>{
          return <option value={t} key={i}>{t}</option>
      })
    }

   </select>
   
   
   </>
  )
}
