import { ActionTypes } from './../constants';

const initialState = {
  isLoading: false,
  isError: false,
  errorMsg: '',
  data: [],
};

const coinmarketcapDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_COINMARKETCAP_DETAILS_START:
      return {
        ...state,
        isLoading: true,
        data: [],
      };
    case ActionTypes.FETCH_COINMARKETCAP_DETAILS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.data,
      };
    case ActionTypes.FETCH_COINMARKETCAP_DETAILS_ERROR:
      return {
        ...state,
        isLoading: false,
        data: [],
      };
    default:
      return {
        ...state,
        isLoading: false,
        data: [],
      };
  }
};

export default coinmarketcapDetailsReducer;
