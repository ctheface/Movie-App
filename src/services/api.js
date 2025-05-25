const API_KEY="f1d349af5322a8d8918849523d096b3c";
const BASE_URL="https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
    const response= await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data= await response.json();
    return data.results;
}

export const searchMovies = async (query) => {
    const response= await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data= await response.json();
    return data.results;
}
