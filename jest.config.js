module.exports = {
  testMatch: ['**/+(*.)+(spec|test).+(ts|js)?(x)'],
  transform: {'^.+\\.(ts|js|html)$': 'ts-jest'},
  moduleFileExtensions: ['ts', 'js', 'scss'],
  coverageReporters: [],
  coverageDirectory: 'src'
};