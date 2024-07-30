import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Coding() {
    const [res, setRes] = useState('');
    const url = 'https://ciphersprint.pulley.com/'
    const email ='ctsang94@gmail.com'

    const getData = async () => {
        const {data} = await axios(url+email);
        setRes(data)
      };

   useEffect(()=>{
    getData()
   },[]);


    const asciiValue = [49,53,99,97,49,52,57,57,50,53,102,102,98,48,99,54,50,55,48,101,57,53,52,52,98,101,55,51,97,48,55,56];

    const convertedToCharacter = new TextDecoder().decode(
      Uint8Array.from(asciiValue)
    );


  return (

    <>
        <h3>{res}</h3>
    </>


  )
}
