module.exports = class Quit {
    constructor(client) {
        this._command = '!quit';
        this._client = client;
    }

    get command() {  return this._command; }

    action(channel) {
        this._client.disconnect();
        process.exit(0); // eslint-disable-line no-process-exit
    }
}
