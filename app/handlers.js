
module.exports = class Handlers {
    constructor(client, state) {
        this.client = client;
        this.state = state;
    }

    getChannelCommandHandlers(channel, commands, reactors) {
        console.log(`Registering handler for ${channel}`);
        const c = channel;

        function handleCommand(from, message) {
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
              commands[cmd].action(channel, from, message, args);
          } else {
              this.client.action(c, 'looks puzzled');
          }
        }

        function checkForReaction(channel, from, message) {
          for(let reactor of reactors) {
            let reacted = false;

            for (let trigger of reactor.triggers) {
              if (message.indexOf(trigger) > -1) {
                reactor.react(channel, from);
                reacted = true;
                break;
              }
            }

            if (reacted) { break; }
          }
        }

        return (from, message) => {
            console.log(`${c} from ${from} => ${message}`);

            if (message.substr(0, 1) === '!') {
                if (this.state.global.allowedUsers.indexOf(from) > -1) {
                    handleCommand(from, message);

                } else {
                    this.client.action(c, 'looks disinterested');
                }
            } else {
              checkForReaction(channel, from, message);
            }
        }
    }
}
