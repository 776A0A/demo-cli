const answers = require("./answers");
const inquirer = require("inquirer");

const start = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "projectName",
      message: "Input your project name.",
    },
    {
      type: "input",
      name: "description",
      message: "Describe your project.",
    },
    {
      type: "list",
      name: "license",
      choices: Object.entries(answers.licenses).map(([license, value]) => ({
        name: license,
        value,
      })),
    },
  ]);
};

module.exports = start;
