'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var csso = require('gulp-csso');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var header = require('gulp-header');

var pkg = require('./package.json');
var banner = ['/**',
  ' * <%= pkg.name %> - <%= pkg.description %>',
  ' * @version v<%= pkg.version %>',
  ' * @link <%= pkg.homepage %>',
  ' */',
  ''].join('\n');

gulp.task('css', function () {
    return gulp.src('./sass/**/*.scss')
        //Compile Sass, make it available in dist
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(header(banner, { pkg : pkg } ))
        .pipe(gulp.dest('./dist'))

        //Compress Css, make it available in dist
        .pipe(csso())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(header(banner, { pkg : pkg } ))
        .pipe(gulp.dest('./dist'));
});

gulp.task('js', function () {
    return gulp.src('./js/**/*.js')
        //Copy original
        .pipe(header(banner, { pkg : pkg } ))
        .pipe(gulp.dest('./dist'))

        //Compress JS, make it available in dist
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(header(banner, { pkg : pkg } ))
        .pipe(gulp.dest('./dist'));
});
