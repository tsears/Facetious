module.exports = class NameReactor {
  constructor(client, state) {
    this._reaction = 'name';
    this._triggers = [state.name];
    this._state = state;
    this._client = client;
  }

  get reaction() { return this._reaction; }

  get triggers() { return this._triggers; }

  react(channel, from) {
    const reactions = [
      `looks at ${from} expectantly`,
      `wags his tail`,
      `stirs and looks at ${from}`,
      `walks over and sits by ${from}`,
    ];

    const reactionIndex = Math.floor(Math.random() * reactions.length);

    this._client.action(channel, reactions[reactionIndex]);
  }
}
