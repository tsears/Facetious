module.exports = class Speak {
    constructor(client) {
        this._command = '!speak';
        this._client = client;
    }

    get command() {  return this._command; }

    action(channel) {
        const dogWords = [
            'woof!',
            'arf!',
            'bark!'
        ];

        const wordIndex = Math.floor(Math.random() * dogWords.length);
        this._client.say(channel, dogWords[wordIndex]);
    }
}
