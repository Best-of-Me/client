import axios from 'axios';

class _api {
  constructor() {
    this.service = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      withCredentials: true
    });
  }
}

const api = new _api()
export default api
