var gulp = require('gulp');
var eslint = require('gulp-eslint');

gulp.task('lint', function() {
	// gulp-eslint does not work correctly with .eslintignore so paths must be specified here
	return gulp.src([
		'bin/**/*',
		'routes/**/*.js',
		'*.js',])
		.pipe(eslint())
		.pipe(eslint.format());
});
gulp.task('default', ['lint']);