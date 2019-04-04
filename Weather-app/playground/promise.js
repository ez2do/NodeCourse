//the promise run synchronous, it's take only 1 state: resolve or reject
var myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("It's work");
        reject("It's unable to fulfill");
    }, 2000);
}).then((message) => {
    console.log('Success: ', message);
}, (errorMessage) => {
    console.log('Fail: ', errorMessage);
})