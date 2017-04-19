// grab our gulp packages
var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var cssnext = require("cssnext");
var rename = require("gulp-rename");
var cssnano = require('gulp-cssnano');


gulp.task('sass', function () {
  return gulp.src('./src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src'))
});

gulp.task('css', ['sass'], function () {
  var processors = [
    cssnext
  ];
  return gulp.src(['./src/**/*.css', '!./src/vendors/**/*', '!./src/**/*.min.css'])
    .pipe(postcss(processors))
    .pipe(gulp.dest('./src'))
});

gulp.task('css-nano', ['css'], function () {
  return gulp.src(['./src/**/*.css', '!./src/vendors/**/*', '!./src/**/*.min.css'])
    .pipe(rename({
      extname: ".min.css"
    }))
    .pipe(cssnano())
    .pipe(gulp.dest('./src'))
});

gulp.task('sass:watch', function () {
  gulp.watch('./**/*.scss', ['css'])
});

gulp.task('default', ['sass:watch', 'css']);
