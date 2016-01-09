'use strict';

var gulp        = require('gulp'),
    path        = require("path"),
    Builder     = require('systemjs-builder'),
    replace     = require('gulp-replace');

var builder = new Builder('./' , 'jspm.config.js');
    builder.config({
        separateCSS: false
    });

gulp.task('bundle:dependencies', function(){
    var outputFile = global.paths.prod_dist + '/ng2Seed-dependencies.min.js';
    var options = {
        minify: true,
        sourceMaps: true
    };

    builder.bundle(global.paths.dev_dist + '/**/* - [' + global.paths.dev_dist  + '/**/*]', outputFile, options)
});

gulp.task('bundle', function(){
    var outputFile = global.paths.prod_dist + '/ng2Seed.min.js';
    var options = {
        minify: true,
        sourceMaps: true,
        runtime: false,
        mangle: true
    };

    builder.bundle(global.paths.dev_dist + '/boot', outputFile, options)
        .then(function() {
            //Remove dist/dev/ path from output file
            //TODO: figure out how to properly set up the builder paths so that this is not necessary.
            gulp.src(global.paths.prod_dist + "/ng2Seed.min.js")
                .pipe(replace('dist/dev/', ''))
                .pipe(gulp.dest(global.paths.prod_dist))
        });
});

gulp.task('bundle:sfx', function(){
    var outputFile = global.paths.prod_dist + '/ng2Seed.sfx.min.js';
    var options = {
        minify: true,
        sourceMaps: true,
        runtime: false,
        mangle: true
        //sfxformat: '' //cjs, amd, es6
    };

    builder.buildStatic(global.paths.dev_dist + '/boot', outputFile, options)
        .then(function() {
            //Remove dist/dev/ path from output file
            //TODO: figure out how to properly set up the builder paths so that this is not necessary.
            gulp.src(global.paths.prod_dist + "/ng2Seed.sfx.min.js")
                .pipe(replace('dist/dev/', ''))
                .pipe(gulp.dest(global.paths.prod_dist))
        });
});
