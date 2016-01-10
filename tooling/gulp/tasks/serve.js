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
        },
        ui: {
            port: 3100,
            weinre: {
                port: 3101
            }
        }
    });
});

gulp.task('serve:prod', [], function() {
    browserSync.init({
        server: {
            baseDir: "./dist/prod"
        },
        ui: {
            port: 3100,
            weinre: {
                port: 3101
            }
        }
    });
});

gulp.task('serve:styleguide', [], function() {
    browserSync.init({
        server: {
            baseDir: "./dist/docs/styleguide"
        },
        ui: {
            port: 3100,
            weinre: {
                port: 3101
            }
        }
    });
});

gulp.task('serve:tsdoc', [], function() {
    browserSync.init({
        server: {
            baseDir: "./dist/docs/tsdoc"
        },
        ui: {
            port: 3100,
            weinre: {
                port: 3101
            }
        }
    });
});

gulp.task('serve:groc', [], function() {
    browserSync.init({
        server: {
            baseDir: "./dist/docs/groc"
        },
        ui: {
            port: 3100,
            weinre: {
                port: 3101
            }
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
        },
        ui: {
            port: 3100,
            weinre: {
                port: 3101
            }
        }
    });
});
