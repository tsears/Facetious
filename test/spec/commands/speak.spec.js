const Client = require('../../mocks/MockClient.js');
const Speak = require('../../../commands/Speak.js');

describe('The speak command ', () => {
    let client, speak;

    beforeEach(() => {
        client = new Client();
        speak = new Speak(client);
    });

    it('should be invoked with !speak', () => {
        expect(speak.command).toEqual('!speak');
    })

    it('should cause the bot to speak.', () => {
        speak.action('foo');
        expect(client.message).not.toEqual('');
    })
})
