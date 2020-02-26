import { ActionTypes } from './../constants';

export const fetchCoinmarketcapDetails = payload => ({
  type: ActionTypes.FETCH_COINMARKETCAP_DETAILS,
  payload,
});
