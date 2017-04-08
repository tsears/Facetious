const irc = require('irc');
const Handlers = require('./handlers');
const CommandLoader = require('./commands');

console.log(`Node version: ${process.version}`);
console.log(`admin: ${process.env.ADMIN}`);
console.log(`server: ${process.env.SERVER}`);
console.log(`channel: ${process.env.INITIALCHANNEL}`);
console.log(`name: ${process.env.BOTNAME}`);

const client = new irc.Client(process.env.SERVER, process.env.BOTNAME, {
    channels: [process.env.INITIALCHANNEL],
});

const settings = {
    allowedUsers: [process.env.ADMIN],
};

const loader = new CommandLoader('./commands', client)
const commands = loader.load();

const handlers = new Handlers(client, settings);

client.addListener(`message${process.env.INITIALCHANNEL}`,
    handlers.getChannelCommandHandlers(process.env.INITIALCHANNEL, commands));