module.exports = class Handlers {
    constructor(client, settings) {
        this.client = client;
        this.settings = settings;
    }

    getChannelCommandHandlers(channel) {
        console.log(`Registering handler for ${channel}`);
        const c = channel;

        const speak = (channel, word) => {
            this.client.say(channel, 'Woof!');
        }

        const commands = {
            '!speak': speak
        };

        return (from, message) => {
            console.log(`${c} from ${from} => ${message}`);

            if (this.settings.allowedUsers.indexOf(from) > -1) {
                if (message.substr(0, 1) === '!') {
                    let cmd = '';
                    let args = '';

                    if (message.indexOf(' ') > -1) {
                        cmd = message.substr(0, message.indexOf(' '));
                        args = message.substr(message.indexOf(' ') + 1);
                    } else {
                        cmd = message;
                    }

                    console.log(`${from} asked me to ${cmd} with arg ${args}`);
                    if (commands.hasOwnProperty(cmd)) {
                        commands[cmd](channel, args);
                    } else {
                        this.client.action(c, 'looks puzzled');
                    }

                }
            } else {
                this.client.action(c, 'looks disinterested');
            }
        }
    }
}
