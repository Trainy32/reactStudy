import React from "react";
import { Canvas } from "@react-three/fiber";

import Scenegraph from "./Scenegraph";

function App() {
  return (
    <div id="canvas-container">
      <Canvas>
        <Scenegraph />
      </Canvas>
    </div>
  );
}

export default App;
