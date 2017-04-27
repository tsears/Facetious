const stringifiers = require('../../app/stringifiers');

describe('the name stringifier', () => {
  it ('returns nothing if passed an empty array', () => {
    const entries = [];
    const friendlyString = stringifiers.list(entries);
    expect(friendlyString).toBeUndefined();
  });

  it('returns the text of a single argument for a list of length 1', () => {
    const entries = ['foo'];
    const friendlyString = stringifiers.list(entries);
    expect(friendlyString).toEqual('foo');
  });

  it('places the word "and" between the entries of a list with two items', () => {
    const entries = ['foo', 'bar'];
    const friendlyString = stringifiers.list(entries);
    expect(friendlyString).toEqual('foo and bar');
  })

  it('turns the entries in an array in to a human-friendly list', () => {
    const entries = ['foo', 'bar', 'baz'];
    const friendlyString = stringifiers.list(entries);
    expect(friendlyString).toEqual('foo, bar, and baz');
  });
});
