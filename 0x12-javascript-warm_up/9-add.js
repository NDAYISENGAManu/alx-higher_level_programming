#!/home/endayisenga@bktechouse.net/.nvm/versions/node/v16.19.1/bin/node

function add (a, b) {
  return a + b;
}

console.log(add(Number(process.argv[2]), Number(process.argv[3])));