import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Switch,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';


export default class FirstComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switchIsOn: false,
      text: 'Type in here!',
    }
  }
  onButtonPress(){
    this.props.navigator.push({
      id: 'SecondComponent',
    })
  }
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Text style={styles.welcome}>
            {this.props.name} App
          </Text>
          <TouchableOpacity onPress={this._onPressButton}>
            <Image style={styles.image} source={require('../img/Dogee.jpg')} />
          </TouchableOpacity>
        </View>
        <View style={styles.comContainer}>
          <View style={styles.switch}>
            <Text style={styles.basic}>
              Touch Doge Picture for Touchable Opcacity.{'\n\n'}
              Much Switch. Very Switch.
            </Text>
            <Switch
              onValueChange={(value) => this.setState({switchIsOn: value})}
              style={{marginBottom: 10}}
              value={this.state.switchIsOn} />
          </View>
          <TextInput
            style={styles.input}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
        </View>
        <TouchableHighlight style={styles.btn} onPress={this.onButtonPress.bind(this)}>
          <Text style={styles.btnText}>
            Go To Second Component
          </Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F5F4',
  },
  textContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgContainer: {
    flex: 2,
    marginTop: 50,
    alignItems: 'center',
  },
  comContainer: {
    flex: 1,
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  basic: {
    textAlign: 'center',
    color: '#333333',
    padding: 5,
    marginBottom: 5,
  },
  image: {
    borderRadius: 90,
  },
  input: {
    textAlign: 'center',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  },
  btn: {
    flex: 1,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#125482',
  },
  btnText: {
    color: '#F6F5F4',
  },
  switch: {
    alignItems: 'center',
  }
});

// If not using `exports default`
// module.exports = 'ComponentName';
