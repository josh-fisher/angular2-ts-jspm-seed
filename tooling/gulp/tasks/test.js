'use strict';

var gulp = require('gulp'),
    karmaServer = require('karma').Server,
    angularProtractor = require('gulp-angular-protractor'),
    shell = require('gulp-shell');

// Test the dev packages
gulp.task('test:dev', function (done) {
    new karmaServer({
        configFile: global.paths.root + '/test/conf/karma.dev.conf.js'
    }, done).start();
});

gulp.task('test:prod', function() {
    return gulp.src(['../../tests/e2e/**/*.e2e.js'])
        .pipe(angularProtractor({
            'configFile': global.paths.root + '/test/conf/protractor.prod.conf.js',
            'debug': false,
            'autoStartStopServer': true
        }))
        .on('error', function(e) {
            console.log(e);
        })
});

gulp.task('test:css', shell.task(['gulp test'], {cwd: './node_modules/backstopjs/'}));
gulp.task('test:css_generate_ref', shell.task(['gulp reference'], {cwd: './node_modules/backstopjs/'}));
gulp.task('test', ['test:dev', 'test:prod', 'test:css']);
