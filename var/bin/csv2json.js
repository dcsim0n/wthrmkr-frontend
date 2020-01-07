/*
| convert csv weather data to json
| Dana simmons 2019
*/
const fs = require('fs');


const files = ["../station-weather.csv"];

const output_file = "../data.json";

files.forEach((file_path, idx ) => {
  fs.readFile(file_path, (error , buffer ) =>{
    if(error){
      throw error;
    }
    const rows = buffer.toString().split('\n');
    //310249,20.46,48.29199,981.3613,268.9439
    //time, temp, humidity, pressure, altitude
    const json_rows = rows.map( r => {
      fields = r.split(',');
      return `{"id":${idx},"time":${fields[0]},"temperature":${fields[1]},"humidity":${fields[2]},"pressure":${fields[3]},"altitude":${fields[4]}}\n`;
    });

    fs.writeFileSync(output_file,json_rows);
  })
})