import 'react-native-gesture-handler';
import React, {Component} from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Provider} from 'react-redux';

import ErrorBoundary from './components/ErrorBoundary';
import AppNavigation from './navigation';
import store from './redux';
import setI18nConfig from './i18n';

import light from './redux/themes/mode/light';
import {StatusBar, Platform} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    //Connect translate
    setI18nConfig();

    if (Platform.OS === 'android') {
      StatusBar.setBarStyle('dark-content');
      StatusBar.setBackgroundColor('#f1f9ff');
    }
    //Connect theming
    EStyleSheet.build(light);
  }

  render() {
    return (
      <Provider store={store}>
        <ErrorBoundary>
          <AppNavigation />
        </ErrorBoundary>
      </Provider>
    );
  }
}

export default App;
