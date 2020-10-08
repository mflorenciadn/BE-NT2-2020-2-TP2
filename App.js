import React from "react";
import { View, Alert} from "react-native";
import Style from "./components/styles";
import Header from "./components/header";
import StartButton from "./components/startButton";
import StopButton from "./components/stopButton";
import ResetButton from "./components/resetButton";
import Timer from "./components/timer";
import { vibrate } from "./utils";

let interval;

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      workSeconds: 60 * 25,
      breakSeconds: 60 * 5,
      actualSeconds: 60 * 25,
      isWorkState: true,
      isRunning: false,
    };
  }

  onStart = () => {
    this.setState(() => ({ 
      isRunning: true 
    }));
    interval = setInterval(() => {
      this.setState((prevState) => ({
        actualSeconds: prevState.actualSeconds - 1,
      }));
      this.handleNotification();
    }, 1000);
  };


  handleNotification = () => {
    if (this.state.actualSeconds === 0) {
      vibrate();
      Alert.alert(
        'Congratulations!',
        'Finished time. Here we go again!',
      );
      clearInterval(interval);
      this.changeClock();
      this.onStart();
    }
  };

  changeClock = () => {
    if (this.state.isWorkState) {
      this.setState((prevState) => ({
        actualSeconds: prevState.breakSeconds,
        isWorkState: false,
        isRunning: false,
      }));
    } else {
      this.setState((prevState) => ({
        actualSeconds: prevState.workSeconds,
        isWorkState: true,
        isRunning: false,
      }));
    }
  };

  onStop = () => {
    clearInterval(interval);
    this.setState(() => ({ 
      isRunning: false 
    }));
  };

  onReset = () => {
    this.setState(() => ({ 
        isRunning: false,
        isWorkState: true,
        actualSeconds: 60 * 25,
      }));
      clearInterval(interval);
  };


  render = () => {
    return (
      <View style={Style.appContainer}>
        <Header />
        <Timer
          style={Style.actualSeconds}
          actualSeconds={this.state.actualSeconds}
          isWorkState={this.state.isWorkState}
        />
        <View style={Style.rowContainer}>
          <StartButton disabled={this.state.isRunning} onStart={this.onStart} />
          <StopButton disabled={!this.state.isRunning} onStop={this.onStop} />
        </View>
        <View style={Style.rowContainer}>
          <ResetButton style={Style.reset} onReset={this.onReset} />
        </View>
      </View>
    );
  };
}
