#!/home/endayisenga@bktechouse.net/.nvm/versions/node/v16.19.1/bin/node

const num = Math.floor(Number(process.argv[2]));
console.log(isNaN(num) ? 'Not a number' : `My number: ${num}`);
