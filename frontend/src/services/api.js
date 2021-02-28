import axios from 'axios';

const api = axios.create({
  baseUrl: 'http://localhost:4141',
});

export default api;