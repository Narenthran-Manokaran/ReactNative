import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import styles from './style';
import { colors } from './../../constants';

export default Loader = ({ isLoading }) => {
  if (isLoading === true) {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color={colors.ROYAL_BLUE} />
      </View>
    )
  }
  return null;
}