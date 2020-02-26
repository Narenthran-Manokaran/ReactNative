import {Alert} from 'react-native'
import {call, put, takeLatest} from 'redux-saga/effects';

import { ActionTypes, getCoinmarketcapDetailsURL, strings } from './../constants';
import { api } from './../utils';

const fetchCoinmarketcapDetails = payload =>
  api({
    method: 'get',
    url: getCoinmarketcapDetailsURL(),
  });

function* fetchCoinmarketcapDetailsSaga({payload}) {
  try {
    yield put({type: ActionTypes.FETCH_COINMARKETCAP_DETAILS_START});
    const apiResponse = yield call(fetchCoinmarketcapDetails, payload);
    const { data = null } = apiResponse;
    if (data && data.length) {
      return yield put({
        type: ActionTypes.FETCH_COINMARKETCAP_DETAILS_SUCCESS,
        data,
      });
    }
    const e = {
      message: strings.ERROR_DEFAULT_MESSAGE,
    };
    yield put({type: ActionTypes.FETCH_COINMARKETCAP_DETAILS_ERROR, error: e});
    Alert.alert('', e.message, [{ text: strings.OK }]);
  } catch (err) {
    const e = {
      message: strings.ERROR_DEFAULT_MESSAGE,
    };
    yield put({type: ActionTypes.FETCH_COINMARKETCAP_DETAILS_ERROR, error: e});
    Alert.alert('', e.message, [{ text: strings.OK }]);
  }
}

export default function* watcherSaga() {
  yield takeLatest( ActionTypes.FETCH_COINMARKETCAP_DETAILS, fetchCoinmarketcapDetailsSaga );
}
