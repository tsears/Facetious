const Client = require('../../mocks/MockClient.js');
const Befriend = require('../../../app/commands/Befriend.js');

describe('The befriend command', () => {
    let client, befriend, state;

    beforeEach(() => {
      state = {
        global: {
          allowedUsers: [],
        },
      };

      client = new Client();
      befriend = new Befriend(client, state);
    });

    it('should be invoked with !befriend', () => {
      expect(befriend.command).toEqual('!befriend');
    });

    describe('when called without a target', () => {
      it('should cause the bot to respond with an action.', () => {
        befriend.action('foo', null, null, null);
        expect(client.actionMessage).toBeDefined();
        expect(client.actionMessage).not.toEqual('');
      });
    });

    describe('when given a target', () => {
      it('should cause the bot add the name to the allowedUsers list', () => {
        befriend.action('foo', null, null, ['willy']);
        expect(state.global.allowedUsers).toEqual(['willy']);
      });
    });

    describe('when given multiple targets', () => {
      it('should cause the bot to add multiple users to the allowedUsers list', () => {
        befriend.action('foo', null, null, ['willy', 'nilly']);
        expect(state.global.allowedUsers).toEqual(['willy', 'nilly']);
      });

      it('Should not add empty entries to the friends array', () => {
        befriend.action('foo', null, null, ['willy', '', 'nilly', '']);
        expect(state.global.allowedUsers).toEqual(['willy', 'nilly']);
      });
    });
})
