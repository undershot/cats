'use strict'
const gulp = require('gulp'),
  minifyCss = require('gulp-minify-css'),
  autoprefixer = require('gulp-autoprefixer'),
  uglify = require('gulp-uglify'),
  sass = require('gulp-sass'),
  rename = require('gulp-rename'),
  bs = require("browser-sync").create(),
  babel = require('gulp-babel'),
  webpackStream = require('webpack-stream'),
  webpack = webpackStream.webpack,
  ncp = require('ncp').ncp,
  jshint = require('gulp-jshint'),
  jade = require('gulp-jade');


const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');

let imagesPath = {
    from: __dirname + '/_sources/image/imageFromProd/*',
    to: __dirname + '/_compile/dev/image/'
}

let webpackOptions = {
  entry: './production/js/index.js',

  module: {

    loaders: [{
      test: /\.js$/,
      loader: 'babel?presets[]=es2015'
    }]
  }	
}

let jsPath = {
    from: __dirname + '/_sources/js/common.js',
    to: __dirname + '/_compile/dev/'
}

let libsPath = {
  from: __dirname + '/_extra/libs/',
  to: __dirname + '/_compile/dev/'
}

let scssPath = {
  from: __dirname + '/_sources/scss/style.scss',
  to: __dirname + '/_compile/dev/css'  
}

let jadePath = {
    from: __dirname + '/_sources/jade/index.jade',
    to: __dirname + '/_compile/dev/'
}

let optionForJshint = {
  // these directives can 
  // be found in the official 
  // JSLint documentation. 
  evil: true,
  curly : true,
  eqeqeq : true,
  newcap : true,
  plusplus : false,
  browser : true,
  esnext: true,
  // you can also set global 
  // declarations for all source 
  // files like so: 
  predef: ['$'],
  // both ways will achieve the 
  // same result; predef will be 
  // given priority because it is 
  // promoted by JSLint
}

gulp.task('Server', () => bs.init({server : './production'}) );

// task for change html
gulp.task('jade',function(){
  gulp.src(jadePath.from)
  .pipe(jade({ pretty: true }))
  .pipe(gulp.dest(jadePath.to));

  bs.reload();
});

gulp.task('scss', function () {
  return gulp.src(scssPath.from)
  .pipe(sass().on('error', sass.logError))
  .pipe(rename('style.min.css'))
  .pipe(gulp.dest(scssPath.to));
});

gulp.task('images', () => {
    return gulp.src(imagesPath.from)
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest(imagesPath.to));
});
// gulp.task('sass', function () {
//    	sass('production/css/style.sass')
//     .on('error', sass.logError)
//     .pipe(autoprefixer('last 10 version'))
//     .pipe(rename('style.min.css'))
//     .pipe(gulp.dest('production/css'));
//     bs.reload();
// });

// task for css
// gulp.task('css', function () {
// 	gulp.src('production/css/style.css')
//     .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
//     .pipe(autoprefixer('last 10 version'))
//     .pipe(rename('style.min.css'))
//     .pipe(gulp.dest('production/css/'));
//     bs.reload();
// });

// task for JS 
gulp.task('js', function() {
  gulp.src(jsPath.from)
  .pipe(webpackStream(webpackOptions))
  .pipe(uglify())
  .pipe(rename('bundle.js'))
  .pipe(gulp.dest(jsPath.to));
  
  bs.reload();
});

gulp.task('ecma2015', function() {
   	gulp.src('production/js/controller.js')
    //.pipe(babel({presets: ['es2015']}))
    .pipe(uglify())
    .pipe(rename('controller.min.js'))
    .pipe(gulp.dest('production/js/'));
    bs.reload();
});
 
// build the main source into the min file 
gulp.task('lint', function() {
  return gulp.src('production/js/comp.js')
    .pipe(jshint(optionForJshint))
    .pipe(jshint.reporter('default'));
});

gulp.task('test', function () {
    gulp.task('link');
});
//taks for watch change files
gulp.task('watch', function(){
	//gulp.watch('production/css/style.sass', ['sass']);
	gulp.watch(jadePath.from, ['jade']);
    gulp.watch(jadePath.from + '/sections/', ['jade']);
	//gulp.watch('production/js/common.js', ['js']);
    //gulp.watch('production/js/controller.js', ['ecma2015']);
});

// default task
gulp.task('default', ['jade', 'scss', 'js', 'ecma2015', 'watch', 'Server']);

// Таск для переноса библиотек в готовую сборку
gulp.task('libsCompile', function () {
  ncp(libsPath.from, libsPath.to, function (err) {
    if (err) {
      return console.error(err);
    }
    console.log('done!');
  });
});