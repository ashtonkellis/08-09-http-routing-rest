'use strict';

const Dinosaur = require('../model/dinosaur');
const logger = require('../lib/logger');


module.exports = (router) => {
  router.post('/api/v1/dinosaur', (request, response) => {
    logger.log(logger.INFO, 'ROUTE-DINOSAUR: POST /api/v1/dinosaur');
    const newDinosaur = new Dinosaur(request.body);
    newDinosaur.save()
      .then((dinosaur) => {
        customResponse.sendJSON(response, 200, dinosaur);
        return undefined;
      })
      .catch((err) => {
        logger.log(logger.INFO, `ROUTE DINOSAUR: There was a bad request ${JSON.stringify(err.message)}`);
        customResponse.sendError(response, 400, err.message);
        return undefined;
      });
  });

  // /api/v1/dinosaur?id=123
  router.get('/api/v1/dinosaur', (request, response) => {
    logger.log(logger.INFO, 'ROUTE-DINOSAUR: GET /api/v1/dinosaur');

    if (!request.url.query.id) {
      customResponse.sendError(response, 404, 'Your request requires an id');
      return undefined;
    }

    Dinosaur.findOne(request.url.query.id)
      .then((dinosaur) => {
        customResponse.sendJSON(response, 200, dinosaur);
      })
      .catch((err) => {
        customResponse.sendError(response, 404, err.message);
      });
    return undefined;
  });

  router.delete('/api/v1/dinosaur', (request, response) => {
    logger.log(logger.INFO, 'ROUTE-DINOSAUR: DELETE /api/v1/dinosaur');

    if (!request.url.query.id) {
      customResponse.sendError(response, 404, 'Your request requires an id');
      return undefined;
    }

    Dinosaur.deleteOne(request.url.query.id)
      .then((dinosaurId) => {
        customResponse.sendJSON(response, 204, dinosaurId);
      })
      .catch((err) => {
        customResponse.sendError(response, 404, err.message);
      });
    return undefined;
  });
};
