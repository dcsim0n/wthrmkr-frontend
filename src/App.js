import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CanvasJSReact from './assets/canvasjs/canvasjs.react'

const CanvasJSChart = CanvasJSReact.CanvasJSChart


const options = {
  animationEnabled: true,
  exportEnabled: true,
  theme: "light2", // "light1", "dark1", "dark2"
  title:{
    text: "Sensor Data"
  },
  axisY: {
    title: "Temperature",
    includeZero: false,
    suffix: "%"
  },
  axisX: {
    title: "Time",
    prefix: "W",
    interval: 2
  },
  data: [{
    type: "line",
    toolTipContent: "Week {x}: {y}%",
    dataPoints: []
  }]
}
class App extends Component {
  state = {
    samples: [
      { x: 1, y: 64 },
      { x: 2, y: 61 },
      { x: 3, y: 64 },
      { x: 4, y: 62 },
      { x: 5, y: 64 },
      { x: 6, y: 60 },
    ]
  }
  options = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "light2", // "light1", "dark1", "dark2"
    title:{
      text: "Sensor Data"
    },
    axisY: {
      title: "Temperature",
      includeZero: false,
      suffix: "C"
    },
    axisX: {
      title: "Time",
      prefix: "S",
      interval: 2
    },
    data: [{
      type: "line",
      toolTipContent: "Week {x}: {y}%",
      dataPoints: ( ()=> this.state.samples)()
    }]
  }
  render() {
    return (
      <div>
        <CanvasJSChart options={this.options } />
      </div>
    )
  }
}

export default App;
