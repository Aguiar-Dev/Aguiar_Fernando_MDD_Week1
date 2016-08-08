import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator
} from 'react-native';

import FirstComponent from './src/FirstComponent';
import SecondComponent from './src/SecondComponent';

class DayOne extends Component {
  render() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{
          id: 'FirstComponent'
        }}
        renderScene={this.navigatorRenderScene}
      />
    );
  }

  navigatorRenderScene(route, navigator) {
    navigator = navigator;
    switch (route.id) {
      case 'FirstComponent':
        return (<FirstComponent
                  navigator={navigator}
                  title="First Component"
                  name="Doge"
                />);
                break;
      case 'SecondComponent':
        return (<SecondComponent
                  navigator={navigator}
                  title="Second Component"
                  name="Charlie"
                  value={0}
                  maximumValue={10}
                />);
                break;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

AppRegistry.registerComponent('DayOne', () => DayOne);
