
module.exports =  class MockClient {
  constructor() {
    this._channel = '';
    this._message = '';
    this._actionMessage = '';
  }

  say(channel, message) {
    this._channel = channel;
    this._message = message;
  }

  action(channel, actionMessage) {
    this._channel = channel;
    this._actionMessage = actionMessage;
  }

  disconnect(message) {
    this._message = message;
  }

  get channel() { return this._channel; }
  get message() { return this._message; }
  get actionMessage() { return this._actionMessage; }
}
