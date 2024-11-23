const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    
    const str2 = str.split('').map((el) => {
        if(el == el.toUpperCase()) {
            el = el.toLowerCase();
        } else {
            el = el.toUpperCase();
        }
        return el;
    }).join('');
    
    console.log(str2);
});