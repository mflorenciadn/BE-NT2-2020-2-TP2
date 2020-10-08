import Style from "./styles";
import React from "react";
import { Text } from "react-native";

const Timer = (props) => {
    const stateDescription = props.isWorkState ? "Work" : "Break";
    const actualSecondsText =
        Math.floor(props.actualSeconds / 60)
        .toString()
        .padStart(2, "0") 
        + ":" + (props.actualSeconds % 60).toString().padStart(2, "0");

    return (
        <Text style={Style.actualSeconds}>
        {stateDescription + "\n" + actualSecondsText}
        </Text>
    );
};

export default Timer;
