import React from "react";
import "./styles.css";
import ColorBox from "./components/ColorBox";
import { ColorProvider } from "./contexts/color";
import SelectColors from "./components/SelectColor";

export default function App() {
  return (
    <ColorProvider>
      <div className="App">
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  );
}
