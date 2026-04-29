import antfu from '@antfu/eslint-config'

export default antfu({
    react: true,
    formatters: {
        css: true,
    },
    stylistic: {
        indent: 4,
    },
    rules: {
        'ts/consistent-type-definitions': ['off'],
        'curly': 'error',
        'style/brace-style': ['error', 'stroustrup'],
        'no-console': 'off',
    },
})
