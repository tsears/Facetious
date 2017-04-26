export default class ScriptTasks {
  constructor(gulp, plugins) {
    this.gulp = gulp;
    this.plugins = plugins;
  }

  lint() {
    const self = this;
    return () => {
      return self.gulp.src([
        '*.js',
        'js/**/*.js',
        'gulp-tasks/*.js',
        'test/**/*.js',
        '!**/*.min.js',
      ])
      .pipe(self.plugins.eslint())
      .pipe(self.plugins.eslint.format());
    };
  }

  coveralls() {
    const self = this;
    return () => {
      return self.gulp.src([
        'coverage/**/lcov.info',
      ])
      .pipe(self.plugins.coveralls());
    }
  }

  preTest() {
    const self = this;
    return () => {
      return self.gulp.src([
        'app/**/*.js',
      ])
      .pipe(self.plugins.istanbul())
      .pipe(self.plugins.istanbul.hookRequire());
    }
  }

  test() {
    const self = this;
    return () => {
      return self.gulp.src([
        'test/**/*.spec.js',
      ])
      .pipe(self.plugins.jasmine({
        verbose: true,
        includeStackTrace: true,
        reporter: new self.plugins.jasmineSpecReporter.SpecReporter({
          spec: {
            displayStacktrace: true,
            displaySuccessful: true,
          },
        }),
      }))
      .pipe(self.plugins.istanbul.writeReports())
    }
  }

}
