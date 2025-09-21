const config = {
  preset: 'ts-jest',
  moduleFileExtensions: ['vue', 'js', 'ts', 'json'],
  testEnvironment: 'jsdom',
  // This is an alternative to the moduleNameMapper in jest.config.js
  // testEnvironmentOptions: {
  //   customExportConditions: ["node", "node-addons"]
  // },
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
    '^[^.]+.vue$': '@vue/vue3-jest',
  },
  // moduleNameMapper allows you to map module names to specific paths or files.
  // This is useful for resolving Vue test utils or other libraries that may not be directly compatible
  // with Jest's module resolution.
  // It can also be used to mock or alias modules.
  // For example, if you have a module that needs to be mocked or replaced with a different implementation,
  // you can specify that here.
  // This is particularly useful for Vue components or libraries that have specific requirements for testing.
  // If you are using Vue Test Utils, you might need to map the module name to the Vue Test Utils package.
  // This ensures that Jest can correctly resolve and use the Vue Test Utils library during testing.
  moduleNameMapper: {
    '^@vue/test-utils': '<rootDir>/node_modules/@vue/test-utils/dist/vue-test-utils.cjs.js',
  },
  globals: {
    'ts-jest': {
      babelConfig: true, // Enables Babel processing, ts-jest will look for a Babel config file
      // Or provide inline Babel options:
      // babelConfig: {
      //   presets: [['@babel/preset-env', { targets: { node: 'current' } }], '@babel/preset-typescript'],
      //   plugins: ['your-babel-plugin'],
      // },
    },
  },  
}

module.exports = config
