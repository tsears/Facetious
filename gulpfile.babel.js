import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import ScriptTasks from './gulp-tasks/scripts';
import DevTasks from './gulp-tasks/dev';

let plugins = gulpLoadPlugins({
	pattern: [
		'gulp-*',
		'gulp.*',
		'webpack*',
		'*-reporter',
	],
});

// Script Tasks
let scriptTasks = new ScriptTasks(gulp, plugins);
gulp.task('lint', scriptTasks.lint());
gulp.task('test', scriptTasks.test());

//Dev Tasks
let devTasks = new DevTasks(gulp, plugins);
gulp.task('watch', devTasks.watch());

gulp.task('default',
  [
    'lint',
		'jsTest',
  ]
);
