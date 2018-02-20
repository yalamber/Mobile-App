import React from "react";
import PairView from "./ItemList";
import { StyleSheet, TextInput } from "react-native";
import PropTypes from "prop-types";
import { FONT_SIZE_P } from "../../constants/ThingerStyles";
import { INPUT_COLOR } from "../../constants/ThingerColors";

export default class TextInputItem extends React.Component {
  propsType = {
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    onChangeText: PropTypes.func
  };

  render() {
    const { id, value, placeholder, onChangeText } = this.props;

    return (
      <PairView
        id={id}
        value={
          <TextInput
            style={styles.value}
            value={value}
            placeholder={placeholder}
            onChangeText={onChangeText}
          />
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  value: {
    flex: 1,
    fontSize: FONT_SIZE_P,
    color: INPUT_COLOR
  }
});