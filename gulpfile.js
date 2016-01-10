var gulp = require('gulp'),
	sass = require('gulp-sass'),
	watch = require('gulp-watch');

function sassCompile() {
	gulp.src('app/**/*.scss')
		.pipe(sass({ outFile: 'test3.css' })).on('error', sass.logError)
		.pipe(gulp.dest('./app/styles'))
}

gulp.task('sass', sassCompile);

gulp.task('watch', function() {
	watch('app/**/*.scss', sassCompile);
})

gulp.task('default', ['sass', 'watch']);