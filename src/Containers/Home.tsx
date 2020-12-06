import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Button from '../Components/button';
import InputField from '../Components/inputField';
import {Metrics} from '../Themes';

const Home = () => {
  const [favorite, setFavorite] = useState(null);
  return (
    <View style={styles.container}>
      <InputField
        value={favorite}
        onChangeValue={(value) => setFavorite(value)}
      />
      <View style={styles.buttonContainer}>
        <Button onPress={() => console.log('hello')}>Explore</Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
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

export default Home;
