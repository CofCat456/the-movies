import { Lang } from '@/interface';

const API_KEY = '0aadf6d9ac9fda1ba703d783760e718a';

export const imagePath = 'https://image.tmdb.org/t/p/original';

const Popular_Url = 'https://api.themoviedb.org/3/movie/popular';
const Detail_Url = 'https://api.themoviedb.org/3/movie';

export const getPopularApi = (lang: Lang) =>
  fetch(`${Popular_Url}?api_key=${API_KEY}&language=${lang}`);
export const getDetailApi = (id: number) => fetch(`${Detail_Url}/${id}?api_key=${API_KEY}`);
