import axios from 'axios';
import { BaseURL } from './../constants';

export default class WebService {
  static webService = null;

  static getInstance() {
    this.webService = axios.create({
      baseURL: 'https://pro-api.coinmarketcap.com/v1',
      headers: {
        'X-CMC_PRO_API_KEY': 'cfa009fb-38b4-4780-a611-6453a0933a57',
      },
    });

    return this.webService;
  }
}
