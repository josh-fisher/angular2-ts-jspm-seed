// Karma configuration

module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '../../',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: [
            'jspm',
            'jasmine'
        ],

        // configuration for karma-jspm
        jspm: {
            config: 'jspm.config.js',
            loadFiles: ['dist/dev/**/*.spec.js'],
            serveFiles: ['dist/dev/**/!(*spec).js', 'dist/dev/**/*.css']
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['dots', 'html'],

        htmlReporter: {
            outputDir: './dist/test_results/unit/',
            reportName: Date.now()
        },

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing test whenever any file changes
        autoWatch: false,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: [
            'Chrome'
        ],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the test and exits
        singleRun: true
    });
};
