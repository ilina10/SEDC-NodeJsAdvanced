import express from "express";
import AnimalController from "../controllers/animal.controller.js";
import animalValidator from "../middlewares/animal-validator.middleware.js";
const router = express.Router();
//Getting all animals
router.get("/", AnimalController.getAnimals);
//Adding an animal
router.post("/", animalValidator, AnimalController.addAnimal);
//Updating an animal
router.put("/:id", AnimalController.updateAnimal);
//Deleting an animal
router.delete("/:id", AnimalController.deleteAnimal);

export default router;
