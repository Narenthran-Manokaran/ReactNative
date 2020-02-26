import {StyleSheet} from 'react-native';
import { colors } from './../../constants';

export default StyleSheet.create({
  flex1: {
    flex: 1,
  },
  listContainer: {
    padding: 16,
    backgroundColor: colors.WHITE,
    borderRadius: 6,
    marginBottom: 2,
    flexDirection: 'row',
  },
  listText: {
    color: colors.PRIMARY_TEXT,
  },
});
