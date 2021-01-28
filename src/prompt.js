const inquirer = require("inquirer");
const prompt = inquirer.createPromptModule();
const chalk = require("chalk");

module.exports = () => {
  return prompt([
    {
      type: "input",
      name: "description",
      message: "description of your project",
      validate: (des) => !!des,
    },
    {
      type: "list",
      name: "sex",
      choices: [
        { name: "male", value: 0, checked: true },
        { name: "female", value: 1 },
      ],
    },
    {
      type: "checkbox",
      name: "sports",
      choices: [
        { name: "football", value: 0 },
        { name: chalk.red("basketball"), value: 1, checked: true },
        { name: "ski", value: 2 },
      ],
    },
  ]);
};
