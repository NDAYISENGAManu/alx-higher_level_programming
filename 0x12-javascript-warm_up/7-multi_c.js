#!/home/endayisenga@bktechouse.net/.nvm/versions/node/v16.19.1/bin/node

const x = Math.floor(Number(process.argv[2]));
if (isNaN(x)) {
  console.log('Missing number of occurrences');
} else {
  for (let i = 0; i < x; i++) {
    console.log('C is fun');
  }
}
