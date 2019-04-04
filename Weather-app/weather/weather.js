const request = require('request');

//key: 0832d06ec33e2016f5df742855005c39
var getWeather = (latitude, longtitude, callback) => {
    //exclude hourly, daily, flags tag, unit in SI
    var weatherUrl = `https://api.darksky.net/forecast/0832d06ec33e2016f5df742855005c39/${latitude},${longtitude}?exclude=hourly,daily,flags&units=si`;
                
    request({
        url: weatherUrl,
        json: true
    }, (err, res, body) => {
        if(err){
            callback(err);
        } else{
            callback(undefined, body);
        }
    });
};

module.exports.getWeather = getWeather;