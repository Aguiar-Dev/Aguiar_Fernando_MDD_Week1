import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Slider,
  Image,
} from 'react-native';

export default class SecondComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: this.props.value,
      maximumValue: this.props.maximumValue,
    }
  }
  onButtonPress(){
    this.props.navigator.pop();
  }
  render(){
    console.log(this.props);
    return(
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image style={[styles.child, styles.image]} source={require('../img/Dogee.jpg')} />
          <Image style={[styles.child, styles.image]} source={require('../img/Dogee.jpg')} />
          <Image style={[styles.child, styles.image]} source={require('../img/Dogee.jpg')} />
          <Image style={[styles.child, styles.image]} source={require('../img/Dogee.jpg')} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            How Many Doges can you count? {'\n'}
            {this.state.value.toFixed(0)}
          </Text>
        </View>
        <View style={styles.sliderContainer}>
          <Slider
            {...this.props}
            onValueChange={(value) => this.setState({value: value})} />
        </View>
        <TouchableHighlight style={styles.btn} onPress={this.onButtonPress.bind(this)}>
          <Text style={styles.btnText}>Go Back To First Component</Text>
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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
  },
  imgContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    borderColor: '#125482',
  },
  child: {
    borderWidth: 3,
    width: 70,
    height: 70,
  },
  btn: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#125482',
  },
  btnText: {
    color: '#F6F5F4',
  },
  sliderContainer: {
    flex: 1,
    justifyContent: 'space-between',
  }
});


SecondComponent.propTypes = {
  name: React.PropTypes.string.isRequired
}
