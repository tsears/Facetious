const irc = require('irc');
const handlers = require('./handlers');

console.log(`admin: ${process.env.ADMIN}`);
console.log(`server: ${process.env.SERVER}`);
console.log(`channel: ${process.env.INITIALCHANNEL}`);

const client = new irc.Client(process.env.SERVER, 'facetious', {
    channels: [process.env.INITIALCHANNEL]
});

const settings = {
    allowedUsers: [process.env.ADMIN],
    client
}

client.addListener(`message${process.env.INITIALCHANNEL}`, handlers.addChannelMessageHandler(settings, process.env.INITIALCHANNEL));
