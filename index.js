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
        name: 'instructions',
    },
    {
        type: 'input',
        message: 'What is this used for?',
        name: 'usage information',
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
writeToFile("README.md", generateMarkdown(answers))

    })
}

// function call to initialize program
init();
