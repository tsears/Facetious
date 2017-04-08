module.exports = class Befriend {
  constructor(client, state) {
    this._command = '!befriend';
    this._client = client;
    this._state = state;
  }

  get command() {  return this._command; }

  _makePrettyNameList(names) {
    let nameList = '';

    for(let i = 0; i < names.length - 1; ++i) {
      nameList += args[i] + ', ';
    }

    nameList += 'and ' + args[names.length - 1];

    return nameList;
  }

  action(channel, args) {

    if (Array.isArray(args) && args.length > 0) {

      this._state.global.allowedUsers = this._state.global.allowedUsers.concat(args);

      if (args.length === 1) {
        this._client.action(channel, `rubs up against ${args[0]}`);
      } else if (args.length === 2) {
        this._client.action(channel, `visits ${args.join(' and ')} and gives them each a lick`);
      } else if (args.length > 2) {
        const nameList = this._makePrettyNameList(args);
        this._client.action(channel, `loves up on ${nameList}`);
      }
    }

    if (args === null) {
      this._client.action(channel, 'doesn\'t understand');
    }
  }


}
