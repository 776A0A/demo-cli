module.exports = {
    scripts: {
        lint: 'eslint --ext .js,.jsx,.vue src/',
    },
    devDependencies: {
        'babel-eslint': '^10.1.0',
        eslint: '^7.20.0',
        'eslint-plugin-vue': '^7.6.0',
        husky: '^5.0.9',
        'lint-staged': '^10.5.4',
    },
    husky: {
        hooks: {
            'pre-commit': 'lint-staged',
        },
    },
    'lint-staged': {
        'src/**/*.{js,jsx,vue}': 'eslint --fix',
    },
}
