import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/';

class MoradorService {
    getMoradorInfo(email) {
        return axios.get(API_URL + 'moradores/user/' + email, { headers: authHeader() });
      }
}

export default new MoradorService();