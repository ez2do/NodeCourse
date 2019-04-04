//do some adding

var adding = (a, b) => {
    return new Promise((resolve, reject) => {
        if(typeof(a) === 'number' && typeof(b) === 'number'){
            resolve(a + b);
        } else{
            reject('Arguments must be number');
        }
    });
};

adding(5, 9).then((result) => {
    console.log('Result: ', result);
    return adding(result, 6);
}).then((result) => {
    console.log('Result2:', result);
}).catch((error) => {
    console.log('Error:', error);
});