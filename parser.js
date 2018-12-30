const fs = require('fs');
const chalk = require('chalk');

fs.readFile('code.txt', function(err, data) {
    process.stdout.write(data);
});
