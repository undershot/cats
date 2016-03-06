'use strict'

const gulp = require('gulp'),
	minifyCss = require('gulp-minify-css'),
	autoprefixer = require('gulp-autoprefixer'),
	uglify = require('gulp-uglify'),
	sass = require('gulp-ruby-sass'),
	livereload = require('gulp-livereload'),
	rename = require('gulp-rename'),
    bs = require("browser-sync").create(),
    babel = require('gulp-babel'),
    jslint = require('gulp-jslint');

gulp.task('Server', function(){
	bs.init({
	    server : './'
	})
	bs.watch('production/*.html').on('change', bs.reload);
	bs.watch('production/css/style.min.css').on('change', bs.reload);
	bs.watch('production/js/*.js').on('change', bs.reload);
});

// task for change html
gulp.task('html',function(){
	gulp.src('production/index.html');
});

gulp.task('sass', function () {
  return sass('production/css/style.sass')
    .on('error', sass.logError)
    .pipe(autoprefixer('last 10 version'))
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('production/css'));
});

// task for css
gulp.task('css', function () {
	gulp.src('production/css/style.css')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer('last 10 version'))
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('production/css/'));
});

// task for JS 
gulp.task('js', function() {
  return gulp.src('production/js/common.js')
    .pipe(uglify())
    .pipe(rename('common.min.js'))
    .pipe(gulp.dest('production/js/'));
});

gulp.task('ecma2015', function() {
  return gulp.src('production/js/controller.js')
    //.pipe(babel({presets: ['es2015']}))
    .pipe(uglify())
    .pipe(rename('controller.min.js'))
    .pipe(gulp.dest('production/js/'));
});
 
// build the main source into the min file 
gulp.task('lintjs', function () {
    return gulp.src(['production/js/common.js'])
 
        // pass your directives 
        // as an object 
        .pipe(jslint({
            // these directives can 
            // be found in the official 
            // JSLint documentation. 
            evil: true,
 			curly : true,
 			eqeqeq : true,
 			newcap : true,
 			plusplus : false,
 			browser : true,
 			fragment : true,
 			vars : true,
            // you can also set global 
            // declarations for all source 
            // files like so: 
            global: [],
            predef: ['$'],
            // both ways will achieve the 
            // same result; predef will be 
            // given priority because it is 
            // promoted by JSLint 
 
            // pass in your prefered 
            // reporter like so: 
            reporter: 'default',
            // ^ there's no need to tell gulp-jslint 
            // to use the default reporter. If there is 
            // no reporter specified, gulp-jslint will use 
            // its own. 
 
            // specifiy custom jslint edition 
            // by default, the latest edition will 
            // be used 
            edition: '2014-07-08',
 
            // specify whether or not 
            // to show 'PASS' messages 
            // for built-in reporter 
            errorsOnly: false
        }))
 
        // error handling: 
        // to handle on error, simply 
        // bind yourself to the error event 
        // of the stream, and use the only 
        // argument as the error object 
        // (error instanceof Error) 
        .on('error', function (error) {
            console.error(String(error));
        });
});

// taks for watch change files
gulp.task('watch', function(){
	gulp.watch('production/css/style.sass', ['sass']);
	gulp.watch('production/index.html', ['html']);
	gulp.watch('production/js/common.js', ['js']);
    gulp.watch('production/js/controller.js', ['ecma2015']);
});

// default task
gulp.task('default', ['html', 'sass', 'js', 'ecma2015', 'watch']);