
import hero_video from '../../../assets/images/Hero-video.MOV';

function Hero() {
  return (
    <section className="relative min-h-[70vh] h-screen overflow-hidden">

      {/* Background Video */}
      <video
        src={hero_video}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white sm:px-8">

        <h1 className="max-w-4xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
          Unique Accessories, Made for You
        </h1>

        <p className="mt-4 max-w-2xl text-sm leading-relaxed sm:text-base md:text-lg">
          Discover beautiful handmade accessories designed
          to add a special touch to your style.
        </p>

        <button
          className="mt-6 rounded-lg bg-pink-300 px-5 py-3 text-sm font-semibold text-white transition hover:bg-pink-400 sm:px-6 sm:text-base"
        >
          Shop Collection
        </button>

      </div>
    </section>
  );
}

export default Hero;
