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

import Modal from 'react-native-modal'
import { Actions, ActionConst } from 'react-native-router-flux'
import { RightButton } from '../../components/RightButton'
import Micon from 'react-native-vector-icons/MaterialIcons'
import Ficon from 'react-native-vector-icons/FontAwesome'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { globalStyle } from '../../constants/GlobalStyleSheet.js'
import { App_Constant } from '../../constants/Costant.js'
import Icon from 'react-native-vector-icons/Ionicons'
import { strings } from '../../constants/strings'
import { AboutModal } from '../../constants/Modal'
import { AppTitle } from '../../constants/AppTitle'
const { height, width } = Dimensions.get('window')
const WINDOW_WIDTH = Dimensions.get('window').width
const WINDOW_HEIGHT = Dimensions.get('window').height
/**
 * @language: this variable is used to store the selected language .
 */
var language = ''
/**
 * @language: this variable is used to store the selected language name .
 */
var languageName = 'English'
var flag = require('../../images/flagBritish.png')
var languageList = [
  {
    languages: { en: 'English', sv: 'English' },
    code: 'en',
    status: true,
    flagImage: require('../../images/flagBritish.png')
  },

  {
    languages: { en: 'Svenska', sv: 'Svenska' },
    code: 'sv',
    status: false,
    flagImage: require('../../images/flagSwedish.png')
  }
]
export default class Auth extends Component {
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
  selectLanguage(index) {
    for (i = 0; i < languageList.length; i++) {
      if (i == index) {
        strings.setLanguage(languageList[index].code)
        languageList[i].status = true
        language = languageList[index].code
        languageName = languageList[index].languages[strings.getLanguage()]
        flag = languageList[index].flagImage
      } else {
        languageList[i].status = false
      }
    }
    this.setState({ abc: 'a' })
  }
  hideShowModel() {
    this.setState({ languageModal: !this.state.languageModal })
  }
  componentWillMount() {
    for (i = 0; i < languageList.length; i++) {
      if (languageList[i].code == strings.getLanguage()) {
        languageList[i].status = true
        language = languageList[i].code
        languageName = languageList[i].languages[strings.getLanguage()]
        flag = languageList[i].flagImage
      } else {
        languageList[i].status = false
      }
    }
    debugger
    this.setState({ abc: 'a' })
    AsyncStorage.setItem('name', '')
    AsyncStorage.setItem('createQuesId', '')
    AsyncStorage.setItem('againQuesCheck', '')
    AsyncStorage.setItem('answeredQuestionArray', '')
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
      <View
        style={{
          flex: 1,
          backgroundColor: '#ECEFF1',
          paddingTop: WINDOW_HEIGHT / 10
        }}>
        <AppTitle />
        <View
          style={{
            width: WINDOW_WIDTH,

            backgroundColor: '#fff'
          }}>
          <View>
            <Text
              style={{
                margin: 20,
                fontSize: 17,
                fontWeight: 'bold',
                color: '#83BFBC'
              }}>
              User login Menu
            </Text>
          </View>

          <TouchableOpacity
            disabled={this.state.loadingAuth}
            onPress={() => {
              Actions.CenturySelection()
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
              <View
                style={{
                  flexDirection: 'row',

                  alignItems: 'center'
                }}>
                <Image
                  style={{ marginLeft: 20 }}
                  source={require('../../images/logo.png')}
                />
                <Text
                  style={{
                    fontSize: 15,
                    margin: 10,
                    color: 'grey'
                  }}>
                  {strings.authScreenStrring8}
                </Text>
              </View>
              <View>
                <Icon
                  style={{ margin: 20 }}
                  name="ios-arrow-forward"
                  size={20}
                  color="grey"
                />
              </View>
            </View>
          </TouchableOpacity>
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
