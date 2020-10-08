import Style from "./styles";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

const ResetButton = (props) => (
  <TouchableOpacity style={Style.reset} onPress={props.onReset}>
    <Text>Reset Pomodoro</Text>
  </TouchableOpacity>
);

export default ResetButton;
