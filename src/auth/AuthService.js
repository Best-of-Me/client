import axios from 'axios';

class AuthService {
  constructor() {
    this.service = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      withCredentials: true
    });
  }

  signup = (username, password) => {
    return this.service.post('/signup', {username, password})
    .then(response => response)
    .catch(error=>error.response)
  }

  login = (username, password) => {
    return this.service.post('/login', {username, password})
    .then(response => response)
    .catch(error=>error.response)
  }

  loggedin = () => {
    return this.service.get('/currentUser',)
    .then(response => response)
    .catch(error=>error.response)
  }

  logout = () => {
    return this.service.get('/logout',)
    .then(response => response)
    .catch(error=>error.response)
  }
}

export default AuthService;