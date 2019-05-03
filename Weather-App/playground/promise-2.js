

const request = require('request');

let geocodeAddress = (address) => {
return  new Promise((resolve , reject) => {

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
                reject('Unable to Connect to the google server');
            } else if (body.status === 'ZERO_RESULTS') {
              reject('Unable to Find the Address');
            } else if (body.status === 'OK') {
                resolve({
                    address : body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                })
                       }else if(body.status === 'OVER_QUERY_LIMIT'){
              reject('daily limit has crossed');
            }
          }
        );
})
};





geocodeAddress('19465').then((location) => {
    console.log(JSON.stringify(location ,undefined ,2));
} , (errorMessge) => {
    console.log("Here Is some Problem Inthis Code :--> " , errorMessge);
})







































