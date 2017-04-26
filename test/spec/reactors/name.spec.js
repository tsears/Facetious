const Client = require('../../mocks/MockClient.js');
const NameReactor = require('../../../app/reactors/NameReactor.js');

describe('The name reactor', () => {
    let client, name;
    const state = {
      name: 'foo',
      global: {
        admin: 'admin',
      },
    }

    beforeEach(() => {
        client = new Client();
        name = new NameReactor(client, state);
    });

    it('should be called "name"', () => {
       expect(name.reaction).toBe('name');
    });

    it('should trigger on the bot\'s name', () => {
        expect(name.triggers).toEqual([state.name]);
    });

    it('should cause the bot to perform and action.', () => {
        name.react('foo', 'test')
        expect(client.action).not.toEqual('');
    })
})
