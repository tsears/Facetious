const Client = require('../../mocks/MockClient.js');
const Quit = require('../../../app/commands/Quit.js');

describe('The quit command ', () => {
    let quit, speak;

    beforeEach(() => {
        client = new Client();
        quit = new Quit(client, false);
    });

    it('should be invoked with !quit', () => {
        expect(quit.command).toEqual('!quit');
    })

    it('should cause the bot to speak.', () => {
        quit.action('foo');
        expect(client.message).not.toEqual('');
    })
})
