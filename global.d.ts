import type { StyledJsxStyleRegistry } from "styled-jsx";

declare global {
  namespace Vike {
    interface Config {
      registry?: StyledJsxStyleRegistry;
    }
  }
}

export {};
