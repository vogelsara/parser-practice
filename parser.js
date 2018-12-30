const fs = require('fs');
const chalk = require('chalk');

fs.readFile('code.txt', function(err, data) {
    for (var i = 0; i < data.length; i++) {
        process.stdout.write(String(data).charAt(i));
    }
});
