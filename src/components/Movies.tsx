import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { motion } from "framer-motion";
type MovieType = {
  title: string;
  backdrop_path: string;
};
const Movies = ({ movie }: { movie: MovieType }) => {
  const allMovies: MovieType = movie;

  return (
    <motion.div
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      initial={{ opacity: 1 }}
      layout
      className="movies"
    >
      <h2>{allMovies.title}</h2>
      <LazyLoadImage
        src={`https://image.tmdb.org/t/p/w500${allMovies.backdrop_path}`}
        alt=""
        className="images"
        effect="blur"
      />
    </motion.div>
  );
};

export default Movies;
