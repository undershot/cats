'use strict'
// все что относиться к самому галпу
const gulp = require('gulp');
const rename = require('gulp-rename');

// все что относиться к html
const jade = require('gulp-jade');

// все что относиться к css
const minifyCss = require('gulp-minify-css');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

// Все что относиться к js
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const webpackStream = require('webpack-stream');
const webpack = webpackStream.webpack;
const jshint = require('gulp-jshint');

// Все что относиться к изображениям
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');

// Браузер синк и модуль для копирования директорий
const bs = require("browser-sync").create();
const ncp = require('ncp').ncp;


let env = 'preview';
if (process.env.NODE_ENV === 'build') {
	env = 'production';
} else {
  // Если это разработка запустить сервер 
  gulp.task('Server', () => bs.init({server : `./_compile/${env}/`}) );
}

let webpackOptions = {
  entry: './_sources/js/index.js',

  module: {

    loaders: [{
      test: /\.js$/,
      loader: 'babel?presets[]=es2015'
    }]
  }	
}

// Конструктор для создания пути для исходных файлов и скомпилированных файлов
class CreatePath {
  constructor (from, to) {
    this.from = __dirname +  from;
    this.to = to === undefined ? __dirname + `/_compile/${env}/` :  __dirname + to;
  }
}

// Пути для всех основных файлов
let jsPath = new CreatePath('/_sources/js/index.js');
let libsPath = new CreatePath('/_extra/libs/');
let scssPath = new CreatePath('/_sources/scss/style.scss');
let jadePath = new CreatePath('/_sources/jade/index.jade');
let imagesPath = new CreatePath('/_sources/image/imageFromProd/*', `/_compile/${env}/images/`);

// опции для синтаксиса js 
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

// task для компиляции jade шаблонов
gulp.task('jade', () => {
  gulp.src(jadePath.from)
  .pipe(jade({ pretty: true }))
  .pipe(gulp.dest(jadePath.to));

  bs.reload();
});

// task для компиляции scss стилей
gulp.task('scss', () => {
  let _files = gulp.src(scssPath.from);

  if (process.env.NODE_ENV !== 'build') {
    _files.pipe(sass().on('error', sass.logError))
    .pipe(rename('style.css'))
    .pipe(gulp.dest(scssPath.to));

    bs.reload();
  } else {
    _files.pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer('last 5 version'))
    .pipe(rename('style.css'))
    .pipe(gulp.dest(scssPath.to));
  }
});

gulp.task('images', () => {
  let _files = gulp.src(imagesPath.from);

  if (process.env.NODE_ENV !== 'build') {  
    _files  
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
    }))
    .pipe(gulp.dest(imagesPath.to));
  } else {
    _files  
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
    }))
    .pipe(gulp.dest(imagesPath.to));	
  }  
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
gulp.task('js', () => {
  let _files = gulp.src(Path.from);

  if (process.env.NODE_ENV !== 'build') { 
    _files.pipe(jshint(optionForJshint))
    .pipe(jshint.reporter('default'))
    .pipe(webpackStream(webpackOptions))
  //.pipe(uglify())
    .pipe(rename('bundle.js'))
    .pipe(gulp.dest(jsPath.to));
  
    bs.reload();
  } else {
    _files.pipe(jshint(optionForJshint))
    .pipe(jshint.reporter('default'))
    .pipe(webpackStream(webpackOptions))
    .pipe(uglify())
    .pipe(rename('bundle.js'))
    .pipe(gulp.dest(jsPath.to));

  }  
});

// gulp.task('ecma2015', () => {
//    	gulp.src('production/js/controller.js')
//     //.pipe(babel({presets: ['es2015']}))
//     .pipe(uglify())
//     .pipe(rename('controller.min.js'))
//     .pipe(gulp.dest('production/js/'));
//     bs.reload();
// });
 
// build the main source into the min file 
// gulp.task('lint', () => {
//   return gulp.src('production/js/comp.js')
//     .pipe(jshint(optionForJshint))
//     .pipe(jshint.reporter('default'))
// });

// gulp.task('test', () => {
//     gulp.task('link');
// });
//taks for watch change files
gulp.task('watch', () => {
	//gulp.watch('production/css/style.sass', ['sass']);
	gulp.watch(jadePath.from, ['jade']);
    gulp.watch(__dirname + '/_sources/jade/' + '/sections/*.jade', ['jade']);
	//gulp.watch('production/js/common.js', ['js']);
    //gulp.watch('production/js/controller.js', ['ecma2015']);
});

// default task
gulp.task('default', ['jade', 'scss', 'js', 'ecma2015', 'watch' ]);

// Таск для переноса библиотек в готовую сборку
gulp.task('libsCompile', () => {
  ncp(libsPath.from, libsPath.to, function (err) {
    if (err) {
      return console.error(err);
    }
    console.log('done!');
  });
});