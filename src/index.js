import React, {Component} from 'react';
import {Provider} from 'react-redux';
import App from './routes';
import { setNavigator, store } from './utils';


export default class Apps extends Component {
  
  componentDidMount() {
    setNavigator(this.navigator);
  }

  render() {
    return (
      <Provider store={store}>
        <App ref={nav => { this.navigator = nav; }} />
      </Provider>
    );
  }
}
