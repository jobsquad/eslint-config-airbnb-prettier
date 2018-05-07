module.exports = {
  extends: ['airbnb-base'],

  // Globals for jest
  globals: {
    afterEach: false,
    beforeEach: false,
    describe: false,
    expect: false,
    it: false,
    jest: false
  },

  rules: {
    'arrow-parens': 'off', // conflicts with prettier
    'function-paren-newline': 'off', // conflicts with prettier
    'comma-dangle': ['error', 'never'], // conflicts with prettier
    'max-len': ['error', 120], // to match prettier settings
    'object-curly-spacing': ['error', 'never'], // to match prettier settings
    'object-curly-newline': 'off', // conflicts with prettier
    semi: ['error', 'never'] // to match prettier settings
  }
}
