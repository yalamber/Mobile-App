import React from "react";
import ItemList from "./ItemList";
import { StyleSheet, Text } from "react-native";
import PropTypes from "prop-types";

export default class OutputItem extends React.Component {
  propsType = {
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    onChangeText: PropTypes.func
  };

  render() {
    const { id, value } = this.props;

    return (
      <ItemList id={id} value={<Text style={styles.value}>{value}</Text>} />
    );
  }
}

const styles = StyleSheet.create({
  value: {
    color: "#444",
    fontSize: 20
  }
});
