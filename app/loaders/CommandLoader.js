module.exports = class CommandLoader {
    constructor(client, state, commandModules) {
        this._client = client;
        this._state = state;
        this._commandModules = commandModules;
    }

    load() {
      const commands = {}

      this._commandModules.map(m => {
        const c = new m(this._client, this._state);
        commands[c.command] = c;
        console.log(`Registered command ${c.command}`);
      });
      return commands;
    }
}
