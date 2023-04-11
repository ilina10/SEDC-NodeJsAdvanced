import { Router } from "express";
import ArtistController from "../controllers/artist.controller.js";
const router = Router();

//Add new artist
router.post("/", ArtistController.addNewArtist);

//Get all artist
router.get("/", ArtistController.getAllArtists);
export default router;
