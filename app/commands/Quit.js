module.exports = class Quit {
    constructor(client, exit) {
        this._command = '!quit';
        this._client = client;
        this._exit = !!exit;
    }

    get command() {  return this._command; }

    action(channel) {
        const quitMessages = [
            'running towards the truck',
            'disappearing over the horizon',
        ];

        const messageIndex = Math.floor(Math.random() * quitMessages.length);
        this._client.disconnect(quitMessages[messageIndex]);
        if (this._exit) {
            process.exit(0); // eslint-disable-line no-process-exit
        }
    }
}
