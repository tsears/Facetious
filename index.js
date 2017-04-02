const irc = require('irc');

console.log(`admin: ${process.env.ADMIN}`);
console.log(`server: ${process.env.SERVER}`);
console.log(`channel: ${process.env.INITIALCHANNEL}`);

const client = new irc.Client(process.env.SERVER, 'facetious', {
    channels: [process.env.INITIALCHANNEL]
});

const speak = (word) => {

    client.say('##ils', 'Woof!');
}

const allowedUsers = [process.env.ADMIN];
const commands = {
    '!speak': speak
};

client.addListener('message##ils', function (from, message) {
    console.log(from + ' => #ils: ' + message);

    if (allowedUsers.indexOf(from) > -1) {
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
                commands[cmd](args);
            } else {
                client.action('##ils', 'looks puzzled');
            }

        }
    } else {
        client.action('##ils', 'looks disinterested');
    }
});
