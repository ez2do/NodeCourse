const axios = require('axios');

var stdIn = process.openStdin();
console.log('Search for:');
stdIn.addListener('data', (place) => {
    var geocodeUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${place.toString().trim()}.json?limit=1&access_token=pk.eyJ1IjoidHVhbmFuaGF2YWlsYWJsZSIsImEiOiJjanA0NG5rbDYwb3l3M3dvMXZ1MGVzNjVuIn0.Qy-B5HW1toEdJ056EYeAQQ`;
    axios.get(geocodeUrl).then((result) => {      
        if(result.data.features.length == 0){
            throw new Error('Can not find this place');
        } else{
            console.log(result.data.features[0].place_name);
            var longtitude = result.data.features[0].center[0];
            var latitude = result.data.features[0].center[1];
            var weatherUrl = `https://api.darksky.net/forecast/0832d06ec33e2016f5df742855005c39/${latitude},${longtitude}?exclude=hourly,daily,flags&units=si`;
            
            return axios.get(weatherUrl);
        }
    }).then((result) => {
        console.log(result.data);
    }).catch((err) => {
        console.log(err.message);
    });
});
