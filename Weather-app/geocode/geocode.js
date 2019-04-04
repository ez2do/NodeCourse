const request = require('request');

const getAddress = function(place, callback){
    var searchUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${place.toString().trim()}.json?limit=1&access_token=pk.eyJ1IjoidHVhbmFuaGF2YWlsYWJsZSIsImEiOiJjanA0NG5rbDYwb3l3M3dvMXZ1MGVzNjVuIn0.Qy-B5HW1toEdJ056EYeAQQ`;

    request(searchUrl, (err, res, body) => {
        //error when connecting to the server
        if(err){
            callback('Unable to connect to the server');
        }

        //invalid searching string
        else if(JSON.parse(body).features == undefined){
            callback('Invalid place');
        }

        //problem with the searching string => 0 result
        else if(JSON.parse(body).features.length == 0){
            callback('Can not search this place');
        }

        //valid case
        else if(JSON.parse(body).features.length > 0){
            callback(undefined, JSON.parse(body));
        }

        //unexpected behavior
        else{
            callback('Unexpected behavior. Report it');
        }
    });
};

module.exports.getAddress = getAddress;