const fs = require('fs');
const chalk = require('chalk');

fs.readFile('code.txt', function(err, data) {

    var isColorRose = false;

    for (var i = 0; i < data.length; i++) {
        if (String(data).charAt(i) == "<") {
            isColorRose = true;
        }
        if (isColorRose) {
            process.stdout.write(chalk.magenta(String(data).charAt(i)));
        } else {
            process.stdout.write(chalk.blue(String(data).charAt(i)));
        }
        if (String(data).charAt(i) == ">") {
            isColorRose = false;
        }
    }
});
