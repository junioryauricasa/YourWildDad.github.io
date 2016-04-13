'use strict';
const gulp = require('gulp'),
    less = require('gulp-less'),
    LessPluginAutoPrefix = require("less-plugin-autoprefix"),
    babel = require('gulp-babel'),
    autoprefix = new LessPluginAutoPrefix({
        browsers: [
            'last 4 versions',
            "ie >= 7"
        ]
    });
gulp.task('Less', () => {
    return gulp.src('./task00/style/*.less')
        .pipe(less({
            plugins: [autoprefix]
        }))
        .pipe(gulp.dest('./task00/style'));
});
gulp.task('babel', () => {
    return gulp.src('./task02/*.es6')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('./task02'));
})
gulp.task('watch', function() {
    gulp.watch('./task00/style/*.less', ['testLess']);
    gulp.watch('./task02/*.es6', ['babel']);
});
gulp.task('dev', ['Less', 'babel', 'watch']);
gulp.task('default', []);
