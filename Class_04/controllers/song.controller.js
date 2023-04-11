import SongService from "../services/song.service.js";

export default class SongController {
  static async getAllSongs(req, res) {
    try {
      const songs = await SongService.getAllSongs(req.query.title);
      res.status(200).send(songs);
    } catch {
      res.status(500).send("Error while fetching songs");
    }
  }
  static async addNewSong(req, res) {
    try {
      const song = await SongService.addNewSong(req.body);
      res.status(201).send(song);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}
