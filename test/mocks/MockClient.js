
module.exports =  class {
    constructor() {
        this._channel = '';
        this._message = '';
    }

    say(channel, message) {
        this._channel = channel;
        this._message = message;
    }

    get channel() { return this._channel; }
    get message() { return this._message; }
}
