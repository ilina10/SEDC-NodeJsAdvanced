import ArtistService from "../services/artist.service.js";

export default class ArtistController {
  static async getAllArtists(req, res) {
    try {
      const artists = await ArtistService.getAllArtists(req.query.firstName);
      res.status(200).send(artists);
    } catch {
      res.status(500).send("Error while fetching artists");
    }
  }
  static async addNewArtist(req, res) {
    try {
      const artist = await ArtistService.addNewArtist(req.body);
      res.status(201).send(artist);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}
