import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

import './App.css';



class App extends Component {

  state = {
    labels: [],
    data: require('./data.json')
  }

  _queryTemps(){
    console.log("parsing temps")
    return this.state.data.map( r =>{
      return r.temp;
    })
  }
  _queryHumid(){
    return this.state.data.map( r =>{
      return r.humi;
    })
  }
  data = ( )=> {
    return {
      labels: this.state.labels ,
      datasets: [
        {
          label: 'Temperature',
          data: this._queryTemps()
        },
        { 
          label: 'Humidity',
          data: this._queryHumid()
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
    console.log("loaded data", this.state.data.length)
    return (
      <div>
        <Line data={ this.data() } />  
            
      </div>
    )
  }
}

export default App;
