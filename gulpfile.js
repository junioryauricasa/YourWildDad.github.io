'use strict';
var gulp = require('gulp'),
    less = require('gulp-less'),
    LessPluginAutoPrefix = require("less-plugin-autoprefix"),
    autoprefix = new LessPluginAutoPrefix({
        browsers: [
            'last 4 versions',
            "ie >= 7"
        ]
    });
gulp.task('testLess', function() {
    gulp.src('./task00/style/*.less')
        .pipe(less({plugins: [autoprefix]}))
        .pipe(gulp.dest('./task00/style'));
});
gulp.task('testWatch', function() {
    gulp.watch('./task00/style/*.less', ['testLess']);
});
gulp.task('less', ['testLess', 'testWatch']);
gulp.task('default', []);