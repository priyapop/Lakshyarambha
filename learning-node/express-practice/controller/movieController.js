import Movie from "../model/movie.js";
export const createMovie = async (req, res) => {
  try {
    const movie = await Movie.create(req.body);
    res.status(201).json(movie);
  } catch(err) {
    res.status(500).json({
      error: err.message,
    });
  }
};
