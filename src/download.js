const download = require('download-git-repo')
const ora = require('ora')
const sources = require('./sources')
const fs = require('fs')
const { execSync, spawn } = require('child_process')

module.exports = (projectPath) => {
    return new Promise((resolve, reject) => {
        const spinner = ora(`downloading... to ${projectPath}\n`)
        spinner.start()

        const pkg = require('./templates/test/package.json')

        console.log(pkg)

        // download(sources.shared, projectPath, { clone: false }, (err) => {
        //     if (err) {
        //         console.log({ err })
        //         spinner.fail('failed!!')
        //         reject(err)
        //         return
        //     }
        //     spinner.succeed('succeed!!!\n' + 'downloaded to ' + projectPath)
        //     resolve()
        // })
    })
}
