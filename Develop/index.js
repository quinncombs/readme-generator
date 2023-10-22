// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  inquirer
    .prompt(
    [
      {
        type: 'input',
        message: 'A brief description of your project:',
        name: 'description',
      },

      {
        type: 'input',
        message: 'Describe the installation process:',
        name: 'installation',
      },

      {
        type: 'input',
        message: 'What is the use of this project?',
        name: 'usage',
      },

      {
        type: 'input',
        message: 'Who are the contributors?',
        name: 'contributing',
      },

      {
        type: 'input',
        message: 'Are there any tests included?',
        name: 'tests',
      },

      {
        type: 'list',
        message: 'Choose the license used in this project:',
        name: 'license',
        choices: [
          'Apache', 'Academic', 'GNU', 'ISC', 'MIT', 'Mozilla', 'Open'
        ]
      },

    ]
  )
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.readFile('data.csv', 'utf8', (error, data) =>
  error ? console.error(error) : console.log(data)
);
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
