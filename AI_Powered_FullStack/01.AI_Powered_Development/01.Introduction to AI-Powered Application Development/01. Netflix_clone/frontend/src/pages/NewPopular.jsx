import MovieSection from "../components/MovieSection/MovieSection";
import { requests } from "../Services/api";

function NewPopular() {
  return (
    <div className="bg-[#111] min-h-screen text-white pt-24">

      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-8">
        <h1 className="text-4xl md:text-5xl font-bold">
          New & Popular
        </h1>

        <p className="text-gray-400 mt-3">
          Discover what's new and see what everyone is watching.
        </p>
      </div>

      {/* New & Popular Content */}
      <main>
        <MovieSection
          title="Trending Now"
          url={requests.trending}
        />

        <MovieSection
          title="New Movies"
          url={requests.newMovies}
        />

        <MovieSection
          title="Popular Movies"
          url={requests.popular}
        />

        <MovieSection
          title="Upcoming Movies"
          url={requests.upcomingMovies}
        />

        <MovieSection
          title="Popular TV Shows"
          url={requests.popularTV}
        />
      </main>
    </div>
  );
}

export default NewPopular;