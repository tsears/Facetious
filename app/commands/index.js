const fs = require('fs');
const path = require('path');

module.exports = class CommandLoader {
    constructor(client, state) {
        this._client = client;
        this._state = state;
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
                //const p = path.parse(cmdPath);
                const C = require(cmdPath) // eslint-disable-line global-require
                const c = new C(this._client, this._state);
                console.log(`loaded ${cmdPath} with command ${c.command}`);
                commands[c.command] = c;
            }
        }
    }

    load() {
        const commands = {};

        this._loadModules(__dirname, commands);

        return commands;
    }
}
