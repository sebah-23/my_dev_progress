import MovieSection from "../components/MovieSection/MovieSection";
import { requests } from "../services/api";

function Movies() {
  return (
    <div className="bg-[#111] min-h-screen text-white pt-24">
      
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-8">
        <h1 className="text-4xl md:text-5xl font-bold">
          Movies
        </h1>

        <p className="text-gray-400 mt-3">
          Explore popular movies and discover something new to watch.
        </p>
      </div>

      {/* Movie Sections */}
      <main>
        <MovieSection
          title="Popular Movies"
          url={requests.popular}
        />

        <MovieSection
          title="Action Movies"
          url={requests.action}
        />

        <MovieSection
          title="Comedy Movies"
          url={requests.comedy}
        />

        <MovieSection
          title="Horror Movies"
          url={requests.horror}
        />

        <MovieSection
          title="Romance Movies"
          url={requests.romance}
        />

        <MovieSection
          title="Animation"
          url={requests.animation}
        />

        <MovieSection
          title="Documentaries"
          url={requests.documentaries}
        />
      </main>
    </div>
  );
}

export default Movies;