import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './style';

export default QuoteList = ({ data, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress(data)} style={styles.listContainer}>
      {data.name ? <Text style={styles.flex1}>{data.name.toUpperCase()}</Text> : null}
      {data.num_market_pairs ? <Text style={styles.listText}>{`${data.num_market_pairs}`}</Text> : null}
    </TouchableOpacity>
  )
}