'use strict';

var gulp = require('gulp'),
    path = require('path'),
    util = require('gulp-util');

// Watch for changes.
gulp.task('watch:realtime', function(){
    gulp.watch("app/**/*.*", ['build:realtime']).on('change', logChanges);
    gulp.watch(global.paths.dev_dist + '/**/*.*', ['serve:reload']).on('change', logChanges);
});

// Watch for changes.
gulp.task('watch:dev', function(){
    gulp.watch("app/**/*.ts", ['lint_ts', 'transpile_ts']).on('change', logChanges);
    gulp.watch("app/**/*.less", ['lint_less', 'transpile_less']).on('change', logChanges);
    gulp.watch("app/**/*.jade", ['lint_jade', 'transpile_jade:dev']).on('change', logChanges);
    gulp.watch(global.paths.dev_dist + '/**/*.*', ['serve:reload']).on('change', logChanges);
});

function logChanges(event) {
    util.log(
        util.colors.green('File ' + event.type + ': ') +
        util.colors.magenta(path.basename(event.path))
    );
}
