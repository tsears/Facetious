export default class DevTasks {
  constructor(gulp, plugins) {
    this.gulp = gulp;
    this.plugins = plugins;
  }

  watch() {
    let self = this;
    return () => {
      self.gulp.watch(['app/**/*.js', 'test/**/*.js'], ['lint', 'test']);
      self.gulp.watch(['*.js', 'gulp-tasks/*.js'], ['lint']);
    };
  }
}
