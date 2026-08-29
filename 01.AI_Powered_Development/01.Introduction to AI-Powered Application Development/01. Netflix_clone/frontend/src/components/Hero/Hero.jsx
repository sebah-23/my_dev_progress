import { useEffect, useState } from "react";
import { requests } from "../../Services/api";

function Hero() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(requests.trending)
      .then((response) => response.json())
      .then((data) => {
        const movies = data.results;

        const randomMovie =
          movies[Math.floor(Math.random() * movies.length)];

        setMovie(randomMovie);
      })
      .catch((error) => {
        console.error("Hero error:", error);
      });
  }, []);

  if (!movie) {
    return (
      <div className="h-[600px] bg-black flex items-center justify-center text-white">
        Loading...
      </div>
    );
  }

  const BACKDROP_URL =
    "https://image.tmdb.org/t/p/original";

  return (
    <section
      className="relative h-[600px] bg-cover bg-center"
      style={{
        backgroundImage: `url(${BACKDROP_URL}${movie.backdrop_path})`,
      }}
    >

      <div className="absolute inset-0 bg-black/50"></div>


      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">

        <div className="max-w-xl text-white">

          <h1 className="text-4xl md:text-6xl font-bold mb-5">
            {movie.title}
          </h1>

          <p className="text-gray-200 text-sm md:text-base leading-relaxed mb-6">
            {movie.overview}
          </p>

          <div className="flex gap-4">

            <button className="bg-white text-black px-6 py-3 rounded font-bold hover:bg-gray-300">
              ▶ Play
            </button>

            <button className="bg-gray-600/80 text-white px-6 py-3 rounded font-bold hover:bg-gray-600">
              + My List
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;