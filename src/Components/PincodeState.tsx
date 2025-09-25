import axios from 'axios'
import React, { useState } from 'react'
import Form from './Form';

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
   <Form/>
   
   </>
  )
}
