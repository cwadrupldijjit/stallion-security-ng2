var gulp = require('gulp'),
	sass = require('gulp-sass'),
	tsc = require('gulp-typescript'),
	sourcemaps = require('gulp-sourcemaps'),
	uglify = require('gulp-uglify'),
	watch = require('gulp-watch');

var serverTsPath = 'server/**/*.ts',
	publicTsPath = 'public/**/*.ts',
	publicSassPath = 'public/app/**/*.scss';

var tsconfig = {
	target: 'ES5',
	moduleResolution: 'node',
	noImplicitAny: false,
	removeComments: false
};

var serverTsConfig = new Object(tsconfig);
	serverTsConfig.module = 'commonjs';

var publicTsConfig = new Object(tsconfig);
	publicTsConfig.module = 'system';
	publicTsConfig.emitDecoratorMetadata = true;
	publicTsConfig.experimentalDecorators = true;

function tsServer() {
	gulp.src(serverTsPath)
		.pipe(sourcemaps.init())
			.pipe(tsc(serverTsConfig))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('server'));
}

function tsPublic() {
	gulp.src(publicTsPath)
		.pipe(sourcemaps.init())
			.pipe(tsc(publicTsConfig))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('public'));
}

function tsPublicMin() {
	var publicTsConfigMin = new Object(tsconfig);
	publicTsConfigMin.removeComments = true;
	
	gulp.src(publicTsPath)
		.pipe(sourcemaps.init())
			.pipe(tsc(publicTsConfigMin))
			.pipe(uglify())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('public-uglified'))
}

function sassCompile() {
	gulp.src(publicSassPath)
		.pipe(sourcemaps.init())
			.pipe(sass()).on('error', sass.logError)
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./public/app'))
}

function sassCompileMin() {
	gulp.src(publicSassPath)
		.pipe(sourcemaps.init())
			.pipe(sass()).on('error', sass.logError)
			.pipe(uglify())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./public-uglified/app'))
}

function watcher() {
	watch(serverTsPath, tsServer);
	watch(publicTsPath, tsPublic);
	watch(publicSassPath, sassCompile);
}

gulp.task('ts-server', tsServer);
gulp.task('ts-public', tsPublic);
gulp.task('ts-public-min', tsPublicMin);
gulp.task('sass', sassCompile);
gulp.task('sass-min', sassCompileMin);
gulp.task('watch', watcher);
gulp.task('dev', ['ts-server', 'ts-public', 'sass', 'watch']);
gulp.task('prod', ['ts-public-min', 'sass-min']);

gulp.task('default', ['']);