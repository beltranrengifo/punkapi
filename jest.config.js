const path = require('path')

module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  moduleFileExtensions: ['js', 'json', 'vue'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,vue}',
    '!src/main.js',
    '!**/node_modules/**',
    '!src/store/store.js',
    '!src/reports',
  ],
  snapshotSerializers: ['jest-serializer-vue'],
  coverageDirectory: path.resolve(__dirname, 'reports/unit/coverage'),
  verbose: true,
}
