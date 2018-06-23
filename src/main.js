'use strict';

const server = require('./lib/server');
const logger = require('./lib/logger');
// const util = require('util');
// const storage = require('./lib/storage');

server.start(process.env.PORT, () => logger.log(logger.INFO, `MAIN: listening on ${process.env.PORT}`));


// // console.log(util.inspect(storage, false, null));

// storage.save('Dino', { name: 'Little Foot' });
