import {StyleSheet} from 'react-native';
import { colors } from './../../constants';

export default StyleSheet.create({
  detailsContainer: {
    backgroundColor: colors.WHITE,
    margin: 20,
    padding: 16,
    borderRadius: 6,
  },
  detailsTitleText: {
    fontSize: 20,
    marginVertical: 15,
  },
  detailsDescText: {
    fontSize: 15,
    color: colors.DESC_TEXT,
    marginBottom: 10,
  }
});
