/*
ESLint is used for static code checking, always disable the autofix feature
for auto formatting use Prettier instead.
to define standard code formatting style, use .editor config so the editor can read it.
*/

module.exports = {
    root: true,
    parser: '@babel/eslint-parser',
    parserOptions: {
        sourceType: 'module',
        requireConfigFile: false,
        babelOptions: {
            babelrc: false,
            configFile: false,
            presets: ['@babel/preset-env', '@babel/preset-react'],
        },
    },
    plugins: ['eslint-plugin-react', 'eslint-plugin-react-hooks'],
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        /*
        eslint-config-prettier
        turn off some eslint rules that are unnecessary or might conflict with Prettier
        check the doc here: https://github.com/prettier/eslint-config-prettier for more info
        */
        'prettier',
    ],
    env: {
        browser: true,
        commonjs: true,
        node: true,
        es6: true,
        jest: true,
    },
    overrides: [
        {
            files: ['**/*.{ts,tsx}'],
            parser: '@typescript-eslint/parser',
            plugins: ['@typescript-eslint', 'eslint-plugin-react', 'eslint-plugin-react-hooks'],
            extends: [
                'eslint:recommended',
                'plugin:@typescript-eslint/recommended',
                'plugin:react/recommended',
                'plugin:react-hooks/recommended',
                'prettier',
            ],
        },
    ],
    rules: {
        'no-unused-vars': 'off',
        'react/prop-types': 'off',
    },
}
