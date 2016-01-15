var gulp = require('gulp'),
	sass = require('gulp-sass'),
	tsc = require('gulp-typescript'),
	sourcemaps = require('gulp-sourcemaps'),
	watch = require('gulp-watch');

var serverTsPath = 'server/**/*.ts',
	publicTsPath = 'public/**/*.ts',
	publicSassPath = 'public/app/**/*.scss';

var tsconfig = {
	target: 'ES5',
	moduleResolution: 'node',
	noImplicitAny: false,
	removeComments: false
}

function tsServer() {
	var serverTsConfig = new Object(tsconfig);
	serverTsConfig.module = 'commonjs';
	
	gulp.src(serverTsPath)
		.pipe(sourcemaps.init())
			.pipe(tsc(serverTsConfig))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('server'));
}

function tsPublic() {
	var publicTsConfig = new Object(tsconfig);
	publicTsConfig.module = 'system';
	publicTsConfig.emitDecoratorMetadata = true;
	publicTsConfig.experimentalDecorators = true;
	
	gulp.src(publicTsPath)
		.pipe(sourcemaps.init())
			.pipe(tsc(publicTsConfig))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('public'));
}

function sassCompile() {
	gulp.src(publicSassPath)
		.pipe(sourcemaps.init())
			.pipe(sass()).on('error', sass.logError)
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./public/app'))
}

function watcher() {
	watch(serverTsPath, tsServer);
	watch(publicTsPath, tsPublic);
	watch(publicSassPath, sassCompile);
}

gulp.task('ts-server', tsServer);
gulp.task('ts-public', tsPublic);
gulp.task('sass', sassCompile);
gulp.task('watch', watcher);

gulp.task('default', ['sass', 'watch']);