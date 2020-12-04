const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')

// array of questions for user
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Give your project a description.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please provide installation instructions.',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Please enter usage information.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Please provide contribution guidelines.',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Please enter test instructions.',
        name: 'tests',
    },
    {
        type: 'list',
        message: 'Choose a License.',
        choices: ['MIT', 'Apache', 'GNU GPLv3'],
        name: 'license',
    },
    {
        type: 'input',
        message: 'Enter your GitHub username.',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Enter your email address.',
        name: 'email',
    },

];

// function to write README file
function writeToFile(fileName, data) {
      fs.writeFile(fileName, data, function (err) {
    if (err) throw err;
});
}

// function to initialize program
function init() {
    inquirer
    .prompt (questions).then(answers => {
        // data.licenseImg = userChoice(data.license)
writeToFile("README.md", generateMarkdown(answers))

    })
}

// function to return license image
function userChoice(choice){
    switch (choice) {
        case "MIT":
            return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
        
        case "Apache":
            return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"

        case "GNU GPLv3":
            return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
    
        default:
            break;
    }
    console.log(choice)
}


// function call to initialize program
init();
