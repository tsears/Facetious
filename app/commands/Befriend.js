const stringifiers = require('../stringifiers');

module.exports = class Befriend {
  constructor(client, state) {
    this._command = '!befriend';
    this._client = client;
    this._state = state;
  }

  get command() {  return this._command; }

  action(channel, from, message, args) {

    if (Array.isArray(args) && args.length > 0) {

      this._state.global.allowedUsers = this._state.global.allowedUsers.concat(args.filter(a => a !== ''));

      if (args.length === 1) {
        this._client.action(channel, `rubs up against ${args[0]}`);
      } else if (args.length === 2) {
        this._client.action(channel, `visits ${args.join(' and ')} and gives them each a lick`);
      } else if (args.length > 2) {
        const nameList = stringifiers.list(args);
        this._client.action(channel, `loves up on ${nameList}`);
      }
    }

    if (args === null) {
      this._client.action(channel, 'doesn\'t understand');
    }
  }


}
