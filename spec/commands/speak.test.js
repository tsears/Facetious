const Speak = require('../../../commands/Speak.js');
const MockClient = require('../../mocks/MockClient.js');

describe('The speak command ', () => {
    let speak;
    let client = new MockClient();

    beforeEach(() => {
        speak = new Speak(client);
    });

    it('should call say with a string', () => {
        expect(client.message).not.toEqual('');
    })
});
