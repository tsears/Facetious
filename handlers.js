var addChannelMessageHandler = (settings, channel) => {
    console.log(`Registering handler for ${channel}`);
    const c = channel;
    const client = settings.client;

    const speak = (channel, word) => {
        client.say(channel, 'Woof!');
    }

    const commands = {
        '!speak': speak
    };

    return function(from, message) {
        console.log(`${c} from ${from} => ${message}`);

        if (settings.allowedUsers.indexOf(from) > -1) {
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
                    client.action(c, 'looks puzzled');
                }

            }
        } else {
            client.action(c, 'looks disinterested');
        }
    }
}

module.exports = {
    addChannelMessageHandler
}
