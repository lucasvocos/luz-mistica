import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const ColorContext = React.createContext();
export default ColorContext;

export class ColorContextProvider extends React.Component {
  state = {
    colors: [],
    currentColor: null,
    interval: false
  };

  initSetState = (colors, currentColor) => {
    this.setState({ colors: colors, currentColor: currentColor });
  };

  setColors = colors => {
    this.setState({ colors });
  };
  setCurrentColor = index => {
    this.setState({ currentColor: this.state.colors[index] });
  };

  setInterval = bool => {
    this.setState({ interval: bool });
  };

  render() {
    const value = {
      colors: this.state.colors,
      currentColor: this.state.currentColor,
      interval: this.state.interval,
      initSetState: this.initSetState,
      setColors: this.setColors,
      setCurrentColor: this.setCurrentColor,
      setInterval: this.setInterval
    };

    return (
      <ColorContext.Provider value={value}>
        {this.props.children}
      </ColorContext.Provider>
    );
  }
}
