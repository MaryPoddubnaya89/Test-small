var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var less = require('gulp-less');
var minify = require('gulp-minify');
var cleancss = require('gulp-clean-css');

var rename = require('gulp-rename');
var uglify = require('gulp-uglify');


var minification = {
    compatibility: 'ie9',
    advanced: true,
    restructuring: false,
    aggressiveMerging: false
};

gulp.task('less', function() {
    gulp.src('dev/less/main.less')
        .pipe(less())
        .pipe(postcss([ autoprefixer({ browsers: ['last 2 version', 'safari 5', 'ie 9'] }) ]))
        .pipe(cleancss(minification))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('src'));
});

gulp.task('watch', function() {
    gulp.watch('dev/less/**/*.less', ['less']);
    gulp.watch('dev/js/*.js', ['compress-js']);
});

gulp.task('compress-js', function() {
    gulp.src('dev/js/*.js')
        .pipe(minify({noSource: true}))
        .pipe(gulp.dest('src/js'))
});

gulp.task('default', ['less', 'compress-js', 'watch' ], function() {
});
var minification = {
    compatibility: 'ie9',
    advanced: true,
    restructuring: false,
    aggressiveMerging: false
};

gulp.task('less', function() {
    gulp.src('dev/less/main.less')
        .pipe(less())
        .pipe(postcss([ autoprefixer({ browsers: ['last 2 version', 'safari 5', 'ie 9'] }) ]))
        .pipe(cleancss(minification))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('src'));
});

gulp.task('watch', function() {
    gulp.watch('dev/less/**/*.less', ['less']);
    gulp.watch('dev/js/*.js', ['compress-js']);
});

gulp.task('compress-js', function() {
    gulp.src('dev/js/*.js')
        .pipe(minify({noSource: true}))
        .pipe(gulp.dest('src/js'))
});

gulp.task('default', ['less', 'compress-js', 'watch' ], function() {
});