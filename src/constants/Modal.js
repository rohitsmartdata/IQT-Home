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
  Image,
  AsyncStorage
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
const { height, width } = Dimensions.get('window')
const WINDOW_WIDTH = Dimensions.get('window').width
const WINDOW_HEIGHT = Dimensions.get('window').height

import Modal from 'react-native-modal'
import { strings } from '../constants/strings'
import { Actions, ActionConst } from 'react-native-router-flux'
export class LogoutModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      abc: 'a',
      userDetails: '',
      logoutModal: false
    }
  }

  componentDidMount() {}
  openLogoutModal() {
    this.setState({ logoutModal: true })
  }
  logout() {
    debugger
    AsyncStorage.setItem('name', '')
    AsyncStorage.setItem('createQuesId', '')
    AsyncStorage.setItem('againQuesCheck', '')
    AsyncStorage.setItem('answeredQuestionArray', '')
    Actions.root1({ type: ActionConst.RESET })
  }
  render() {
    return (
      <View>
        <Modal
          isVisible={this.state.logoutModal}
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <View
            style={{
              backgroundColor: '#fff',
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
              width: WINDOW_WIDTH / 1.3,
              padding: 20
            }}>
            <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'grey' }}>
              {strings.logoutModalString1}{' '}
            </Text>

            <View style={{ flexDirection: 'column', padding: 20 }}>
              <TouchableOpacity style={{}} onPress={() => this.logout()}>
                <View style={styles.logoutModalView}>
                  <Text
                    style={{
                      fontSize: 17,
                      fontWeight: 'bold',
                      color: '#fff'
                    }}>
                    {strings.yes}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={{}}
                onPress={() => this.setState({ logoutModal: false })}>
                <View style={styles.logoutModalView}>
                  <Text
                    style={{
                      fontSize: 17,
                      fontWeight: 'bold',
                      color: '#fff'
                    }}>
                    {strings.no}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <TouchableOpacity onPress={() => this.openLogoutModal()}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              margin: 20
            }}>
            <Icon
              name="ios-arrow-back"
              size={23}
              color="#83BFBC"
              style={{ marginRight: 20 }}
            />
            <Text
              style={{
                fontSize: 17,
                fontWeight: 'bold',
                color: '#83BFBC'
              }}>
              {strings.logout}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

export class AboutModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      abc: 'a',
      userDetails: '',
      aboutModal: false
    }
  }

  componentDidMount() {}
  openAboutModal() {
    this.setState({ aboutModal: true })
  }

  render() {
    return (
      <View>
        <Modal
          isVisible={this.state.aboutModal}
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <View
            style={{
              backgroundColor: '#fff',
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
              width: WINDOW_WIDTH / 2,
              padding: 20
            }}>
            <Image
              style={{}}
              source={require('../../src/images/aboutLogo.png')}
            />

            <View style={{ flexDirection: 'column', padding: 20 }}>
              <TouchableOpacity
                style={{}}
                onPress={() => this.setState({ aboutModal: false })}>
                <View style={styles.logoutModalView}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: 'bold',
                      color: '#fff'
                    }}>
                    {strings.ok}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <TouchableOpacity onPress={() => this.openAboutModal()}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginRight: 20
            }}>
            <Image style={{}} source={require('../../src/images/about.png')} />
            <Text style={{ color: 'grey', fontWeight: 'bold' }}>
              {strings.about}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  logoutModalView: {
    marginBottom: 10,
    backgroundColor: '#61666B',
    width: WINDOW_WIDTH / 4,
    height: WINDOW_HEIGHT / 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
