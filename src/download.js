const download = require('download-git-repo')
const ora = require('ora')
const sources = require('./sources')

module.exports = (projectPath) => {
    return new Promise((resolve, reject) => {
        const spinner = ora(`downloading... to ${projectPath}`)
        spinner.start()

        download(sources.shared, projectPath, { clone: false }, (err) => {
            if (err) {
                console.log({ err })
                spinner.fail('failed!!')
                reject(err)
                return
            }
            spinner.succeed('succeed!!!\n' + 'downloaded to ' + projectPath)
            resolve()
        })
    })
}
