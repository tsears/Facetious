const irc = require('irc');
const Handlers = require('./handlers');
const ModuleLoader = require('./moduleLoader');
const CommandLoader = require('./commands');

console.log(`Node version: ${process.version}`);
console.log(`Run From: ${process.env.PWD}`);
console.log(`Working Dir: ${process.cwd()}`);
console.log(`admin: ${process.env.ADMIN}`);
console.log(`server: ${process.env.SERVER}`);
console.log(`channel: ${process.env.INITIALCHANNEL}`);
console.log(`name: ${process.env.BOTNAME}`);

const client = new irc.Client(process.env.SERVER, process.env.BOTNAME, {
    channels: [process.env.INITIALCHANNEL],
});

const state = {
  global: {
    admin: process.env.ADMIN,
    allowedUsers: [process.env.ADMIN],
  },
};

const moduleLoader = new ModuleLoader();
const commandModules = moduleLoader.load('commands/')
console.log(commandModules);
const loader = new CommandLoader(client, state, commandModules)
const commands = loader.load();

const handlers = new Handlers(client, state);

client.addListener(`message${process.env.INITIALCHANNEL}`,
    handlers.getChannelCommandHandlers(process.env.INITIALCHANNEL, commands));
