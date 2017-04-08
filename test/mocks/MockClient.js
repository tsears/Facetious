
module.exports =  class {
  constructor() {
    this._channel = '';
    this._message = '';
  }

  say(channel, message) {
    this._channel = channel;
    this._message = message;
  }

  action(channel, action) {
    this._channel = channel;
    this._message = action;
  }

  disconnect(message) {
    this._message = message;
  }

  get channel() { return this._channel; }
  get message() { return this._message; }
}
