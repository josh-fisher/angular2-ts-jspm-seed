var gulp = require('gulp');
var styleguide = require('sc5-styleguide');
var less = require('gulp-less');
var tsdoc = require("gulp-typedoc");
var groc = require("gulp-groc");

var styleguideOutputPath = 'dist/docs/styleguide/';
var tsdocOutputPath = 'dist/docs/tsdoc';
var grocOutputPath = 'dist/docs/groc';

gulp.task('styleguide:generate', function() {
    return gulp.src(global.paths.src + '/**/*.less')
        .pipe(styleguide.generate({
            title: 'ng2 Dock Living Styleguide',
            server: false,
            rootPath: styleguideOutputPath,
            overviewPath: 'README.md'
        }))
        .pipe(gulp.dest(styleguideOutputPath));
});

gulp.task('styleguide:applystyles', function() {
    return gulp.src(global.paths.src + '/**/*.less')
        .pipe(less({
            errLogToConsole: true
        }))
        .pipe(styleguide.applyStyles())
        .pipe(gulp.dest(styleguideOutputPath));
});

gulp.task('styleguide', ['styleguide:generate', 'styleguide:applystyles'])

gulp.task('tsdoc', function() {
    return gulp.src(global.paths.ts)
        .pipe(tsdoc({
            // TypeScript options (see typescript docs)
            "target": "es5",
            "module": "commonjs",
            "moduleResolution": "node",
            "emitDecoratorMetadata": true,
            "experimentalDecorators": true,
            "noImplicitAny": true,
            "suppressImplicitAnyIndexErrors": true,
            "isolatedModules": true,
            "excludeExternals": true,

            // Output options (see typedoc docs)
            out: tsdocOutputPath,
            json: tsdocOutputPath + "/tsdoc.json",

            // TypeDoc options (see typedoc docs)
            name: "my-project",
            ignoreCompilerErrors: true,
            version: true
        }))
});

gulp.task('groc', ['build:dev'], function () {
    var files = [
        global.paths.root + '/README.md',
        global.paths.src + '/**/*.ts',
        global.paths.src + '/**/*.jade',
        global.paths.src + '/**/*.less'
    ];
    return gulp
        .src(files)
        .pipe(groc({
            out: grocOutputPath
        }));
});

gulp.task('build:docs', ['styleguide', 'esdoc', 'groc']);
