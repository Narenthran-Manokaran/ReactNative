import {fork} from 'redux-saga/effects';

import coinmarketcapDetails from './coinmarketcapDetails';

export default function* rootSaga() {
  yield fork(coinmarketcapDetails);
}
