import express from 'express'
import { createMovie,getMovies,getMoviesById,getMoviesByGenre,updateMovies,deleteMovie} from '../controller/movieController.js'
const router = express.Router()
router.post("/createmovie",createMovie)
router.get("/getmovie",getMovies)
router.get("/getmovie/:id",getMoviesById)
router.get("/getmovie/genre/:gg",getMoviesByGenre)
router.put("/updatemovies/:id",updateMovies)
router.delete("/deletemovies/:id",deleteMovie)
 export default router