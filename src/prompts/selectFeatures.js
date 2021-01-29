const inquirer = require("inquirer");
const answers = require("./answers");

const selectFeatures = () => {
  return inquirer.prompt([
    {
      type: "checkbox",
      name: "features",
      choices: Object.entries(answers.features).map(([feature, value]) => ({
        name: feature,
        value,
      })),
    },
  ]);
};

module.exports = selectFeatures;
