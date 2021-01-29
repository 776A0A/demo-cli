const inquirer = require("inquirer");

const inputLicense = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "license",
      message: "Input license",
    },
  ]);
};

module.exports = inputLicense;
