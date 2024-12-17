import type { StyledJsxStyleRegistry } from "styled-jsx";

declare global {
  namespace Vike {
    interface PageContext {
      registry?: StyledJsxStyleRegistry;
    }
  }
}

export {};
