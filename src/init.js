#!/usr/bin/env node

const commander = require('commander')
const path = require('path')
const pkg = require('../package.json')
const download = require('./download')
const downloadDeps = require('./deps')
const runPrompts = require('./runPrompts')
const generator = require('./generator')

commander
    .version(pkg.version, '-v, --version')
    .command('init <name>')
    .description('initial a project')
    .option('-h, --help', 'init project-name')
    .action(startPrompt)
    .parse(process.argv)

async function startPrompt(projectName) {
    const answers = {}

    await runPrompts(answers)

    const projectPath = path.join(process.cwd(), projectName)

    const template =  await download(projectPath) // 下载基础模版
    generator(answers) // 根据答案生成配置
    downloadDeps(projectPath) // 根据配置安装依赖
}
