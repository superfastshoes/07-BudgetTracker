//Dependencies
var gulp = require('gulp');
var gutil = require('gulp-util');
var inject = require('gulp-inject');
var wiredep = require('wiredep').stream;
var connect = require('gulp-connect');
var open = require('gulp-open');

//************************************************************************//

//************************************************************************//
gulp.task('inject', function(){
	var sources = gulp.src(['./core/css/**/*.css', './core/js/**/*.module.js', './core/js/**/*.js'])

	gulp.src('./core/index.html')
	.pipe(wiredep())
	.pipe(inject(sources, { relative: true}))
	.pipe(gulp.dest('./core'));
});

//************************************************************************//
gulp.task('connect', function(){
	connect.server({
		root: './core',
		livereload: true,
	});
});

//************************************************************************//
var jsSources = ['core/js/**/*.js'],
	cssSources = ['core/css/**/*.css'],
	htmlSources = ['**/*.html'];

//************************************************************************//
gulp.task('watch', function(){
	gulp.watch(jsSources, ['js'])
	gulp.watch(cssSources, ['css'])
	gulp.watch(htmlSources, ['html'])
});

//************************************************************************//
gulp.task('js', function() {
    gulp.src(jsSources)
        .pipe(connect.reload());
});

gulp.task('html', function() {
    gulp.src(htmlSources)
        .pipe(connect.reload());
});

gulp.task('css', function() {
    gulp.src(cssSources)
        .pipe(connect.reload());
});

//************************************************************************//
gulp.task('app', function(){
    var options = {
        uri: 'http://localhost:8080',
        app: 'Google Chrome'
    };
    gulp.src('./core/index.html')
        .pipe(open(options));
});

gulp.task('serve', ['connect', 'watch', 'inject', 'app'])

//************************************************************************//








