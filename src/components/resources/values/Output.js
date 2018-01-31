import React from "react";
import styles from "../../../utils/styles";
import { Text } from "react-native";

export class Output extends React.Component {
  render() {
    const { value } = this.props;
    switch (typeof value) {
      case "string":
      case "number":
        return <Text style={styles.value}>{value.toString()}</Text>;
      case "boolean":
        if (value) return <Text style={styles.value}>{"ON"}</Text>;
        else return <Text style={styles.value}>{"OFF"}</Text>;
      default:
        return null;
    }
  }
}
