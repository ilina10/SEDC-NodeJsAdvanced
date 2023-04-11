import { Schema, model } from "mongoose";
const songSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  artist: {
    type: String,
    required: true,
  },
  positionOnBilboardHits: {
    type: Number,
    required: true,
    min: 1,
  },
});

const Song = model("Song", songSchema);
export default Song;
