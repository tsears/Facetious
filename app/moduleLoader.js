const fs = require('fs');
const path = require('path');

module.exports = class ModuleLoader {
    // file operations done synchronously as we only do this once at load...
    _loadModules(cmdPath, modules) {
        const stat = fs.lstatSync(cmdPath)

        if (stat.isDirectory()) {
            // we have a directory: do a tree walk
            const files = fs.readdirSync(cmdPath);

            var f, l = files.length;

            for (var i = 0; i < l; i++) {
                f = path.join(cmdPath, files[i]);
                this._loadModules(f, modules);
            }
        } else {
            // we have a file: load it
            if (!(cmdPath.indexOf('index.js') > -1)) {
              modules.push(require(cmdPath)) // eslint-disable-line global-require
            }
        }
    }

    load(modulesPath) {
      const modules = [];
      this._loadModules(path.resolve(__dirname, modulesPath), modules);
      return modules;
    }
}
