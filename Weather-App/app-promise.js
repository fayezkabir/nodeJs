

const yargs = require('yargs');


const axios = require('axios');

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

  let encodedAddress = encodeURIComponent(argv.address);
  let API_id = 'znz6sr9BndyfGBQZrGAu';
  let API_code = 'DpazUF0f-v_uvu5biCpOXg';

  let geocodeUrl = `https://geocoder.api.here.com/6.2/geocode.json?app_id=${API_id}&app_code=${API_code}&searchtext=${encodedAddress}`;

  axios.get(geocodeUrl).then((response) => {

    if (!response.data.Response.View[0]){
      throw new Error('Unable to find the given address');
    }
    
   let location = response.data.Response.View[0].Result[0].Location;

   let lat = location.DisplayPosition.Latitude;
   let lng= location.DisplayPosition.Longitude;
   let key = '1381aaf5e766879882824826458b532d';


   let weatherURL =`https://api.darksky.net/forecast/${key}/${lat},${lng}`;

   console.log(weatherURL);
    
   console.log(location.Address);

   return  axios.get(weatherURL);




  }).then((response) => {
      let temperature  = response.data.currently.temperature;
      let apparentTemperature = response.data.currently.apparentTemperature;

      console.log(`Its Currently ${temperature} c  but it suppose to be ${apparentTemperature} c`);
  }).catch((e) =>{
    if(e.code === 'ENOTFOUND') {
      console.log('Unable to connect to api server');
    }else {
      console.log(e.message);
    }
    
  });









