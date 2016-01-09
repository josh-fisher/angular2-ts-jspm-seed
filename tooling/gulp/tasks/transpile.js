'use strict';

var gulp = require('gulp'),
    cache = require('gulp-cached'),
    tslint = require('gulp-tslint'),
    typescript = require('gulp-typescript'),
    less = require('gulp-less'),
    sourcemaps = require('gulp-sourcemaps'),
    jade = require('gulp-jade'),
    tsProject = typescript.createProject('tsconfig.json');

// Transpile Less
gulp.task('transpile_less', function () {
    return gulp.src(global.paths.less)
        .pipe(cache('transpile_less'))
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(sourcemaps.write('/'))
        .pipe(gulp.dest(global.paths.dev_dist));
});

// Transpile Jade
gulp.task('transpile_jade:dev', function () {
    return gulp.src(global.paths.jade)
        .pipe(cache('transpile_jade:dev'))
        .pipe(jade())
        .pipe(gulp.dest(global.paths.dev_dist));
});
gulp.task('transpile_jade:prod', function () {
    return gulp.src(global.paths.src + "/index.jade")
        .pipe(cache('transpile_jade:prod'))
        .pipe(jade())
        .pipe(gulp.dest(global.paths.prod_dist));
});

// Transpile TS
gulp.task('transpile_ts', function(){
    return gulp.src(global.paths.ts)
        .pipe(cache('transpile_ts'))
        .pipe(sourcemaps.init())
        .pipe(tslint())
        .pipe(tslint.report('prose', {emitError: false}))
        .pipe(typescript(tsProject))
        .pipe(sourcemaps.write('/', {includeContent: false, sourceRoot: '/app/src'}))
        .pipe(gulp.dest(global.paths.dev_dist));
});

// Transpile all the things!
gulp.task('transpile', ['transpile_jade:dev', 'transpile_less', 'transpile_ts']);
