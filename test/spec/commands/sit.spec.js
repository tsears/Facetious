const Client = require('../../mocks/MockClient.js');
const Sit = require('../../../app/commands/Sit.js');

describe('The sit command ', () => {
    let client, sit;

    beforeEach(() => {
        client = new Client();
        sit = new Sit(client, false);
    });

    it('should be invoked with !sit', () => {
        expect(sit.command).toEqual('!sit');
    })

    it('should cause the bot to perform an action.', () => {
        sit.action('foo');
        expect(client.message).not.toEqual('');
    })
})
