import React from "react";
import { ColorContextProvider } from "./src/context/Context";

export const wrapRootElement = ({ element }) => (
  <ColorContextProvider>{element}</ColorContextProvider>
);
