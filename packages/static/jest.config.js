const base = require('../../configs/base.jest')

module.exports = {
  ...base,
  moduleNameMapper: {
    '\\.(css|scss)$': '../../configs/styleMock.js'
  },
  name: 'static',
  displayName: 'static'
}
