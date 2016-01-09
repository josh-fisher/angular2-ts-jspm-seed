'use strict';

var gulp = require('gulp'),
    cache = require('gulp-cached'),
    fontmin = require('gulp-fontmin'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    htmlmin = require('gulp-minify-html');

// Minify Images
gulp.task('minify_images', function () {
    return gulp.src(global.paths.img)
        .pipe(cache('minify_images'))
        .pipe(imagemin({
            progressive: true,
            use: [pngquant()]
        }))
        .pipe(gulp.dest(global.paths.src + '/assets/images/'))
});

// Minify Fonts
gulp.task('minify_fonts', function () {
    return gulp.src(global.paths.fonts)
        .pipe(cache('minify_fonts'))
        .pipe(fontmin())
        .pipe(gulp.dest(global.paths.src + '/assets/fonts/'))
});

// Minify Html

gulp.task('minify_html', function () {
    return gulp.src(global.paths.dev_dist + '/**/*.html')
        .pipe(cache('minify_html'))
        .pipe(htmlmin({
            empty: true
        }))
        .pipe(gulp.dest(global.paths.dev_dist))
});
