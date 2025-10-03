/// <reference types="vite-plugin-svgr/client" />

// ✅ Support importing SVGs as React components with ?react
declare module "*.svg?react" {
  import * as React from "react";
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}

// ✅ Support importing SVGs as normal files (string URL)
declare module "*.svg" {
  const src: string;
  export default src;
}
