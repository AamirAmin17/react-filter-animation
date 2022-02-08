import { useEffect, useState } from "react";
import "./App.css";
import Movies from "./components/Movies";
import FilterButtons from "./components/FilterButtons";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState<number>(0);
  const fetchPopularMovies = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US&page=1`
    );
    const movies = await data.json();
    setPopular(movies.results);
    setFiltered(movies.results);
  };
  useEffect(() => {
    fetchPopularMovies();
  }, []);
  return (
    <div className='App'>
      <FilterButtons
        popular={popular}
        setFiltered={setFiltered}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />
      <motion.div layout className='popular-movies'>
        <AnimatePresence>
          {filtered?.map((movie) => (
            <Movies key={movie.id} movie={movie} />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default App;
