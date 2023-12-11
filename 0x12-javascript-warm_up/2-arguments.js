#!/home/endayisenga@bktechouse.net/.nvm/versions/node/v16.19.1/bin/node

const count = process.argv.length;
console.log(count === 2 ? 'No argument' : count === 3 ? 'Argument found' : 'Arguments found');
