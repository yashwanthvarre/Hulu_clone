const API_KEY = "<Your_key>";


export default {
    fetchTrending : `/trending/all/week?api_key = ${API_KEY}&language=en-US`,
    fetchTopRated : `/movie/top_rated/api_key = ${API_KEY}&language=en-US`,
    fetchActionMovies : `/discover/movie?api_key = ${API_KEY}&with_genres=28`,
    fetchComedeyMovies : `/discover/all/week?api_key = ${API_KEY}&with_genres=35`,
    fetchHorrorMovies :`/discover/all/week?api_key = ${API_KEY}&with_genres=27`,
    fetchRomanceMovies : `/discover/all/week?api_key = ${API_KEY}&with_genres=10749`,
    fetchMystery : `/discover/all/week?api_key = ${API_KEY}&with_genres=9648`,
    fetchSciFi :`/discover/all/week?api_key = ${API_KEY}&with_genres=878`,
    fetchWestern :`/discover/all/week?api_key = ${API_KEY}&with_genres=37`,
    fetchAnimation : `/discover/all/week?api_key = ${API_KEY}&with_genres=16`,
    fetchTV : `/discover/all/week?api_key = ${API_KEY}&with_genres=10770`,

}