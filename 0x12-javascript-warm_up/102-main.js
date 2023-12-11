#!/home/endayisenga@bktechouse.net/.nvm/versions/node/v16.19.1/bin/node

const addMeMaybe = require('./102-add_me_maybe').addMeMaybe;
addMeMaybe(4, function (nb) {
  console.log('New value: ' + nb);
});