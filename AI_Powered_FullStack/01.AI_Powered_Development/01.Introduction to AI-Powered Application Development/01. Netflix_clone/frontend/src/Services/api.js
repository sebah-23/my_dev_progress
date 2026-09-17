const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const BASE_URL = "https://api.themoviedb.org/3";

export const requests = {
  trending: `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`,

  popular: `${BASE_URL}/movie/popular?api_key=${API_KEY}`,

  action: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`,

  comedy: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`,

  horror: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`,

  romance: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10749`,

  animation: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=16`,

  documentaries: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=99`,

  tvPopular: `${BASE_URL}/tv/popular?api_key=${API_KEY}`,

  tvAction: `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=10759`,

  tvComedy: `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=35`,

  tvDrama: `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=18`,

  tvAnimation: `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=16`,

  tvDocumentaries: `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=99`,

  newMovies: `${BASE_URL}/movie/now_playing?api_key=${API_KEY}`,

  upcomingMovies: `${BASE_URL}/movie/upcoming?api_key=${API_KEY}`,

  popularTV: `${BASE_URL}/tv/popular?api_key=${API_KEY}`,
};