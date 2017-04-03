const fs = require('fs');
const path = require('path');

module.exports = class CommandLoader {
    constructor(cmdPath, client) {
        this._cmdPath = cmdPath;
        this._client = client;
    }

    // file operations done synchronously as we only do this once at load...
    _loadModules(cmdPath, commands) {
        const stat = fs.lstatSync(cmdPath)

        if (stat.isDirectory()) {
            // we have a directory: do a tree walk
            const files = fs.readdirSync(cmdPath);

            var f, l = files.length;

            for (var i = 0; i < l; i++) {
                f = path.join(cmdPath, files[i]);
                this._loadModules(f, commands);
            }
        } else {
            // we have a file: load it
            if (!(cmdPath.indexOf('index.js') > -1)) {
                const p = path.parse(cmdPath);
                const C = require(`./${p.name}`) // eslint-disable-line global-require
                const c = new C(this._client);
                console.log(`loaded ${cmdPath} with command ${c.command}`);
                commands[c.command] = c;
            }
        }
    }

    load() {
        const commands = {};

        this._loadModules(this._cmdPath, commands);

        return commands;
    }
}
