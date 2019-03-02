const base = require('./base.jest.js')

module.exports = {
  ...base,
  projects: ['<rootDir>', '<rootDir>/packages/*/jest.config.js'],
  rootDir: '../',
  coverageDirectory: '<rootDir>/coverage'
}
