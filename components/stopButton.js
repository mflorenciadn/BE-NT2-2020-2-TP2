import Style from "./styles";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

const StopButton = (props) => (
  <TouchableOpacity
    style={props.disabled ? [Style.button, Style.disabled] : Style.button}
    disabled={props.disabled}
    onPress={props.onStop}
  >
    <Text>Pause</Text>
  </TouchableOpacity>
);

export default StopButton;
