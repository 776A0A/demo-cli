const ora = require("ora");
const spawn = require("child_process").spawn;
const boxen = require("boxen");
const getPkgManager = require("./utils/pkgManager");

module.exports = (projectPath) => {
  const spinner = ora("started to download deps");
  spinner.start();

  const pkgManager = getPkgManager();

  spawn(pkgManager.install, [], {
    cwd: projectPath,
    stdio: "inherit",
    shell: true,
  })
    .on("exit", () => {
      const succeedMessage = boxen("download deps succeed!!", {
        align: "center",
        borderColor: "greenBright",
        borderStyle: "classic",
        padding: 1,
      });
      spinner.succeed("\n" + succeedMessage + "\n");
    })
    .on("error", (err) => {
      console.log({ err });
      spinner.fail("download deps failed!");
    });
};
