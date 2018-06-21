'use strict';

const uuid = require('uuid/v4');
const storage = require('../lib/storage');

module.exports = class Dinosaur {
  constructor(config) {
    this._id = uuid();
    this.name = config.name;
    this.species = config.species;
    this.eatsMeat = config.eatsMeat;
    this.eatsPlants = config.eatsPlants;
  }

  save() {
    return storage.save('Dinosaurs', this);
  }

  static fetchAll() {
    // TODO: Bonus to write code to fetch user id's in the storage moduel
  }

  static findOne(_id) {
    return storage.get('Dinosaurs', _id);
  }

  static updateOne(_id) { // eslint-disable-line
    // TODO: Bonus to write code here teo update a user in the storage module by targeting their ID
  }

  static deleteOne(_id) { // eslint-disable-line
    // TODO: write code here to delete a user in the storage module by targeting their id
  }
};
