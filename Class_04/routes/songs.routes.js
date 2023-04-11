import { Router } from "express";
import SongController from "../controllers/song.controller.js";
const router = Router();

//Add new song
router.post("/", SongController.addNewSong);
//Get all songs
router.get("/", SongController.getAllSongs);
export default router;
