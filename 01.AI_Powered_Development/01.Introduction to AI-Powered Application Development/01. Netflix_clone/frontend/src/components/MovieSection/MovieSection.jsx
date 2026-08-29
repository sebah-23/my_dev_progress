import { useEffect, useRef, useState } from "react";
import MovieCard from "./MovieCard";

function MovieSection({ title, url }) {
  const [movies, setMovies] = useState([]);

  const sliderRef = useRef(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(title, data);
        setMovies(data.results || []);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  }, [url, title]);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -500,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 500,
      behavior: "smooth",
    });
  };

  return (
    <section className="px-6 md:px-10 py-6">

      <div className="flex items-center justify-between mb-4">

        <h2 className="text-white text-2xl md:text-3xl font-bold">
          {title}
        </h2>

        <div className="flex gap-2">

          <button
            onClick={scrollLeft}
            className="bg-white/20 hover:bg-white/40 text-white w-9 h-9 rounded-full"
          >
            ←
          </button>

          <button
            onClick={scrollRight}
            className="bg-white/20 hover:bg-white/40 text-white w-9 h-9 rounded-full"
          >
            →
          </button>

        </div>

      </div>

      <div
        ref={sliderRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide"
      >
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
          />
        ))}
      </div>

    </section>
  );
}

export default MovieSection;