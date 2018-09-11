module.exports = {
  setupFiles: ['<rootDir>/spec/setup.js'],
  'verbose': true,
  'bail': true,
  'transform': {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  'moduleNameMapper': {
    "\\.css$": "identity-obj-proxy"
  }
}