/* eslint-disable comma-dangle */
import { AxiosAdapter } from './http/axios.adapter';


export const movieDBFetcher = new AxiosAdapter({
  baseUrl: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '998c910fc040d38d4edd7f3b4fbf48cf',
    language: 'es'
  }
});
