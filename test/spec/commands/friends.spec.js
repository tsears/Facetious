const Client = require('../../mocks/MockClient.js');
const Friends = require('../../../app/commands/Friends.js');

describe('The friends command ', () => {
    let client, friends, state;

    beforeEach(() => {
        state = {
          global: {
            allowedUsers: ['big', 'willy', 'd'],
          },
        };

        client = new Client();
        friends = new Friends(client, state);
    });

    it('should be invoked with !friends', () => {
        expect(friends.command).toEqual('!friends');
    })

    it('should cause the bot to say who his friends are.', () => {
        friends.action('foo');
        expect(client.actionMessage.indexOf('big, willy, and d')).not.toEqual(-1);
    })
})
