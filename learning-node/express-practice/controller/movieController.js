import Movie from "../model/movie.js";
export const createMovie = async (req, res) => {
  try {
    const movie = await Movie.create(req.body);
    res.status(201).json(movie);
  } catch (err) {
    res.status(500).json({
      error: err.message,
    })
  }
}
export const getMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
  } catch (err) {
    res.status(500).json({
      error: err.message,
    })
  }
}
export const getMoviesById = async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await Movie.findById(id);

    if (!movie) {
      return res.status(404).json({ message: "movie not found" });
    }

    res.status(200).json(movie);
  } catch (err) {
    res.status(500).json({
      error: err.message,
    })
  }
}
export const getMoviesByGenre = async (req, res) => {
  try {
    const { gg} = req.params;
    const movie = await Movie.find({genre:gg});

    if (!movie) {
      return res.status(404).json({ message: "movie not found" });
    }

    res.status(200).json(movie);
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
}
export const updateMovies = async (req,res)=>{
  try{
const {id}= req.params
const movie = await Movie.findByIdAndUpdate(id,req.body, {
      new: true, 
      runValidators: true, 
    })
        if (!movie) {
      return res.status(404).json({ message: "movie not found" });
    }
    res.status(200).json(movie);
  }
  catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
}
export const deleteMovie = async (req, res) => {
  try {
    const { id } = req.params
    const movie = await Movie.findByIdAndDelete(id);

    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }

    res.status(200).json({ message: "Movie deleted successfully" });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};