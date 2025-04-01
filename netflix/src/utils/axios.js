// src/utils/axios.js
import axios from 'axios';

// Debug env loading
// console.log('[AXIOS] Environment:', {
//   base: import.meta.env.VITE_API_BASE,
//   key: import.meta.env.VITE_API_KEY ? '***LOADED***' : 'MISSING'
// });

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3"
});

// Add request debugger
// instance.interceptors.request.use(config => {
//   console.log('[AXIOS] Making request to:', config.url);
//   console.log('[AXIOS] With params:', config.params);
//   return config;
// });

export default instance;