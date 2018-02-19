import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import PropTypes from "prop-types";
import { FONT_SIZE_P, PADDING } from "../../constants/ThingerStyles";
import {DARK_BLUE, DIVIDER_COLOR} from "../../constants/ThingerColors";

export default class ItemList extends React.Component {
  propsType = {
    key: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    style: PropTypes.object,
    onPress: PropTypes.func
  };

  renderContent() {
    const { style, id, value } = this.props;

    return (
      <View style={[styles.container, style]}>
        <Text style={styles.id}>{id}</Text>
        <View style={styles.valueContainer}>{value}</View>
      </View>
    );
  }

  render() {
    const { onPress } = this.props;

    return (
      <View style={styles.border}>
        {onPress ? (
          <TouchableOpacity onPress={onPress}>
            {this.renderContent()}
          </TouchableOpacity>
        ) : (
          this.renderContent()
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  border: {
    borderBottomWidth: 1,
    borderBottomColor: DIVIDER_COLOR,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    paddingVertical: PADDING
  },
  id: {
    fontSize: FONT_SIZE_P,
    color: DARK_BLUE
  },
  valueContainer: {
    flex: 1,
    alignItems: "flex-end"
  }
});
