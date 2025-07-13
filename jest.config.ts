import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  moduleFileExtensions: ['vue', 'js', 'ts', 'json'],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest",
    "^[^.]+.vue$": "@vue/vue3-jest",
  }
};

export default config;
