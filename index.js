import 'react-native-gesture-handler';
import React from 'react';
import {AppRegistry, LogBox} from 'react-native';
import {Provider} from 'react-redux';
import {store, persistor} from './src/Store/store';
import {PersistGate} from 'redux-persist/lib/integration/react';

import App from './src/App';

LogBox.ignoreLogs(['']);

class RNBase extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    );
  }
}

LogBox.ignoreLogs(['']);

AppRegistry.registerComponent('weatherapp', () => RNBase);
