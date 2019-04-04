const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');
const fs = require('fs');

var stdIn = process.openStdin();

console.log('Search for: ');
stdIn.addListener('data', function(place){
    geocode.getAddress(place, (err, result) => {
        if(err){
            console.log(err);
        } else{
            console.log('Location:', result.features[0].place_name);
            
            var longtitude = result.features[0].center[0];
            var latitude = result.features[0].center[1];
            
            weather.getWeather(latitude, longtitude, (errorMessage, weatherResult) => {
                if(errorMessage){
                    console.log(errorMessage);
                } else{
                    console.log(weatherResult);
                }
            });
        }
    });
});