import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  moduleFileExtensions: ['vue', 'js', 'ts', 'json'],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest",
    "^[^.]+.vue$": "@vue/vue3-jest",
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
};

export default config;
