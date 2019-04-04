const request = require('request');

//input place, return a promise
var geocodeAddress = (place) => {
    var searchUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${place.toString().trim()}.json?limit=1&access_token=pk.eyJ1IjoidHVhbmFuaGF2YWlsYWJsZSIsImEiOiJjanA0NG5rbDYwb3l3M3dvMXZ1MGVzNjVuIn0.Qy-B5HW1toEdJ056EYeAQQ`;

    return new Promise((resolve, reject) => {
        request(searchUrl, (err, res, body) => {
            //error when connecting to the server
            if(err){
                reject('Unable to connect to the server');
            }
    
            //invalid searching string
            else if(JSON.parse(body).features == undefined){
                reject('Invalid place');
            }
    
            //problem with the searching string => 0 result
            else if(JSON.parse(body).features.length == 0){
                reject('Can not search this place');
            }
    
            //valid case
            else if(JSON.parse(body).features.length > 0){
                resolve(JSON.parse(body));
            }
    
            //unexpected behavior
            else{
                reject('Unexpected behavior. Report it');
            }
        });
    });
};

var fetchWeather = (latitude, longtitude) => {
    var weatherUrl = `https://api.darksky.net/forecast/0832d06ec33e2016f5df742855005c39/${latitude},${longtitude}?exclude=hourly,daily,flags&units=si`;
                
    return new Promise((resolve, reject) => {
        request({
            url: weatherUrl,
            json: true
        }, (err, res, body) => {
            if(err){
                reject(err);
            } else{
                resolve(body);
            }
        });
    })
    
}

geocodeAddress('Hanoi').then((result) => {
    console.log('Result:\n', result);
    var longtitude = result.features[0].center[0];
    var latitude = result.features[0].center[1];
    return fetchWeather(latitude, longtitude);
}).then((result) => {
    console.log(result);
}).catch((errorMessage) => {
    console.log(errorMessage);
})