var gulp = require("gulp");
var babel = require("gulp-babel");
var less = require("gulp-less");
var nodemon = require("gulp-nodemon");

gulp.task("es6-node", function () {
  return gulp.src("src/backend/**/*.js")
    .pipe(babel())
    .pipe(gulp.dest("app/"));
});

gulp.task("es6-frontend", function(){
  return gulp.src("src/frontend/javascript/*.js")
    .pipe(babel())
    .pipe(gulp.dest("public/javascript/"));
});

gulp.task("less", function(){
	return gulp.src("src/frontend/styles/main.less")
		.pipe(less())
		.pipe(gulp.dest("public/styles/"));
});

gulp.task('build', ['es6-node', 'less', 'es6-frontend']);

gulp.task('devel', function () {
  	nodemon({ 
  		script: 'app/app.js',
        ext: 'html js less',
        ignore: [
            'app/',
            'node_modules/',
            'public/javascript/',
            'public/styles/'
        	],
        tasks: ['build'] 
      })
    .on('restart', function () {
      console.log('server restarted!');
    });
});

gulp.task('run', function(){
	nodemon({script: 'app/app.js'});
});

gulp.task('default', ['run']);

