const inquirer = require("inquirer");
const prompt = inquirer.createPromptModule();
const chalk = require("chalk");

let answerId = 0;

const start = () => {
  return prompt([
    {
      type: "list",
      name: "preset",
      choices: [
        {
          name: "default 默认生成所有配置",
          value: presets.default,
          checked: true,
        },
        { name: "Manually select", value: presets.manually },
      ],
    },
  ]);
};

const presets = {
  default: answerId++,
  manually: answerId++,
};

const selectFeatures = () => {
  return prompt([
    {
      type: "checkbox",
      name: "features",
      choices: Object.entries(features).map(([feature, value]) => ({
        name: feature,
        value,
      })),
    },
  ]);
};

const features = {
  commitizen: answerId++,
  changelog: answerId++,
  eslint: answerId++,
  prettier: answerId++,
  editorConfig: answerId++,
  husky: answerId++,
  lintStaged: answerId++,
};

module.exports = {
  start,
  selectFeatures,
  answers: {
    presets,
    features,
  },
};
