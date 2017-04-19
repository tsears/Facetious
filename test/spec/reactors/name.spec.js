const Client = require('../../mocks/MockClient.js');
const NameReactor = require('../../../app/reactors/NameReactor.js');

describe('The name reactor', () => {
    let client, name;

    beforeEach(() => {
        client = new Client();

        const state = {
          name: 'foo',
          global: {
            admin: 'admin',
          },
        }
        name = new NameReactor(client, state);
    });

    it('should cause the bot to perform and action.', () => {
        name.react('foo', 'test')
        expect(client.action).not.toEqual('');
    })
})
