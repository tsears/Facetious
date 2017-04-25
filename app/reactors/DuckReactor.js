module.exports = class DuckReactor {
  constructor(client, state) {
    this._reaction = 'duck';
    this._triggers = ['\u200B'];
    this._state = state;
    this._client = client;
  }

  get reaction() { return this._reaction; }

  get triggers() { return this._triggers; }

  react(channel, from) {
    const coinFlip = Math.floor(Math.random() * 2);

    if(coinFlip === 0) {
        this._client.action(channel, 'alertly points');
    } else {
      this._client.say(channel, 'bark! bark!');
    }

  }
}
