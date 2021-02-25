const generatePkg = require('../generatePkg')
const promptAnswers = require('../prompts/answers')
const { merge } = require('../utils')

module.exports = (answers) => {
    const {
        commitizen,
        changelog,
        eslint,
        prettier,
        editorConfig,
        husky,
        lintStaged,
        projectName,
        features,
    } = answers

    let pkg = {}

    if (features.includes(promptAnswers.features.eslint)) {
        const linterPkg = require('../features/linter')
        pkg = merge(pkg, linterPkg)
    }

    if (features.includes(promptAnswers.features.prettier)) {
        const vuexPkg = require('../features/vuex')
        pkg = merge(pkg, vuexPkg)
    }
    pkg = generatePkg({ name: projectName, ...pkg })

    console.log(pkg)
}
