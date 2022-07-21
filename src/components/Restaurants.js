import React, { Component } from 'react'
import HomeScreen from "./HomeScreen"
import RandomRest from "./RandomRest"

export default class Restaurants extends Component {
    state =  {
        step: 1,
        location: "",
        name: "",
        description: "",
        website: ""
      };
      
      prevStep = () => {
            const {step} = this.state;
            this.setState({step: step + 1})
      }
      
      handleLocationInput = (e) => {
        this.setState({loaction: e.target.value})
      }
      
      
    
  render() {
    const {step} = this.state;
    const {location, name, description, website} = this.state;
    const values = {location, name, description, website};

        switch(step) {
            case 1:
                return (
                    <HomeScreen
                    nextStep = {this.nextStep}
                    values = {values}
                    handleLocationInput = {this.handleLocationInput}
                    />
                )
            case 2:
                return (
                    <RandomRest
                    nextStep = {this.nextStep}
                    values = {values}
                    />
                )
            default:
        }   
  }
}

