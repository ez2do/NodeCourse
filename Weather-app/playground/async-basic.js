console.log('Hello');

setTimeout(() => {
    console.log('Inside the waiting');
}, 2000);

setTimeout(() => {
    console.log('Run immediately');
}, 0);

console.log('Goodbye');
