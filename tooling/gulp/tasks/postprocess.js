'use strict';

var gulp = require('gulp'),
    cache = require('gulp-cached'),
    autoprefixer = require('gulp-autoprefixer'),
    inline_base64 = require('gulp-inline-base64'),
    embedTemplates = require('gulp-angular-embed-templates'),
    preprocess = require('gulp-preprocess');

// Add browser prefixes to css.
gulp.task('postprocess_autoprefix',function(){
    return gulp.src(global.paths.dev_dist + '/**/*.css')
        .pipe(cache('postprocess_autoprefix'))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest(global.paths.dev_dist))
});


// Minify and Inline images into css
gulp.task('postprocess_images_and_fonts',['minify_fonts', 'minify_images'], function(){
    return gulp.src(global.paths.dev_dist + '/**/*.css')
        .pipe(cache('postprocess_image_and_fonts'))
        .pipe(inline_base64({
            baseDir: global.paths.root + '/app',
            debug: true
        }))
        .pipe(gulp.dest(global.paths.dev_dist))
});


gulp.task('postprocess_html:dev', function() {
    gulp.src(global.paths.dev_dist + '/index.html')
        .pipe(preprocess({context: { DEV: true, PROD: false}}))
        .pipe(gulp.dest(global.paths.dev_dist))
});

gulp.task('postprocess_html:prod', ['transpile_jade:prod'], function() {
    gulp.src(global.paths.prod_dist + '/index.html')
        .pipe(preprocess({context: { DEV: false, PROD: true}}))
        .pipe(gulp.dest(global.paths.prod_dist))
});

gulp.task('embedtemplates',function() {
    return gulp.src(global.paths.dev_dist + "/**/*.js")
        .pipe(embedTemplates({
            minimize: {
                empty: true
            },
            useMinimizer: false
        }))
        .pipe(gulp.dest(global.paths.dev_dist))
});


// PostProcess all the things!
gulp.task('postprocess:prod', ['postprocess_autoprefix', 'postprocess_images_and_fonts', 'minify_html', 'postprocess_html:prod']);
gulp.task('postprocess:dev', ['embedtemplates', 'postprocess_html:dev']);
