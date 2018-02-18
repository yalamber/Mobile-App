import React from "react";
import PropTypes from "prop-types";
import ThingerStyles, { MARGIN } from "../constants/ThingerStyles";
import Icon from "react-native-vector-icons/FontAwesome";
import { View, Text } from "react-native";
import { DARK_BLUE } from "../constants/ThingerColors";
import RoundedButton from "./buttons/RoundedButton";

export default class ErrorMessage extends React.Component {
  propsType = {
    message: PropTypes.string.isRequired,
    icon: PropTypes.string,
    onPressButton: PropTypes.func
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {this.props.icon && (
          <Icon
            name={this.props.icon}
            size={30}
            style={{ color: "black", margin: MARGIN }}
          />
        )}
        <Text style={[ThingerStyles.h2, { margin: MARGIN }]}>
          {this.props.message}
        </Text>
        {this.props.onPressButton && (
          <RoundedButton
            color={DARK_BLUE}
            text="Reload"
            onPress={() => this.props.onPressButton()}
          />
        )}
      </View>
    );
  }
}
