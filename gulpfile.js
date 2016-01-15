var gulp = require('gulp'),
	sass = require('gulp-sass'),
	tsc = require('gulp-typescript'),
	watch = require('gulp-watch');

var serverTsPath = 'server/**/*.ts',
	publicTsPath = 'public/**/*.ts',
	publicSassPath = 'public/app/**/*.scss';

var tsconfig = {
	target: 'ES5',
	moduleResolution: 'node',
	noImplicitAny: true,
	removeComments: false,
	inlineSourceMap: true
}

function tsServer() {
	var serverTsConfig = Object.create(tsconfig);
	serverTsConfig.module = 'commonjs';
	console.log(serverTsConfig.noImplicitAny);
	
	gulp.src(serverTsPath)
		// .pipe(tsc({
		// 	noImplicitAny: false,
		// 	module: 'commonjs',
		// 	target: 'ES5'
		// }))
		.pipe(tsc(serverTsConfig))
		.pipe(gulp.dest('server'));
}

function tsPublic() {
	gulp.src(publicTsPath)
		.pipe(tsc({
			noImplicitAny: false,
			module: 'system',
			target: 'ES5'
		}))
		.pipe(gulp.dest('public/js'));
}

function sassCompile() {
	gulp.src(publicSassPath)
		.pipe(sass({ out: 'test3.css' })).on('error', sass.logError)
		.pipe(gulp.dest('./app/styles'))
}

function watcher() {
	watch(publicSassPath, sassCompile);
	watch(publicTsPath, tsPublic);
	watch(serverTsPath, tsServer);
}

gulp.task('ts-server', tsServer);
gulp.task('ts-public', tsPublic);
gulp.task('sass', sassCompile);
gulp.task('watch', watcher);

gulp.task('default', ['sass', 'watch']);