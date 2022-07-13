import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";

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
    <div>HomeScreen</div>
  )
}

export default HomeScreen