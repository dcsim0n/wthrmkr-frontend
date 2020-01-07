import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

import './App.css';

const api_url = "http://localhost:3000/data";


class App extends Component {

  state = {
    data: []
  }

  _queryTemp(){
    return this.state.data.map( row => row.temperature )
  }
  _queryHumidity(){
    return this.state.data.map( row => row.humidity )
  }
  _queryTime(){
    return this.state.data.map( row => row.time )
  }
  data = ( )=> {
    return {
      labels:  this._queryTime(),
      datasets: [
        {
          label: 'Temperature',
          data: this._queryTemp()
        },
        { 
          label: 'Humidity',
          data: this._queryHumidity()
        }
      ]
    }
  }

  // _newSample = ( ) => {
  //   const newLabels = this.state.labels.slice()
  //   newLabels.push( new Date().toJSON() )
  //   const temp = this.state.temp.slice()
  //   const humidity = this.state.humidity.slice()
  //   temp.push(  Math.random() )
  //   humidity.push( Math.random() )
  //   console.log('newLabels', newLabels)
  //   console.log('temp', temp)
  //   console.log('humidity', humidity)

  //   this.setState({
  //     labels: newLabels,
  //     temp: temp,
  //     humidity: humidity
  //   })
  // }
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

  componentDidMount(){
    fetch(api_url)
    .then( resp => {
      if (resp.error) {
        throw resp.error
      }

      return resp.json();
    })
    .then( data => {
      this.setState({ data });
    })
  }
}

export default App;
