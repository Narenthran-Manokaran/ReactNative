import React from 'react';
import { View, Text } from 'react-native';

import { strings } from './../../constants'
import styles from './style';

export default QuoteDetails = ({ data, conversionType }) => {
  const { quote = null } = data
  return (
    <View style={styles.detailsContainer}>
      <Text style={styles.detailsTitleText}>
        {`${data.name} ${strings.QUOTE}`}
      </Text>
      {data.max_supply ?
        <Text style={styles.detailsDescText}>
          {`${strings.MAX_SUPPLY}: ${data.max_supply}`}
        </Text>
        : null}
      <Text style={styles.detailsDescText}>
        {`${strings.CIRCULATING_SUPPLY}: ${data.circulating_supply.toFixed(2)}`}
      </Text>
      <Text style={styles.detailsDescText}>
        {`${strings.TOTAL_SUPPLY}: ${data.total_supply.toFixed(2)}`}
      </Text>
      <Text style={styles.detailsDescText}>
        {`${strings.PRICE}: ${conversionType} ${quote[conversionType].price.toFixed(2)}`}
      </Text>
      <Text style={styles.detailsDescText}>
        {`${strings.VOLUME_24_HOURS}: ${quote[conversionType].volume_24h.toFixed(2)}`}
      </Text>
      <Text style={styles.detailsDescText}>
        {`${strings.CHANGE_PER_1_HOUR}: ${conversionType} ${quote[conversionType].percent_change_1h.toFixed(2)}`}
      </Text>
      <Text style={styles.detailsDescText}>
        {`${strings.CHANGE_PER_24_HOURS}: ${conversionType} ${quote[conversionType].percent_change_24h.toFixed(2)}`}
      </Text>
      <Text style={styles.detailsDescText}>
        {`${strings.CHANGE_PER_7_DAYS}: ${conversionType} ${quote[conversionType].percent_change_7d.toFixed(2)}`}
      </Text>
      <Text style={styles.detailsDescText}>
        {`${strings.MARKET_CAP}: ${quote[conversionType].market_cap.toFixed(2)}`}
      </Text>
    </View>
  )
}