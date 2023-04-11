import AnimalModel from "../models/animals.model.js";
export default class AnimalController {
  static async getAnimals(req, res) {
    try {
      const animals = await AnimalModel.getAnimals();
      res.status(200).send(animals);
    } catch (err) {
      res.status(500).send({ message: "Error while getting all Animals" });
      console.log(err);
    }
  }
  static async addAnimal(req, res) {
    try {
      const animal = await AnimalModel.addAnimal(req.body);
      res.status(200).send(animal);
    } catch (error) {
      res.status(500).send({ message: "Error while adding an animal" });
      console.log(error);
    }
  }
  static async updateAnimal(req, res) {
    try {
      const animal = await AnimalModel.updateAnimal(req.params.id, req.body);
      res.status(200).send(animal);
    } catch (error) {
      res.status(500).send({ message: "Error while updating an animal" });
      console.log(error);
    }
  }
  static async deleteAnimal(req, res) {
    try {
      await AnimalModel.deleteAnimal(req.params.id);
      res.sendStatus(200);
    } catch (err) {
      res.status(500).send({ message: "Error while deleting an animal" });
      console.log(err);
    }
  }
}
