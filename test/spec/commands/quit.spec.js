const Client = require('../../mocks/MockClient.js');
const Quit = require('../../../app/commands/Quit.js');

describe('The quit command ', () => {
    let client, quit, speak;

    beforeEach(() => {
        client = new Client();
        const state = {
          global: {
            admin: 'admin',
          },
        }
        quit = new Quit(client, state);
    });

    it('should be invoked with !quit', () => {
        expect(quit.command).toEqual('!quit');
    })

    it('should cause the bot to speak.', () => {
        quit.action('foo', 'admin');
        expect(client.message).not.toEqual('');
    })

    it('should cause an action if invoked by a non-admin', () => {
      quit.action('foo', 'wally');
      expect(client.actionMssage).not.toEqual('');
    });
})
