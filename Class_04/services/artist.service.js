import Artist from "../models/artists.model.js";

export default class ArtistService {
  static async getAllArtists(firstName) {
    const artists = await Artist.find({ firstName: firstName });
    return artists;
  }
  static async addNewArtist(artistData) {
    const artist = new Artist(artistData);
    const response = await artist.save();
    return response;
  }
}
