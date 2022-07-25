module.exports = {
    root: true,
    env: {
        es6: true,
        node: true,
    },
    extends: [
        "eslint:recommended",
    ],
    rules: {
        "quotes": ["off"],
        "indent": ["off"],
        "linebreak-style": 0,
    },
    parserOptions: {
        "ecmaVersion": 8,
    },
};
