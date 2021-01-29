const { execSync } = require('child_process')

module.exports = () => {
    return pkgCommands[hasYarn() ? 'yarn' : hasCnpm() ? 'cnpm' : 'npm']
}

const pkgCommands = {
    yarn: {
        install: 'yarn',
        init: 'yarn init -y',
    },
    cnpm: {
        install: 'cnpm i',
        init: 'cnpm init -y',
    },
    npm: {
        install: 'npm i',
        init: 'npm init -y',
    },
}

function hasYarn() {
    return hasPkg('yarn -v')
}
function hasCnpm() {
    return hasPkg('cnpm -v')
}
function hasPkg(command) {
    try {
        execSync(command, { stdio: 'ignore' })
        return true
    } catch (error) {}
}
