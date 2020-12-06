import React from 'react';
import {StyleSheet, FlatList, SafeAreaView} from 'react-native';
import {Metrics, Colors} from '../Themes';
import NewsCard from '../Components/newsCard';
// import {selectCityForecasts} from '../Store/Wheather/selectors';
import {selectCities} from '../Store/Teleport/selectors';
import {useSelector} from 'react-redux';

const News = () => {
  const renderItem = ({item}) => <NewsCard item={item} />;
  // const citrForecasts = useSelector(selectCityForecasts());
  const cities = useSelector(selectCities());
  console.log(cities?._embedded['city:search-results']);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={cities?._embedded['city:search-results']}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: Colors.eMoney.weeAqua,
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

export default News;
