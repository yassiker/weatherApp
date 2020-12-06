import React, {ReactElement} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Metrics, Colors} from '../Themes';

type Props = {
  item: any;
};
const NewsCard = ({item}: Props): ReactElement => {
  return (
    <View style={styles.container}>
      <Text>{item.matching_full_name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    backgroundColor: Colors.weeWhite,
    borderRadius: 10,
    height: Metrics.screenHeight / 3,
  },
  entryInput: {
    borderWidth: 1,
    borderColor: 'black',
    width: '100%',
    borderRadius: 4,
    minHeight: 50,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    margin: Metrics.baseMargin,
  },
});

export default NewsCard;
