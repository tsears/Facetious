module.exports = {
  list:  function(list) {
    let readableList = '';

    if (list.length === 0) {
      return;
    } else if (list.length === 1) {

      readableList = list[0];

    } else if (list.length === 2) {

      readableList = list.join(' and ');

    } else  {

      for(let i = 0; i < list.length - 1; ++i) {
        readableList += list[i] + ', ';
      }

      readableList += 'and ' + list[list.length - 1];
    }

    return readableList;
  },
}
