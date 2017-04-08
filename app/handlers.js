
module.exports = class Handlers {
    constructor(client, state) {
        this.client = client;
        this.state = state;
    }

    getChannelCommandHandlers(channel, commands) {
        console.log(`Registering handler for ${channel}`);
        const c = channel;

        return (from, message) => {
            console.log(`${c} from ${from} => ${message}`);

            if (message.substr(0, 1) === '!') {
                if (this.state.global.allowedUsers.indexOf(from) > -1) {
                    let cmd = '';
                    let args = '';

                    if (message.indexOf(' ') > -1) {
                        cmd = message.substr(0, message.indexOf(' '));
                        args = message.substr(message.indexOf(' ') + 1).split(' ');
                    } else {
                        cmd = message;
                    }

                    console.log(`${from} asked me to ${cmd} with arg ${args}`);

                    if (commands.hasOwnProperty(cmd)) {
                        commands[cmd].action(channel, args);
                    } else {
                        this.client.action(c, 'looks puzzled');
                    }

                } else {
                    this.client.action(c, 'looks disinterested');
                }
            }
        }
    }
}
