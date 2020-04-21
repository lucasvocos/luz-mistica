import React from "react";

const ColorContext = React.createContext();
export default ColorContext;

export class ColorContextProvider extends React.Component {
  state = {
    colors: [],
    currentColor: {
      title: "Violet",
      code: "hsl(300, 76%, 72%)",
      _rawBody: [
        {
          _key: "4d1c46e5f96f",
          _type: "block",
          children: [
            {
              _key: "4d1c46e5f96f0",
              _type: "span",
              marks: [],
              text:
                "Violet stimulates Intuition, Imagination, Self-Knowledge, Meditation, Artistic Qualities",
            },
          ],
          markDefs: [],
          style: "normal",
        },
      ],
    },
    interval: false,
  };

  initSetState = (colors, currentColor) => {
    this.setState({ colors: colors, currentColor: currentColor });
  };

  setColors = (colors) => {
    this.setState({ colors });
  };
  setCurrentColor = (index) => {
    this.setState({ currentColor: this.state.colors[index] });
  };

  render() {
    const value = {
      colors: this.state.colors,
      currentColor: this.state.currentColor,
      interval: this.state.interval,
      initSetState: this.initSetState,
      setColors: this.setColors,
      setCurrentColor: this.setCurrentColor,
    };

    return (
      <ColorContext.Provider value={value}>
        {this.props.children}
      </ColorContext.Provider>
    );
  }
}
