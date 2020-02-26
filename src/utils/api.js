import axios from 'axios';
import WebService from './webService';

import { strings } from './../constants';

const fetchResponse = config => {
  const abort = axios.CancelToken.source();
  const id = setTimeout(
    () => abort.cancel(strings.TIME_OUT),
    config.timeout || 60000,
  );
  const webService = WebService.getInstance();
  return webService({cancelToken: abort.token, ...config})
    .then(response => {
      clearTimeout(id);
      const {data} = response;
      return data;
    })
    .catch(error => {
      clearTimeout(id);
      return error;
    });
};

export const api = config => fetchResponse(config);
