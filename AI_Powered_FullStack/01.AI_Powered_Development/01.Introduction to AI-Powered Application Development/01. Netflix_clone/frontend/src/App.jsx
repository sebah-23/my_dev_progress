import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import MovieSection from "./components/MovieSection/MovieSection";
import Footer from "./components/Footer/Footer";

import Movies from "./pages/Movies";
import TVShows from "./pages/TvShows";

import { requests } from "./Services/api";

function Home() {
  return (
    <div className="bg-[#111] min-h-screen">
      <Header />

      <Hero />

      <main className="pt-6">
        <MovieSection
          title="Trending Now"
          url={requests.trending}
        />

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

      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Movies Page */}
        <Route path="/movies" element={<Movies />} />

        {/* TV Shows Page */}
        <Route path="/tv-shows" element={<TVShows />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;