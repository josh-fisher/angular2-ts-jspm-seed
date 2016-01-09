'use strict';

var gulp = require('gulp'),
    requireDir = require('require-dir'),
    runSequence = require('run-sequence'),
    path = require('path');

// Specify paths & globbing patterns for tasks.
global.paths = {
    // Sources folder.
    'src': './app',
    // ES6 sources.
    'ts': './app/**/*.ts',
    // Less sources.
    'less': './app//**/*.less',
    // Jade sources.
    'jade': './app/**/*.jade',
    // Image sources.
    'img': './app/assets/images/**/*',
    // Font Sources
    'fonts': './app/assets/fonts/**/*',
    // Distribution folder.
    'dist': './dist',
    'dev_dist': './dist/dev',
    'prod_dist': './dist/prod',
    'root': path.resolve(__dirname)
};

// Require all tasks in the 'gulp' folder.
requireDir('./tooling/gulp/tasks', { recurse: false });

// Default task
gulp.task('default', ['build', 'test', 'serve']);

gulp.task('dev', function(callback){
    runSequence('build:dev', 'serve:dev', 'watch:dev', callback)
});

gulp.task('prod', function(callback){
    runSequence('build:prod', 'serve:prod', callback)
});

gulp.task('build:dev', function(callback){
    runSequence('clean:dev', 'lint', 'transpile', 'postprocess:dev', callback)
});

gulp.task('build:prod', function(callback){
    runSequence('build:dev', 'clean:prod', 'lint', 'postprocess:prod', 'bundle', 'bundle:dependencies', 'bundle:sfx', 'clean:prod_postprocess', callback);
});

gulp.task('build', function(callback){
    runSequence('clean', 'build:dev', 'build:prod', 'build:docs', callback);
});
