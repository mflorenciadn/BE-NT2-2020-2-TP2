import React from "react";
import { StyleSheet } from "react-native";

const Style = StyleSheet.create({
  header: {
    height: 200,
    paddingTop: 100,
    backgroundColor: "#FF4B4B",
  },
  title: {
    textAlign: "center",
    color: "#fff",
    fontSize: 40,
    fontWeight: "bold",
  },
  appContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  button: {
    marginTop: 30,
    padding: 30,
    fontSize: 30,
    backgroundColor: "#d3d3d3",
  },
  reset: {
    marginTop: 10,
    padding: 30,
    fontSize: 20,
    backgroundColor: "#FF4B4B",
    fontWeight: "bold",
  },
  rowContainer: {
    width: "100%",
    flexDirection: "row",
    padding: 20,
    justifyContent: "space-evenly",
  },
  actualSeconds: {
    alignSelf: "center",
    padding: 80,
    fontSize: 40,
    textAlign: "center",
    fontWeight: "bold",
  },
  disabled: {
    backgroundColor: "#fff",
  },
});

export default Style;
