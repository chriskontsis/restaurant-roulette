import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import { logDOM } from '@testing-library/react';
import '../App.css'

const HomeScreen = () => {
  const [loading,setLoading] = useState(false);

const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://restaurants-near-me-usa.p.rapidapi.com/restaurants/location/state/MI/city/West%20Bloomfield/0',
  headers: {
    'X-RapidAPI-Key': 'c08c6ad559msh3fc58389c3580cbp1c885bjsnd19cbe0c1972',
    'X-RapidAPI-Host': 'restaurants-near-me-usa.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

  return (
    <div id="page-container"> 
    <div id="img-container">
    <img id='landing-img' src={require("../imgs/Navigation-amico.png")} alt="" />
    </div>

    <div id="form-container">

  
      <form id="container-items">
        <h1 id="title"> Enter your zipcode <br /></h1>
        <input id="input-form"
          type="text"
         
        /> <br />
        <button id="next-button">Next</button>
      </form>
    </div>
  </div>
  )
}

export default HomeScreen