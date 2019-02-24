module.exports = {
    rootDir: '../../',
    testURL: 'http://localhost/',
    clearMocks: true,
    setupFiles: [
        '<rootDir>/config/jest/jest.setup.js',
    ],
    moduleNameMapper: {
        '\\.(css|scss|jpg|png|gif)$': '<rootDir>/config/jest/jest.mock.js',
    },
    modulePaths: [
        '<rootDir>/src',
        '<rootDir>/',
    ],
    collectCoverageFrom: [
        '<rootDir>/src/**/*.js',
        '!<rootDir>/src/pages/**/index.js',
        '!<rootDir>/src/pages/_app.js',
        '!<rootDir>/src/pages/_document.js',
        '!<rootDir>/src/server/index.js',
        '!<rootDir>/src/server/routes.js',
        '!<rootDir>/src/server/server.js',
    ],
    testPathIgnorePatterns: [
        '<rootDir>/build/',
    ],
    coveragePathIgnorePatterns: [
        '<rootDir>/build/',
    ],
    coverageThreshold: {
        global: {
            statements: 80,
            branches: 80,
            functions: 80,
            lines: 80,
        },
    },
};
