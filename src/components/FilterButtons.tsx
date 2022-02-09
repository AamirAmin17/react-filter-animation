import React, { useEffect } from "react";
interface filterButtonInterface {
  setActiveGenre: any;
  activeGenre: number;
  setFiltered: any;
  popular: any;
}
const FilterButtons = ({
  setActiveGenre,
  activeGenre,
  setFiltered,
  popular,
}: filterButtonInterface) => {
  useEffect(() => {
    if (activeGenre === 0) return setFiltered(popular);
    const filtered = popular.filter((movie: any) =>
      movie.genre_ids.includes(activeGenre)
    );
    setFiltered(filtered);
  }, [activeGenre]);
  return (
    <div className="filter-container">
      <button
        className={activeGenre === 0 ? "active" : ""}
        onClick={() => setActiveGenre(0)}
      >
        All
      </button>
      <button
        className={activeGenre === 35 ? "active" : ""}
        onClick={() => setActiveGenre(35)}
      >
        Comedy
      </button>
      <button
        className={activeGenre === 28 ? "active" : ""}
        onClick={() => setActiveGenre(28)}
      >
        Action
      </button>
      <button
        className={activeGenre === 12 ? "active" : ""}
        onClick={() => setActiveGenre(12)}
      >
        Adventure
      </button>
    </div>
  );
};

export default FilterButtons;
