const prompts = require('../prompts')

async function run(allAnswers) {
    {
        const answers = await promptAndSaveAnswers('start')
        // 当选择输入license时
        if (isInputLicense(answers.license)) {
            await promptAndSaveAnswers('inputLicense')
        }
    }

    {
        const answers = await promptAndSaveAnswers('selectPreset')
        // 当手动选择features时
        if (isManuallySelectPreset(answers.preset)) {
            await promptAndSaveAnswers('selectFeatures')
        }
    }

    async function promptAndSaveAnswers(promptType) {
        const answers = await prompts[promptType]()
        Object.assign(allAnswers, answers)
        return answers
    }
}

module.exports = run

function isInputLicense(license) {
    return license === prompts.answers.licenses['Input other license']
}

function isManuallySelectPreset(preset) {
    return preset === prompts.answers.presets.manually
}
