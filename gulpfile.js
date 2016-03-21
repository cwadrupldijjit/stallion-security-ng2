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

function initServerConfig() {
	var serverTsConfig = new Object(tsconfig);
		serverTsConfig.module = 'commonjs';
	
	return serverTsConfig;
}

function tsServer() {
	var serverTsConfig = initServerConfig();
	
	gulp.src(serverTsPath)
		.pipe(sourcemaps.init())
			.pipe(tsc(serverTsConfig))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('server'));
}

function initPublicConfig() {
	var publicTsConfig = new Object(tsconfig);
		publicTsConfig.module = 'system';
		publicTsConfig.emitDecoratorMetadata = true;
		publicTsConfig.experimentalDecorators = true;
	
	return publicTsConfig;
}

function tsPublic() {
	var publicTsConfig = initPublicConfig();
	
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
		.pipe(tsc(publicTsConfigMin))
		.pipe(uglify())
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
		.pipe(sass()).on('error', sass.logError)
		.pipe(uglify())
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
gulp.task('uglify', ['ts-public-min']);

gulp.task('default', ['dev']);