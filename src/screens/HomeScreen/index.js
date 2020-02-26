import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

import { fetchCoinmarketcapDetails } from './../../actions';
import { screens } from './../../constants'
import { QuoteList, Loader } from './../../components'
import { navigate } from './../../utils'
import styles from './style';

class HomeScreen extends Component {
  componentDidMount = () => {
    const { fetchCoinmarketcapDetails } = this.props;
    fetchCoinmarketcapDetails();
  }

  navigateScreen = (item) => {
    navigate(screens.QUOTE_DETAILS_SCREEN, {
      payload: item,
    });
  }

  renderTemplate = (item) => {
    return (
      <QuoteList data={item} onPress={this.navigateScreen} />
    )
  }

  render() {
    const { coinmarketcapDetails } = this.props;
    return (
      <View style={styles.container}>
        {coinmarketcapDetails.data && coinmarketcapDetails.data.length ?
          <FlatList
            data={coinmarketcapDetails.data}
            renderItem={({ item }) => this.renderTemplate(item)}
            keyExtractor={item => `${item.id}`}
            showsVerticalScrollIndicator={false}
          />
          : null}
        <Loader isLoading={coinmarketcapDetails.isLoading} />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    coinmarketcapDetails: state.coinmarketcapDetails,
  };
};

const mapDispatchToProps = {
  fetchCoinmarketcapDetails: fetchCoinmarketcapDetails,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen);
