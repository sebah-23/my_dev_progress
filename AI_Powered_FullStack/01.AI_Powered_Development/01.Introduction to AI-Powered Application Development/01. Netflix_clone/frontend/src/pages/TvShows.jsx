
import MovieSection from "../components/MovieSection/MovieSection";
import { requests } from "../Services/api";

function TVShows() {
  return (
    <div className="bg-[#111] min-h-screen text-white pt-24">

      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-8">
        <h1 className="text-4xl md:text-5xl font-bold">
          TV Shows
        </h1>

        <p className="text-gray-400 mt-3">
          Explore popular TV shows and discover your next favorite series.
        </p>
      </div>

      {/* TV Show Sections */}
      <main>
        <MovieSection
          title="Popular TV Shows"
          url={requests.tvPopular}
        />

        <MovieSection
          title="Action & Adventure"
          url={requests.tvAction}
        />

        <MovieSection
          title="Comedy Shows"
          url={requests.tvComedy}
        />

        <MovieSection
          title="Drama Shows"
          url={requests.tvDrama}
        />

        <MovieSection
          title="Animation"
          url={requests.tvAnimation}
        />

        <MovieSection
          title="Documentaries"
          url={requests.tvDocumentaries}
        />
      </main>
    </div>
  );
}

export default TVShows;