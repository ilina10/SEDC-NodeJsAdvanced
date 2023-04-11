import { Schema, model } from "mongoose";
const artistSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
    min: 1,
  },
  gender: {
    type: String,
    required: true,
  },
});

const Artist = model("Artist", artistSchema);
export default Artist;
