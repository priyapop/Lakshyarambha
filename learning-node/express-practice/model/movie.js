import mongoose from "mongoose";
const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
  },
  ratings: 
    {
      type: Number,
      min: 1,
      max: 5,
    },
  
  releaseDate: {
    type: Date,
  },
  cast: 
    {
      type: [String],
    },
  
});

const Movie = mongoose.model("Movie", movieSchema);
export default Movie;
