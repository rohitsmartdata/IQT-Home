import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Keyboard,
  Dimensions,
  TextInput,
  FlatList,
  AsyncStorage,
  Image,
  ImageBackground,
  ScrollView,
  NativeModules
} from 'react-native'
const { height, width } = Dimensions.get('window')
const WINDOW_WIDTH = Dimensions.get('window').width
const WINDOW_HEIGHT = Dimensions.get('window').height
export class AppTitle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      abc: 'a',
      lol: '',
      abc: '',
      languageModal: false,
      batteryLevel: null
    }
  }

  componentDidMount() {
    NativeModules.BatteryStatus.test(info => {
      // 0 unknown, 1 unplegged, 2 charging, 3 full

      const level = Math.ceil(info.state)
      if (level == 1) {
        NativeModules.BatteryStatus.updateBatteryLevel(info => {
          //console.log(i fo.level)
          const level = Math.ceil(info.level)
          if (level <= -30) {
            //alert('Battery low.Please connect to power socket.')
          } else if (level <= 30) {
            alert(strings.lowBattery)
          } else {
            // alert("----------"+level)
          }
          this.setState({ batteryLevel: level })
        })
      }
    })
  }
  render() {
    return (
      <View style={{ alignItems: 'center' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image style={{}} source={require('../images/vector1.png')} />

          <Text
            style={{
              fontSize: 18,
              marginLeft: 5,
              color: 'grey',
              fontWeight: 'bold'
            }}>
            Cybe
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: '#83BFBC'
            }}>
            MED
          </Text>
          <Text
            style={{
              marginLeft: 5,
              fontSize: 18,
              color: 'grey',
              fontWeight: 'bold'
            }}>
            360
          </Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image style={{}} source={require('../images/home-circle.png')} />

          <Text
            style={{
              fontSize: 18,
              marginLeft: 5,
              color: '#83BFBC',
              fontWeight: 'bold'
            }}>
            Connect
          </Text>
        </View>

        <View style={{}}>
          <Image
            style={{ width: WINDOW_WIDTH, height: WINDOW_HEIGHT / 2.5 }}
            source={require('../images/patients.png')}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  centuryContainer: {
    marginBottom: WINDOW_HEIGHT / 15,
    height: WINDOW_HEIGHT / 10,
    width: WINDOW_WIDTH / 1.2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#FDA110'
  },
  indexTextAlert: {
    fontSize: 40,
    color: 'red'
  },
  indexText: {
    fontSize: 40,
    color: 'grey'
  },
  buttonDesign: {
    width: WINDOW_WIDTH / 1.3,
    height: WINDOW_HEIGHT / 10,
    borderRadius: 10,
    margin: WINDOW_WIDTH / 40,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowOpacity: 0.75,
    shadowRadius: 5,
    shadowColor: 'grey',
    shadowOffset: { height: 10, width: 0 }
  }
})
