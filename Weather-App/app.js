// const { getLocation } = require("./getLocation");

const request = require('request'); //loading the npm
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

// request({
//     url: 'https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDFd9m669ChMiC21-m-Wz-3h2J0PbJ1MzY&address=700124%20kolkata%20barasat',
//     json :true
// }, (error , response , body) => {
//    console.log(JSON.stringify(body, undefined , 2));
// });

// getLocation('barasat, kolkata', (error, location) => {
//   if (error) {
//     console.log(error);
//   } else console.log('location = ', location);
// });

// function getLocation(address, cb) {
//   const TOKEN = 'AIzaSyDFd9m669ChMiC21-m-Wz-3h2J0PbJ1MzY';
//   const reqObj = {
//     url: `https://maps.googleapis.com/maps/api/geocode/json?key=${TOKEN}&address=${address}`,
//     json: true
//   };
//   request(reqObj, (error, response, body) => {
//     let location = JSON.stringify(body, undefined, 2);
//     cb(error, location);
//   });
// }




const yargs = require('yargs');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch Weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

  geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if (errorMessage) {
      console.log(errorMessage);
    } else {
      console.log(results.address);
      // console.log(JSON.stringify(results, undefined, 2));

      weather.getWeather(
        results.latitude,
        results.longitude,
        (error, weatherResult) => {
          if (error) {
            console.log(error);
          } else {
            // console.log(JSON.stringify(weatherResult, undefined, 2));
            console.log(`Its currently ${weatherResult.temp} . It feels like${weatherResult.apparentTemperature}.`)
          }
        }
      );
    }
  });




weather.getWeather(22.572646,88.36389500000001,(error,weatherResult) =>{
  if(error){
    console.log(error);
  }else{
    console.log(weatherResult);
  }
});




/*
request(
  {
    url: `https://api.darksky.net/forecast/1381aaf5e766879882824826458b532d/23.9520889,88.26619269999999`,
    json: true
  },
  (error, response, body) => {
    if (error) {
      console.log('unable to connect to the server');
    } else if (response.statusCode === 400) {
      console.log('unable to fetch the data');
    } else if (response.statusCode === 200) {
      console.log(body.currently.temperature);
      console.log(body.currently.pressure);
    }
  }
);

*/








// let encodedAddress = encodeURIComponent(argv.address);

// request(
//   {
//     url: `https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDFd9m669ChMiC21-m-Wz-3h2J0PbJ1MzY&address=${encodedAddress}`,
//     json: true
//   },
//   (error, response, body) => {
//     // console.log(JSON.stringify(error, undefined , 2));

//     if (error) {
//       console.log('Unable to Connect to the google server');
//     } else if (body.status === 'ZERO_RESULTS') {
//       console.log('Unable to Find the Address');
//     } else if (body.status === 'OK') {
//       console.log(`Address : ${body.results[0].formatted_address}`);
//       console.log(`Latitude : ${body.results[0].geometry.location.lat}`);
//       console.log(`Longitude : ${body.results[0].geometry.location.lng}`);
//     }
//   }
// );
