'use strict';

var gulp = require('gulp');
var del = require('del');

// Empty the build and temporary compiled directories.
gulp.task('clean:dev', function (done) {
    del([
        global.paths.dev_dist + '/*'
    ]).then(paths => {
        done()
    });
});

// Empty the build and temporary compiled directories.
gulp.task('clean:prod', function (done) {
    del([
        global.paths.prod_dist + '/*'
    ]).then(paths => {
        done()
    });
});

// Remove all of the postprocess created files in the production folder.
gulp.task('clean:prod_postprocess', function (done) {
    del([
        global.paths.prod_dist + '/assets/',
        global.paths.prod_dist + '/components/',
        global.paths.prod_dist + '/services/',
        global.paths.prod_dist + '/app.js',
        global.paths.prod_dist + '/templates.js'
    ]).then(paths => {
        done()
    });
});

gulp.task('clean:ts_to_js', function (done) {
    del([
        global.paths.dev_dist + '/app'
    ]).then(paths => {
        done()
    });
});

// Clean all
gulp.task('clean' , ['clean:prod', 'clean:dev']);
