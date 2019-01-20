// @flow

import { connect } from 'react-redux';
import {
  ActivityIndicator,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import React from 'react';
import { Kohana } from 'react-native-textinput-effects';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ToastActionsCreators } from 'react-native-redux-toast';
import { NavigationActions } from 'react-navigation';
import Screen from '../containers/Screen';
import {
  COLOR_BACKGROUND,
  COLOR_TEXT_INPUT,
  DARK_BLUE,
  LIGHT_GREEN,
} from '../../constants/ThingerColors';
import { BORDER_RADIUS, MARGIN, PADDING } from '../../constants/ThingerStyles';
import H2Text from '../texts/H2';
import AuthActions from '../../store/redux/auth';
import { THINGER_SERVER } from '../../constants/ThingerConstants';

const icon = require('../../assets/icon.png');

const mapStateToProps = state => ({
  isFetching: state.auth.isFetching,
});

const mapDispatchToProps = {
  login: AuthActions.login,
  navigate: NavigationActions.navigate,
  displayError: ToastActionsCreators.displayError,
};

class LoginScreen extends React.PureComponent<Props> {
  state = {
    username: undefined,
    password: undefined,
    server: THINGER_SERVER,
  };

  onSetUsername = username => this.setState({ username });

  onSetPassword = password => this.setState({ password });

  onSetServer = server => this.setState({ server });

  onDisplayError = () => this.displayError('Wrong email or password', 1000);

  render() {
    const { login, isFetching } = this.props;
    const { username, password, server } = this.state;
    return (
      <Screen>
        <KeyboardAvoidingView
          behavior="padding"
          style={{
            flex: 1,
            backgroundColor: DARK_BLUE,
            paddingTop: PADDING * 2,
          }}
        >
          <Image
            source={icon}
            style={{
              height: 150,
              width: 150,
              margin: MARGIN * 2,
              alignSelf: 'center',
            }}
          />
          <Kohana
            style={{
              backgroundColor: COLOR_BACKGROUND,
              flex: 0,
              marginHorizontal: MARGIN * 1.5,
              borderRadius: BORDER_RADIUS,
            }}
            label="Username"
            iconClass={Icon}
            iconName="person"
            iconColor={DARK_BLUE}
            labelStyle={{ color: COLOR_TEXT_INPUT, fontWeight: '100' }}
            inputStyle={{ color: DARK_BLUE }}
            autoCapitalize="none"
            useNativeDriver
            onChangeText={this.onSetUsername}
          />
          <Kohana
            style={{
              backgroundColor: COLOR_BACKGROUND,
              flex: 0,
              marginHorizontal: MARGIN * 1.5,
              marginVertical: 4,
              borderRadius: BORDER_RADIUS,
            }}
            label="Password"
            iconClass={Icon}
            iconName="lock"
            iconColor={DARK_BLUE}
            labelStyle={{ color: COLOR_TEXT_INPUT, fontWeight: '100' }}
            inputStyle={{ color: DARK_BLUE }}
            secureTextEntry
            useNativeDriver
            onChangeText={this.onSetPassword}
          />
          <Kohana
            style={{
              backgroundColor: COLOR_BACKGROUND,
              flex: 0,
              marginHorizontal: MARGIN * 1.5,
              borderRadius: BORDER_RADIUS,
            }}
            label="Server"
            iconClass={Icon}
            iconName="http"
            iconColor={DARK_BLUE}
            labelStyle={{ color: COLOR_TEXT_INPUT, fontWeight: '100' }}
            inputStyle={{ color: DARK_BLUE }}
            autoCapitalize="none"
            useNativeDriver
            defaultValue={THINGER_SERVER}
            onChangeText={this.onSetServer}
          />
          <TouchableOpacity
            onPress={() => {
              Keyboard.dismiss();
              login(username, password, server);
            }}
            style={{
              alignItems: 'center',
              margin: MARGIN * 1.5,
              marginTop: 4,
              height: 55,
              backgroundColor: LIGHT_GREEN,
              padding: PADDING,
              borderRadius: BORDER_RADIUS,
            }}
          >
            {isFetching ? (
              <ActivityIndicator size="small" color="#000000" />
            ) : (
              <H2Text>Login</H2Text>
            )}
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </Screen>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginScreen);
