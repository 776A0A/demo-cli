#!/usr/bin/env node

const commander = require("commander");
const path = require("path");
const pkg = require("../package.json");
const prompt = require("./prompt");
const download = require("./download");
const downloadDeps = require("./deps");

let projectName;

commander
  .version(pkg.version, "-v, --version")
  .command("init <name>")
  .description("initial a project")
  .option("-h, --help", "init project-name")
  .action((name, options) => {
    projectName = name;
  })
  .parse(process.argv);

prompt().then(async (answers) => {
  const projectPath = path.join(process.cwd(), projectName);

  await download(projectPath);
  downloadDeps(projectPath);
});
