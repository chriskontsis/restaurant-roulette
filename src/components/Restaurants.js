import React, { Component } from 'react'
import HomeScreen from './HomeScreen'
import RandomRest from './RandomRest'

export class Restaurants extends Component {
        state =  {
            step: 1,
            location: "",
            name: "",
            description: "",
            website: ""
        }

        prevStep = () => {
                const {step} = this.state;
                this.setState({step: step + 1})
        }

        handleLocationInput = (e) => {
            this.setState({loaction: e.target.value})
        }

        reRoll = (e) => {

        }


  render() {
      const step = this.state;
      const values = {location, name, description, webstie};
      const {location, name, description, webstie} = this.state;

    switch(step) {

        case 1:
            return (
                <HomeScreen
                values = {values}
                handleLocationInput = {this.handleLocationInput}
                />
            )
        case 2:
            return (
                <RandomRest
                values = {values}
                reRoll = {this.reRoll}
                prevStep = {this.prevStep}
                />
            )

    }
  }
}

export default Restaurants