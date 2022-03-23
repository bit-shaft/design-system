import type { Config } from '@jest/types'

export default async (): Promise<Config.InitialOptions> => {
	return {
		setupFilesAfterEnv: ['<rootDir>/.jest/jest.setup.ts'],
		testPathIgnorePatterns: ['<rootDir>/node_modules/'],
		snapshotSerializers: ['jest-stitches'],
		moduleNameMapper: {
			'^@/(.*)$': '<rootDir>/src/$1',
		},
		testEnvironment: 'jsdom',
	}
}
