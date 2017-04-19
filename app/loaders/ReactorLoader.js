module.exports = class ReactorLoader {
    constructor(client, state, reactorModules) {
        this._client = client;
        this._state = state;
        this._reactorModules = reactorModules;
    }

    load() {
      const reactions = [];

      this._reactorModules.map(m => {
        const c = new m(this._client, this._state);
        reactions.push(c);
        console.log(`Registered reactor ${c.reaction}`);
      });

      return reactions;
    }
}
