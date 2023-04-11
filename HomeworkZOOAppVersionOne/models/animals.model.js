import { getDb } from "../db/mongo-connection.js";
import { ObjectId } from "mongodb";
export default class AnimalModel {
  static async getAnimals() {
    const collection = await getDb().collection("animals");
    const animals = await collection.find().toArray();
    console.log(`All animals: ${animals}`);
    return animals;
  }
  static async addAnimal(animal) {
    const collection = await getDb().collection("animals");
    const addedAnimal = await collection.insertOne(animal);
    console.log("New animal:", addedAnimal);
    return { _id: addedAnimal.insertedId, ...animal };
  }
  static async updateAnimal(animalId, body) {
    const collection = await getDb().collection("animals");
    const result = await collection.updateOne(
      {
        _id: animalId,
      },
      { $set: body }
    );
    return result;
  }
  static async deleteAnimal(animalId) {
    const collection = await getDb().collection("animals");
    const deletedAnimal = await collection.deleteOne({
      _id: animalId,
    });
    console.log(deletedAnimal);
  }
}
