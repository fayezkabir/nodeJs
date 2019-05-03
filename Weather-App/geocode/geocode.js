console.log('starting geo code');

const request =require('request');




// let  geocodeAddress = (address) => {
    
// let encodedAddress = encodeURIComponent(address);
// let mainKey = 'AIzaSyDFd9m669ChMiC21-m-Wz-3h2J0PbJ1MzY';

// request(
//   {
//     url: `https://maps.googleapis.com/maps/api/geocode/json?key=${mainKey}&address=${encodedAddress}`,
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
// }






let  geocodeAddress = (address,callback) => {
    
    let encodedAddress = encodeURIComponent(address);
    let mainKey = 'AIzaSyDFvQdsHs4zf2lhuKBe9eHftmzj9fIIyxM';
    
    request(
      {
        url: `https://maps.googleapis.com/maps/api/geocode/json?key=${mainKey}&address=${encodedAddress}`,
        json: true
      },
      (error, response, body) => {
        // console.log(JSON.stringify(error, undefined , 2));
    
        if (error) {
            callback('Unable to Connect to the google server');
        } else if (body.status === 'ZERO_RESULTS') {
          callback('Unable to Find the Address');
        } else if (body.status === 'OK') {
            callback(undefined , {
                address : body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            })
        //   console.log(`Address : ${body.results[0].formatted_address}`);
        //   console.log(`Latitude : ${body.results[0].geometry.location.lat}`);
        //   console.log(`Longitude : ${body.results[0].geometry.location.lng}`);
        }else if(body.status === 'OVER_QUERY_LIMIT'){
          callback('daily limit has crossed');
        }
      }
    );
    };
    

module.exports ={
    geocodeAddress
}





























