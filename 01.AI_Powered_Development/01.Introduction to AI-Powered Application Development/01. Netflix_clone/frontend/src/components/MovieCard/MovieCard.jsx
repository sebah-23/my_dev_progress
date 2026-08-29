function MovieCard({ movie }) {
  const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="min-w-[180px] md:min-w-[220px]">
      <img
        src= {`${IMAGE_URL}${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-[270px] object-cover rounded-lg"
      />

      <h3 className="text-white font-semibold mt-2 truncate">
        {movie.title}
      </h3>
    </div>
  );
}

export default MovieCard;