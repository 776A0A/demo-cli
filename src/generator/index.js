const generatePkg = require('../generatePkg')
const promptAnswers = require('../prompts/answers')

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

function merge(o1, o2) {
    const keys = Object.keys(o2)

    const result = { ...o1 }

    for (let index = 0; index < keys.length; index++) {
        const key = keys[index]
        if (!result[key]) {
            result[key] = o2[key]
        } else if (
            typeof o2[key] === 'object' &&
            typeof result[key] === 'object'
        ) {
            result[key] = merge(result[key], o2[key])
        }
    }

    // console.log({ result })

    return result
}
