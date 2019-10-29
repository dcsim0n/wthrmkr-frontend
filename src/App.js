import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

import './App.css';


class App extends Component {

  state = {
    labels: [],
    temp: [],
    humidity: []
  }


  data = ( )=> {
    return {
      labels: this.state.labels ,
      datasets: [
        {
          label: 'Temperature',
          data: this.state.temp
        },
        { 
          label: 'Humidity',
          data: this.state.humidity
        }
      ]
    }
  }

  _newSample = ( ) => {
    const newLabels = this.state.labels.slice()
    newLabels.push( new Date().toJSON() )
    const temp = this.state.temp.slice()
    const humidity = this.state.humidity.slice()
    temp.push(  Math.random() )
    humidity.push( Math.random() )
    console.log('newLabels', newLabels)
    console.log('temp', temp)
    console.log('humidity', humidity)

    this.setState({
      labels: newLabels,
      temp: temp,
      humidity: humidity
    })
  }
  render() {
    return (
      <div>
        <Line data={ this.data } />  
        <button onClick={ ()=> this._newSample() }  >
          <h3>New Sample</h3>
        </button>    
      </div>
    )
  }
}

export default App;
