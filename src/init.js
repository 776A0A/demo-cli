const commander = require("commander");
const inquirer = require("inquirer");
const chalk = require("chalk");
const ora = require("ora");
const progress = require("progress");
const download = require("download-git-repo");
const pkg = require("../package.json");
const prompt = inquirer.createPromptModule();
const path = require("path");

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

prompt([
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
]).then(async (answers) => {
  const projectPath = path.join(process.cwd(), projectName);
  const spinner = ora("downloading...");
  spinner.start();
  const sourceURL = "github:776A0A/sharedjs-shared";
  const temp = await download(
    sourceURL,
    projectPath,
    { clone: false },
    (err) => {
      if (err) {
        console.log({ err });
        spinner.fail("failed!!");
        return
      }
      spinner.succeed("succeed!!!");
    }
  );
});
