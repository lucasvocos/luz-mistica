import React from "react";
import { ColorContextProvider } from "./src/context/Context";

export const wrapRootElement = ({ element }) => {
  return <ColorContextProvider>{element}</ColorContextProvider>;
};
