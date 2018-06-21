'use strict';

const superagent = require('superagent');
const server = require('../lib/server');
const Dinosaur = require('../model/dinosaur');

const apiUrl = 'http://localhost:5000/api/v1/dinosaur';

const mockResource = {
  title: 'test title',
  content: 'test content',
  name: 'Little Foot',
  species: 'Long Neck',
  eatsMeat: false,
  eatsPlants: true,
};

beforeAll(() => server.start(5000));
afterAll(() => server.stop());

describe('404 for non-existent routes', () => {
  test('GET: 404 on pad path', () => {
    return superagent.get(`${apiUrl}/bad/path`)
      .then((response) => {
        throw response;
      })
      .catch((err) => {
        expect(err.status).toEqual(404);
      });
  });
});

describe('POST to /api/v1/dinosaur', () => {
  test('200 for successful saving of a new dinosaur', () => {
    return superagent.post(apiUrl)
      .send(mockResource)
      .then((response) => {
        expect(response.status).toEqual(200);
        expect(response.body._id).toBeTruthy();
        expect(response.body.name).toEqual(mockResource.name);
        expect(response.body.species).toEqual(mockResource.species);
        expect(response.body.eatsMeat).toEqual(mockResource.eatsMeat);
        expect(response.body.eatsPlants).toEqual(mockResource.eatsPlants);
      })
      .catch((err) => {
        throw err;
      });
  });

  test('400 for a bad request', () => {
    return superagent.post(apiUrl)
      .send({})
      .then((response) => {
        throw response;
      })
      .catch((err) => {
        expect(err.status).toEqual(400);
        expect(err).toBeInstanceOf(Error);
      });
  });
});

describe('GET /api/v1/dinosaur', () => {
  let mockResourceForGet;
  beforeEach(() => {
    const newDinosaur = new Dinosaur(mockResource);
    newDinosaur.save()
      .then((dinosaur) => {
        mockResourceForGet = dinosaur;
      })
      .catch((err) => {
        throw err;
      });
  });

  test('200 on successful request', () => {
    return superagent.get(`${apiUrl}?id=${mockResourceForGet._id}`)
      .then((response) => {
        expect(response.status).toEqual(200);
        expect(response.body.name).toEqual(mockResourceForGet.name);
        expect(response.body.species).toEqual(mockResourceForGet.species);
        expect(response.body.eatsMeat).toEqual(mockResourceForGet.eatsMeat);
        expect(response.body.eatsPlants).toEqual(mockResourceForGet.eatsPlants);
      })
      .catch((err) => {
        throw err;
      });
  });

  test('404 with non-existent ID', () => {
    return superagent.get(`${apiUrl}?id=12345`)
      .then((response) => {
        throw response;
      })
      .catch((err) => {
        expect(err.status).toEqual(404);
        expect(err).toBeInstanceOf(Error);
      });
  });
});

describe('DELETE /api/v1/dinosaur', () => {
  let mockResourceForDelete;
  
  beforeEach(() => {
    const newDinosaur = new Dinosaur(mockResource);
    newDinosaur.save()
      .then((dinosaur) => {
        mockResourceForDelete = dinosaur;
      })
      .catch((err) => {
        throw err;
      });
  });
  
  test('200 on successful request', () => {
    return superagent.delete(`${apiUrl}?id=${mockResourceForDelete._id}`)
      .then((response) => {
        expect(response.status).toBe(204);
      })
      .catch((err) => {
        throw err;
      });
  });
});
