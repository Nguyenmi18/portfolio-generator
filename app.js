const inquirer = require("inquirer");

inquirer.prompt([
  {
    type: "input",
    name: "name",
    message: "what is your name  ?",
  }
])
.then (answer => console.log(answer));