import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import { logDOM } from '@testing-library/react';
import '../App.css'

const HomeScreen = ({values, handleLocationInput, nextStep}) => {
  const [loading,setLoading] = useState(false);


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
           value = {values.location}
           onChange={handleLocationInput("location")} 
        /> <br />
        <button id="next-button">Next</button>
      </form>
    </div>
  </div>
  )
}

export default HomeScreen