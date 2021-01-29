let answerId = 0

const licenses = {
    MIT: answerId++,
    BSD: answerId++,
    'Apache 2': answerId++,
    GPL: answerId++,
    'Input other license': answerId++,
}

const presets = {
    default: answerId++,
    manually: answerId++,
}

const features = {
    commitizen: answerId++,
    changelog: answerId++,
    eslint: answerId++,
    prettier: answerId++,
    editorConfig: answerId++,
    husky: answerId++,
    lintStaged: answerId++,
}

module.exports = { licenses, presets, features }
