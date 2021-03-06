module.exports = class Quit {
    constructor(client, state) {
        this._command = '!quit';
        this._client = client;
        this._state = state;
    }

    get command() {  return this._command; }

    action(channel, from) {
      if (this._state.global.admin === from) {
        const quitMessages = [
            'running towards the truck',
            'disappearing over the horizon',
        ];

        const messageIndex = Math.floor(Math.random() * quitMessages.length);
        this._client.disconnect(quitMessages[messageIndex]);
      } else {
        this._client.action('looks sad');
      }
    }
}
