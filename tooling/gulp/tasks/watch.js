'use strict';

var gulp = require('gulp'),
	path = require('path'),
	util = require('gulp-util'),
	runSequence = require('run-sequence');

// Watch for changes.
gulp.task('watch:dev', function(){
	gulp.watch("app/**/*.ts").on('change', function(e){
		logChanges(e);
		runSequence('lint_ts', 'transpile_ts', 'postprocess:dev', 'serve:reload');
	});
	gulp.watch("app/**/*.less").on('change', function(e){
		logChanges(e);
		runSequence('lint_less', 'transpile_less', 'serve:reload');
	});
	gulp.watch("app/**/*.jade").on('change', function(e){
		logChanges(e);
		runSequence('lint_jade', 'transpile_jade:dev', 'serve:reload');
	});
});

function logChanges(event) {
	util.log(
		util.colors.green('File ' + event.type + ': ') +
		util.colors.magenta(path.basename(event.path))
	);
}
