module.exports = class Sit {
    constructor(client) {
        this._command = '!sit';
        this._client = client;
    }

    get command() {  return this._command; }

    action(channel) {
        this._client.action(channel, 'sits');
    }
}
