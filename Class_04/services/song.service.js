import Song from "../models/songs.model.js";

export default class SongService {
  static async getAllSongs(title) {
    const songs = await Song.find({ title: title });
    return songs;
  }
  static async addNewSong(songData) {
    const song = new Song(songData);
    const response = await song.save();
    return response;
  }
}
