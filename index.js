const irc = require('irc');
const Handlers = require('./handlers');

console.log(`Node version: ${process.version}`);
console.log(`admin: ${process.env.ADMIN}`);
console.log(`server: ${process.env.SERVER}`);
console.log(`channel: ${process.env.INITIALCHANNEL}`);

const client = new irc.Client(process.env.SERVER, 'facetious', {
    channels: [process.env.INITIALCHANNEL]
});

const settings = {
    allowedUsers: [process.env.ADMIN]
}

const handlers = new Handlers(client, settings);

client.addListener(`message${process.env.INITIALCHANNEL}`,
    handlers.getChannelCommandHandlers(process.env.INITIALCHANNEL));
