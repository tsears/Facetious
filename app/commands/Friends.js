const stringifiers = require('../stringifiers');

module.exports = class Friends {
  constructor(client, state) {
    this._command = '!friends';
    this._client = client;
    this._state = state;
  }

  get command() { return this._command; }

  action(channel, from, message, args) {

    this._client.action(channel, `visits ${stringifiers.list(this._state.global.allowedUsers)}`);
  }
}
