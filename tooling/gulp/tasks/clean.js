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

// Clean all
gulp.task('clean' , ['clean:prod', 'clean:dev']);
