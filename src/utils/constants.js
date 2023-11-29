export const logo = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"

export const userIcon = "https://occ-0-1492-3662.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY20DrC9-11ewwAs6nfEgb1vrORxRPP9IGmlW1WtKuaLIz8VxCx5NryzDK3_ez064IsBGdXjVUT59G5IRuFdqZlCJCneepU.png?r=229"

export const photoURL = "https://example.com/jane-q-user/profile.jpg"

export const BACKGROUND_IMG = "https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/f5b52435-458f-498f-9d1d-ccd4f1af9913/IN-en-20231023-popsignuptwoweeks-perspective_alpha_website_medium.jpg"

export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+ process.env.REACT_APP_TMDB_KEY
    }
  };

export const NOWPLAYINGMOVIE_API = "https://api.themoviedb.org/3/movie/now_playing?page=1"

export const POPULARMOVIE_API = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"

export const TOPRATEDMOVIE_API = "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1"

export const UPCOMINGMOVIES_API = "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1"

export const YOUTUBE_EMBED_LINK = "https://www.youtube.com/embed/"

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500"

export const SUPPORTED_LANGUAGES = [
  { identifier:"en", name:"English"},
  { identifier:"hindi", name:"Hindi"},
  { identifier:"spanish", name:"Spanish"}
];


  