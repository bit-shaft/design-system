module.exports = {
  setupFilesAfterEnv: ['<rootDir>/.jest/jest.setup.ts'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  snapshotSerializers: ['jest-stitches'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testEnvironment: 'jsdom',
};