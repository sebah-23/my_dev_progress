import { useEffect, useState } from "react";
import { useParams ,useNavigate} from "react-router-dom";


function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState(null);

  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovie(data);
      })
      .catch((error) => {
        console.error("Error fetching movie details:", error);
      });
  }, [id, API_KEY]);

  if (!movie) {
    return (
      <div className="min-h-screen bg-[#111] text-white flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  const BACKDROP_URL = "https://image.tmdb.org/t/p/original";
  const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="min-h-screen bg-[#111] text-white">

      {/* Background */}
      <div
        className="relative min-h-[650px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${BACKDROP_URL}${movie.backdrop_path})`,
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-20">
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">

            {/* Movie Poster */}
            <img
              src={`url(${IMAGE_URL}${movie.poster_path})`}
              alt={movie.title}
              className="w-[250px] rounded-lg shadow-lg"
            />
           <button onClick={() => navigate(-1)} className="mb-6 bg-white/20 hover:bg-white/30 text-white px-5 py-2 rounded" >
            ← Back
           </button>
            {/* Movie Information */}
            <div className="max-w-2xl">

              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {movie.title}
              </h1>

              <p className="text-gray-300 mb-4">
                {movie.overview}
              </p>

              <div className="space-y-2 text-gray-300">
                <p>
                  <span className="font-bold text-white">
                    Release Date:
                  </span>{" "}
                  {movie.release_date}
                </p>

                <p>
                  <span className="font-bold text-white">
                    Rating:
                  </span>{" "}
                  ⭐ {movie.vote_average?.toFixed(1)}
                </p>

                <p>
                  <span className="font-bold text-white">
                    Runtime:
                  </span>{" "}
                  {movie.runtime} minutes
                </p>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 mt-6">
                <button className="bg-white text-black px-6 py-3 rounded font-bold hover:bg-gray-300">
                  ▶ Play
                </button>

                <button className="bg-gray-600/80 text-white px-6 py-3 rounded font-bold hover:bg-gray-600">
                  + My List
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;