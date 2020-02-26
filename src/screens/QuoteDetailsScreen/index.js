import React, { Component } from 'react';
import { Text, View } from 'react-native';

import { strings } from './../../constants';
import { QuoteDetails } from './../../components';
import styles from './style';

export default class QuoteDetailsScreen extends Component {
  constructor(props) {
    super(props);
    const { navigation } = props
    const screenData = navigation.getParam('payload');
    this.state = {
      screenData: screenData,
      conversionType: strings.USD,
    };
  }

  renderTemplate = () => {
    const { screenData, conversionType } = this.state
    return (
      <QuoteDetails data={screenData} conversionType={conversionType}/>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderTemplate()}
      </View>
    );
  }
}