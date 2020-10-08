import Style from "./styles";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

const StartButton = (props) => (
  <TouchableOpacity
    style={props.disabled ? [Style.button, Style.disabled] : Style.button}
    disabled={props.disabled}
    onPress={props.onStart}
  >
    <Text>Start</Text>
  </TouchableOpacity>
);

export default StartButton;
