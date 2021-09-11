var fs = require('fs');
var readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

userInput('Enter filename: ');

function ifFileExists(filepath) {
    try {
        fs.accessSync(filepath, fs.constants.F_OK);
        return true;
    } catch (e) {
        return false;
    }
}

function userInput(message) {
    rl.question(message, (fileName) => {
        if (ifFileExists(fileName)) {
            askForUserInput('File already exists,provide a new filename: ');
        } else {
            writeToFile(fileName);
            rl.close();
        }
    });
}

function writeToFile(fileName) {
    fs.appendFile('fileNameList.txt', fileName, err => {
        if (err) {
            console.log(err);
            return;
        }
        fs.writeFile(fileName, 'You are awesome', err => {
            if (err) {
                console.log(err);
                return
            }
        });
    });
}
