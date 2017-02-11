var gulp = require('gulp');
var jasmineBrowser = require('gulp-jasmine-browser');
var jasmine = require('gulp-jasmine');
var watch = require('gulp-watch');

gulp.task('jasmine', function() {
  var filesForTest = ['__tests__/**/*.test.js']; //'src/**/*.js', 
  return gulp.src(filesForTest)
    .pipe(watch(filesForTest))
    .pipe(jasmine({verbose:true}))
    .pipe(jasmineBrowser.specRunner())
    .pipe(jasmineBrowser.server({port: 8888}));
});

gulp.task('default', ['jasmine']);