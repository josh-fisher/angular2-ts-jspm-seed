'use strict';

var gulp = require('gulp'),
    cache = require('gulp-cached'),
    fontmin = require('gulp-fontmin'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant');

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
