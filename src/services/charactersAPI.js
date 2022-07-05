import axios from 'axios';

require('dotenv').config();

class CharactersService {
  constructor({ url = process.env.REACT_APP_HAWKINS_URL,
    timeout = Number(process.env.REACT_APP_HAWKINS_TIMEOUT) }) {
    this.http = axios.create({
      baseURL: url,
      timeout,
    });
  }

  async getCharacters(name, page, size) {
    const params = {
      page,
      size,
      name,
    };

    return this.http.get('/', { params });
  }
}

export default CharactersService;
