console.log('Starting app.');

const fs = require('fs');
const os = require('os');

var user = os.userInfo();
console.log(user.username);

fs.appendFileSync('greetings.txt', `Hello ${user.username}!`);
var buffer = fs.readFileSync('greetings.txt', 'utf-8');
console.log(buffer);

/* fs.stat('bot.py', (err, stats) => {
    if(err)
        console.log(err);
    else   
        console.log('stats: ');
        console.log(stats);
}); */

console.log(process.cwd());
console.log(os.cpus());
console.log('OS version: ', os.arch());
console.log('Constant: ', os.constants);
console.log('Endiance: ', os.endianness);
console.log('Free memory: ', os.freemem()/(1024 * 1024));
console.log('Host name: ', os.hostname());
console.log('Network inteface: ', os.networkInterfaces());
console.log('release: ', os.release());
console.log('Total memory: ', os.totalmem()/(1024 * 1024));
console.log('Type: ', os.type());
console.log('End of testing over fs and os, many more to explore');