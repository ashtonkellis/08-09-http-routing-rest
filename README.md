# Lab 08-09 HTTP Routing Rest
## Travis Badge
[![Build Status](https://travis-ci.org/ashtonkellis/08-09-http-routing-rest.svg?branch=master)](https://travis-ci.org/ashtonkellis/08-09-http-routing-rest)

## Heroku Deployed Version
https://cf-js-401-lab-08-09.herokuapp.com/

## Persistence Options
To save all data to memory:
```
// include in environmental variables
STORAGE=filesystem
```

To save all data to file system:
```
// include in environmental variables
STORAGE=filesystem
// create directory
/src/data/Dinosaurs
```

## Resource: DINOSAURS!!!! RAWR!
Dinosaurs have the following fields:
```
Dinosaur {
  _id: a unique id that is created on instantiation
  name: string (required)
  species: string (optional)
  eatsMeat: boolean (optional)
  eatsPlants: boolean (optional)
}
```

## API Endpoints
POST api/v1/dinosaur
```
  // example post request body
  request.body: {
    name: 'Little Foot',
    species: 'Long Neck',
    eatsMeat: false,
    eatsPlants: true,
}
```

GET api/v1/dinosaur?id={dino_id}
```
// example query string to get dinosaur # 123
api/v1/dinosaur?id=123
```

DELETE api/v1/dinosaur?id={dino_id}
```
// example query string to delete dinosaur # 123
api/v1/dinosaur?id=123
```