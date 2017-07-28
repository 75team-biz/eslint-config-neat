module.exports = {
  'extends': 'standard',
  'rules': {
    'getter-return': 'error',
    'no-await-in-loop': 'error',
    'no-console': 'warn',
    'no-empty': 'error',
    'no-template-curly-in-string': 'warn',
    'array-callback-return': 'warn',
    'class-methods-use-this': 'warn',
    'complexity': [
      'error',
      20
    ],
    'default-case': 'warn',
    'dot-notation': 'error',
    'eqeqeq': [
      'error',
      'smart'
    ],
    'guard-for-in': 'warn',
    'no-alert': 'warn',
    'no-case-declarations': 'error',
    'no-else-return': 'warn',
    'no-empty-function': 'warn',
    'no-implicit-coercion': 'warn',
    'no-implicit-globals': 'warn',
    'no-loop-func': 'warn',
    'no-magic-numbers': [
      'warn',
      {
        'ignore': [
          -1,
          0,
          1,
          2,
          200,
          401,
          403,
          404,
          500
        ],
        'ignoreArrayIndexes': true
      }
    ],
    'no-param-reassign': 'warn',
    'no-script-url': 'error',
    'no-unused-expressions': 'warn',
    'no-useless-concat': 'warn',
    'no-useless-return': 'error',
    'require-await': 'warn',
    'no-undefined': 'error',
    'array-bracket-newline': [
      'error',
      {
        'multiline': true
      }
    ],
    'max-depth': [
      'error',
      5
    ],
    'max-len': 'warn',
    'max-lines': [
      'error',
      1000
    ],
    'max-nested-callbacks': [
      'error',
      5
    ],
    'max-params': [
      'error',
      4
    ],
    'max-statements': [
      'error',
      100
    ],
    'multiline-ternary': [
      'warn',
      'always-multiline'
    ],
    'no-lonely-if': 'error',
    'no-nested-ternary': 'error',
    'nonblock-statement-body-position': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    'prefer-destructuring': 'warn',
    'prefer-rest-params': 'error',
    'prefer-template': 'error'
  }
}
