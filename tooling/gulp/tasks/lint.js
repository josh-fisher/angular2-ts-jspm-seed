'use strict';

var gulp = require('gulp'),
    cache = require('gulp-cached'),
    tslint = require('gulp-tslint'),
    csslint = require('gulp-csslint'),
    less = require('gulp-less'),
    sourcemaps = require('gulp-sourcemaps'),
    lessReporter = require('gulp-csslint-less-reporter'),
    jadeLint = require('gulp-jadelint');

// Lint JS.
gulp.task('lint_ts', function () {
    return gulp.src(global.paths.ts)
        .pipe(cache('lint_ts'))
        .pipe(tslint())
        .pipe(tslint.report("verbose"));
});

// Lint LESS.
gulp.task('lint_less', function () {
    return gulp.src(global.paths.less)
        .pipe(cache('lint_less'))
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(csslint({
            'adjoining-classes': false
        }))
        .pipe(lessReporter())
        .on('error', function (err) {

            // decide whether to throw the error
            var shouldThrow = false;
            if (shouldThrow) {
                console.log(err);
                throw err;
            }
        })
});

// Lint Jade.
gulp.task('lint_jade', function () {
    return gulp.src(global.paths.jade)
        .pipe(cache('lint_jade'))
        .pipe(jadeLint());
});

// Lint all the things!
gulp.task('lint', ['lint_ts', 'lint_less', 'lint_jade']);
