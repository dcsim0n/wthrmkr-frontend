

const fs = require('fs');

fs.readFile('../src/station-weather.csv', (err, data ) =>{
  let rows = data.toString().split("\n");
  const m = rows.map( r =>{
    // console.log("mapping ", r);
    fields = r.split(',');
    return {
      "time":fields[0],
      "temp":fields[1],
      "humi":fields[2],
      "pres":fields[3],
      "alti":fields[4]
    }
  });

  fs.writeFileSync('./data.json',JSON.stringify(m));
})