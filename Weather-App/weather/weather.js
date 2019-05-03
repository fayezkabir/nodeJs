
const request =require('request');


let getWeather = (lat, lng, callback) => {
  let key = '1381aaf5e766879882824826458b532d';
  request(
    {
      url: `https://api.darksky.net/forecast/${key}/${lat},${lng}`,
      json: true
    },
    (error, response, body) => {
      if (error) {
        callback('unable to connect to the server');
      } else if (response.statusCode === 400) {
        callback('unable to fetch the data');
      } else if (response.statusCode === 200) {
        callback(undefined, {
          temp: body.currently.temperature,
          apparentTemperature: body.currently.apparentTemperature,

        //   pressure: body.currently.pressure
        });
      }
    }
  );
};


module.exports={
    getWeather
}; 
  
// module.exports.getWeather = getWeather;


































