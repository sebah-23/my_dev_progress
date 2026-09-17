import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard/MovieCard";

function MyList() {
  const [myList, setMyList] = useState([]);

  useEffect(() => {
    const savedMovies = JSON.parse(localStorage.getItem("myList")) || [];

    setMyList(savedMovies);
  }, []);

  const removeFromMyList = (movieId) => {
    const updatedList = myList.filter((movie) => movie.id !== movieId);

    setMyList(updatedList);

    localStorage.setItem("myList", JSON.stringify(updatedList));
  };

  return (
    <div className="bg-[#111] min-h-screen text-white pt-28 px-6 md:px-10">

      <div className="max-w-7xl mx-auto">

        {/* Page Header */}
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold">
            My List
          </h1>

          <p className="text-gray-400 mt-3">
            Movies and shows you have saved to watch later.
          </p>
        </div>

        {/* Empty List */}
        {myList.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <h2 className="text-2xl font-semibold mb-3">
              Your list is empty
            </h2>

            <p className="text-gray-400">
              Add movies and TV shows to your list to see them here.
            </p>
          </div>
        ) : (
          <>
            {/* Number of Saved Movies */}
            <p className="text-gray-400 mb-6">
              {myList.length} {myList.length === 1 ? "item" : "items"}
            </p>

            {/* Movie Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {myList.map((movie) => (
                <div key={movie.id} className="relative group">

                  <MovieCard movie={movie} />

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromMyList(movie.id)}
                    className="absolute top-2 right-2 bg-black/80 text-white w-9 h-9 rounded-full opacity-0 group-hover:opacity-100 transition hover:bg-red-600"
                    title="Remove from My List"
                  >
                    ×
                  </button>

                </div>
              ))}
            </div>
          </>
        )}

      </div>
    </div>
  );
}

export default MyList;