// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input

  inquirer.prompt(
    [
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
      },

      {
        type: 'input',
        name: 'description',
        message: 'A brief description of your project:',
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

      {
        type: "input",
        name: "username",
        message: "What is your GitHub username?",
      },

      {
        type: "input",
        name: "email",
        message: "What is your email associated with Github?",
      },

    ]
    )


// TODO: Create a function to write README file
.then((answers) => {
  const readMePage = generateMarkdown(answers);

  fs.writeFile('./Example/README.md', readMePage, (err) =>
  err ? console.log(err) : console.log('Successfully wrote to README.md')
  )
})
