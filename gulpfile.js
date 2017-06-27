'use strict'

// все что относиться к самому галпу
const gulp = require('gulp');
const rename = require('gulp-rename');

// все что относиться к html
const pug = require('gulp-jade');

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

const clean = require('gulp-clean');

// Все что относиться к изображениям
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');

// Браузер синк и модуль для копирования директорий
const bs = require("browser-sync").create();
const ncp = require('ncp').ncp;

const runSequence = require('run-sequence');
const ftp = require('vinyl-ftp');
const gutil = require('gulp-util');

// Переменная окружения заданная по умолчанию
let env = process.env.NODE_ENV === 'build' ? 'build' : 'develop';

// Если это разработка запустить сервер
gulp.task('server', () => {
	// Если переменная окружения задана, то делаем сборку под продакшн
	if (env === 'develop') {
		bs.init({
			//server : `./_compile/${env}/`,
			proxy: 'localhost'
		})
	}

	return;
});

// Настройки для вебпака
let webpackOptions = {
	entry: './_sources/js/index.js',

	module: {

		loaders: [{
			test: /\.js$/,
			loader: 'babel?presets[]=es2015'
		}]
	}
};

// Конструктор для создания пути для исходных файлов и скомпилированных файлов
class CreatePath {
	constructor(from, to) {
		this.from = __dirname + from;
		this.to = to === undefined ? __dirname + `/_compile/${env}/` : __dirname + to;
	}
}

// Пути для всех основных файлов
let jsPath = new CreatePath('/_sources/js/index.js');
let libsPath = new CreatePath('/_extra/libs');
let anotherFiles = new CreatePath('/_extra/anotherFiles');
let scssPath = new CreatePath('/_sources/scss/style.scss');
let jadePath = new CreatePath('/_sources/jade/*.jade');
let phpPath = new CreatePath('/_sources/php');
let imagesPath = new CreatePath('/_sources/image/imageFromProd/**/*', `images/`);

// опции для синтаксиса js
let optionForJshint = {
	// these directives can
	// be found in the official
	// JSLint documentation.
	evil: true,
	curly: true,
	eqeqeq: true,
	newcap: true,
	plusplus: false,
	browser: true,
	esnext: true,
	// you can also set global
	// declarations for all source
	// files like so:
	predef: ['$'],
	// both ways will achieve the
	// same result; predef will be
	// given priority because it is
	// promoted by JSLint
};


// task для компиляции jade шаблонов
gulp.task('jade', () => {
	gulp.src(jadePath.from)
		.pipe(pug({pretty: true}))
		.pipe(rename(function (path) {
			path.extname = ".php"
		}))
		.pipe(gulp.dest(jadePath.to));

	bs.reload();
});

gulp.task('clean', () => {
	gulp.src('_compile/develop', {read: false})
		.pipe(clean())
});

gulp.task('php', () => {
	ncp(phpPath.from, phpPath.to, function (err) {
		if (err) {
			return console.error(err);
		}
	});
});


// @TODO поискать css lint
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
			.pipe(minifyCss())
			.pipe(rename('style.css'))
			.pipe(gulp.dest(scssPath.to));
	}
});


gulp.task('images', () => {
	gulp.src(imagesPath.from)
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		}))
		.pipe(gulp.dest(imagesPath.to));
});


// task for JS
gulp.task('js', () => {
	let _files = gulp.src(jsPath.from);

	if (process.env.NODE_ENV !== 'build') {
		_files.pipe(jshint(optionForJshint))
			.pipe(jshint.reporter('default'))
			.pipe(webpackStream(webpackOptions))
			.pipe(rename('bundle.js'))
			.pipe(gulp.dest(jsPath.to));

		bs.reload();
	} else {
		_files.pipe(jshint(optionForJshint))
			.pipe(jshint.reporter('default'))
			.pipe(webpackStream(webpackOptions))
			.pipe(uglify())
			.pipe(rename('bundle.min.js'))
			.pipe(gulp.dest(jsPath.to));

	}
});


// @TODO оставлять только нужные файлы через плагин bower
// Таск для переноса библиотек в готовую сборку
gulp.task('libsCompile', () => {
	ncp(libsPath.from, libsPath.to, function (err) {
		if (err) {
			return console.error(err);
		}
	});
	/*ncp(anotherFiles.from, anotherFiles.to, function (err) {
		if (err) {
			return console.error(err);
		}
	});*/
});


//taks for watch change files
gulp.task('watch', () => {
	// Ватчеры для .jade файлов
	gulp.watch(jadePath.from, ['jade']);
	gulp.watch(__dirname + '/_sources/jade/**', ['jade']);

	gulp.watch(phpPath.from, ['php']);
	gulp.watch(__dirname + '/_sources/php/*', ['php']);

	// Ватчеры для .scss файлов
	gulp.watch(scssPath.from, ['scss']);
	gulp.watch(__dirname + '/_sources/scss/**', ['scss']);

	// Ватчер для .js файлов
	gulp.watch(__dirname + '/_sources/js/*.js', ['js']);
});




gulp.task('build', ['jade', 'php', 'scss', 'js', /*'images', */'libsCompile']);

// default task
if (env === 'develop') {
	gulp.task('default', ['jade', 'scss', 'js', 'server', 'watch']);
} else {
	gulp.task('default', ['build']);
}


const getFtpConnection = () => {
	return ftp.create( {
		
		parallel: 5,
		log:      gutil.log
	} );
};

var globs = [
	'_compile/develop/*',
];

const remoteFolder = '/www/kotikienotiki.ru/wp-content/themes/cats';

//taks for watch change files
gulp.task('deploy', (cb) => {

	runSequence('build', () => {

		var waitTill = new Date(new Date().getTime() + 5 * 1000);
		while(waitTill > new Date()){}

		console.log('# start deploy');

		var conn = getFtpConnection();



		// using base = '.' will transfer everything to /public_html correctly
		// turn off buffering in gulp.src for best performance

		return gulp.src( globs, { base: '_compile/develop', buffer: false } )
			.pipe( conn.newer( remoteFolder ) ) // only upload newer files
			.pipe( conn.dest( remoteFolder ) );


		// cb();
	});

});


gulp.task('watch-deploy-ftp', function() {
	var conn = getFtpConnection();

	gulp.watch(globs)
		.on('change', function(event) {
			console.log('# changes: "' + event.path + '", ' + event.type);

			return gulp.src( [event.path], { base: '_compile/develop', buffer: false } )
				.pipe( conn.newer( remoteFolder ) ) // only upload newer files
				.pipe( conn.dest( remoteFolder ) )
				;
		});
});


gulp.task('watch-deploy', () => {
	runSequence('watch', 'watch-deploy-ftp', () => {
		console.log('# watch-deploy runned');
	});
});