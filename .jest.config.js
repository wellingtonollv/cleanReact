module.export = {
    roots:['<rootDir>/src'],
    collectiveCoverageFrom: [
        '<rootDir>/src/**/*.{ts,tsx}',
    ],
    coverageDirectory: 'coverage',
    testEnvironment: 'node',
    transform: {
        '.+\\.ts$': 'ts-jest',
    }
}