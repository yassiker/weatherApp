import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
// import HomeScreen from './Containers/Home';
import SettingsScreen from './Containers/Settings';
import NewsScreen from './Containers/News';
import {useDispatch} from 'react-redux';
import Actions from './Store/Wheather/actions';
import TeleportActions from './Store/Teleport/actions';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  const dispatch = useDispatch();

  dispatch(Actions.getCityForecastRequest());
  dispatch(TeleportActions.getCitiesRequest());
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="News" component={NewsScreen} />
        {/* <Tab.Screen name="Home" component={HomeScreen} /> */}
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
