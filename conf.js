exports.config = {
  framework: 'jasmine',
  specs: ['specs/add-to-cart.spec.js'],
  capabilities: {
      'browserName': 'chrome'
  },
  directConnect: true
};