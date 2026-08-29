import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import MovieSection from "./components/MovieSection";
import Footer from "./components/Footer/Footer";

import { requests } from "./Services/api";

function App() {
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

export default App;