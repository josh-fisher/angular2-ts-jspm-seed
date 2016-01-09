// An example configuration file
exports.config = {
    baseUrl: 'http://localhost:3000',

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome'
    },

    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    specs: ['../../test/e2e/**/*.js'],

    onPrepare: function() {
        browser.ignoreSynchronization = true;

        //var jasmine = require('jasmine');
        var jasmineReporters = require('jasmine-reporters');
        var junitReporter = new jasmineReporters.JUnitXmlReporter({
            savePath: './dist/test_results/e2e/',
            consolidateAll: true
        });
        jasmine.getEnv().addReporter(junitReporter);
    },

    allScriptsTimeout: 110000,
    getPageTimeout: 100000,
    framework: 'jasmine',
    jasmineNodeOpts: {
        showTiming: true,
        isVerbose: false,
        showColors: true,
        includeStackTrace: false,
        defaultTimeoutInterval: 400000
    },
    directConnect: true,
    useAllAngular2AppRoots: true
};
