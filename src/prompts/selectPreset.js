const inquirer = require('inquirer')
const answers = require('./answers')

const selectPreset = () => {
    return inquirer.prompt({
        type: 'list',
        name: 'preset',
        choices: [
            {
                name: 'default, all features will use.',
                value: answers.presets.default,
                checked: true,
            },
            { name: 'Manually select', value: answers.presets.manually },
        ],
    })
}

module.exports = selectPreset
