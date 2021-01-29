#!/usr/bin/env node

const commander = require("commander");
const path = require("path");
const pkg = require("../package.json");
const prompts = require("./prompts/index");
const download = require("./download");
const downloadDeps = require("./deps");

commander
  .version(pkg.version, "-v, --version")
  .command("init <name>")
  .description("initial a project")
  .option("-h, --help", "init project-name")
  .action((name, options) => {
    startPrompt(name);
  })
  .parse(process.argv);

const allAnswers = {};
async function promptAndSaveAnswers(promptType) {
  const answers = await prompts[promptType]();
  Object.assign(allAnswers, answers);
  return answers;
}

async function startPrompt(projectName) {
  {
    const answers = await promptAndSaveAnswers("start");

    const license = answers.license;
    if (license === prompts.answers.licenses["Input other license"]) {
      await promptAndSaveAnswers("inputLicense");
    }
  }

  {
    const answers = await promptAndSaveAnswers("selectPreset");

    if (answers.preset === prompts.answers.presets.manually) {
      const answers = await promptAndSaveAnswers("selectFeatures");

      const {
        commitizen,
        changelog,
        eslint,
        prettier,
        editorConfig,
        husky,
        lintStaged,
      } = answers;
      console.log({ answers });
    }
  }

  const projectPath = path.join(process.cwd(), projectName);

  // await download(projectPath, isManually);
  // downloadDeps(projectPath);
}
