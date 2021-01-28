#!/usr/bin/env node

const commander = require("commander");
const path = require("path");
const pkg = require("../package.json");
const prompts = require("./prompts");
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

function startPrompt(projectName) {
  prompts.start().then(async ({ preset }) => {
    const presetAnswers = prompts.answers.presets;

    let isManually = false;
    if (preset === presetAnswers.manually) {
      isManually = true;
    }

    if (isManually) {
      prompts.selectFeatures().then((answers) => {
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
      });
    }

    const projectPath = path.join(process.cwd(), projectName);

    await download(projectPath, isManually);
    downloadDeps(projectPath);
  });
}
