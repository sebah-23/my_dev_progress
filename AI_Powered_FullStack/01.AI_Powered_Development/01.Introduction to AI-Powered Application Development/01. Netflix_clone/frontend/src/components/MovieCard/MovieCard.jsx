import { useState } from "react";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

  const [saved, setSaved] = useState(() => {
    const savedMovies = JSON.parse(localStorage.getItem("myList")) || [];

    return savedMovies.some((item) => item.id === movie.id);
  });

  const addToMyList = () => {
    const savedMovies = JSON.parse(localStorage.getItem("myList")) || [];

    const movieExists = savedMovies.some(
      (item) => item.id === movie.id
    );

    if (movieExists) {
      return;
    }

    const updatedList = [...savedMovies, movie];

    localStorage.setItem("myList", JSON.stringify(updatedList));

    setSaved(true);
  };

  return (
    <div className="min-w-[180px] md:min-w-[220px] relative group">

      {/* Movie Details Link */}
      <Link to={`/movie/${movie.id}`}>
        <img
          src={`${IMAGE_URL}${movie.poster_path}`}
          alt={movie.title || movie.name}
          className="w-full h-[270px] object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
        />

        <h3 className="text-white font-semibold mt-2 truncate">
          {movie.title || movie.name}
        </h3>
      </Link>

      {/* Add to My List Button */}
      <button
        onClick={addToMyList}
        className="absolute top-2 right-2 bg-black/80 text-white w-9 h-9 rounded-full opacity-0 group-hover:opacity-100 transition hover:bg-red-600"
        title={saved ? "Already in My List" : "Add to My List"}
      >
        {saved ? "✓" : "+"}
      </button>

    </div>
  );
}

export default MovieCard;