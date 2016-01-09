'use strict';

var gulp        = require('gulp'),
    browserSync = require('browser-sync').create(),
    util        = require('util');

global.browserSync = browserSync;

gulp.task('serve:dev', [], function() {
    browserSync.init({
        server: {
            baseDir: "./dist/dev",
            routes: {
                "/jspm_packages": "jspm_packages",
                "/assets": "./app/assets",
                "/config": "."
            }
        }
    });
});

gulp.task('serve:prod', [], function() {
    browserSync.init({
        server: {
            baseDir: "./dist/prod"
        }
    });
});

gulp.task('serve:styleguide', [], function() {
    browserSync.init({
        server: {
            baseDir: "./dist/docs/styleguide"
        }
    });
});

gulp.task('serve:tsdoc', [], function() {
    browserSync.init({
        server: {
            baseDir: "./dist/docs/tsdoc"
        }
    });
});

gulp.task('serve:groc', [], function() {
    browserSync.init({
        server: {
            baseDir: "./dist/docs/groc"
        }
    });
});

gulp.task('serve:reload', function(){
    browserSync.reload();
});

gulp.task('serve', function(){
    browserSync.init({
        server: {
            baseDir: "./dist",
            directory: true
        }
    });
});
