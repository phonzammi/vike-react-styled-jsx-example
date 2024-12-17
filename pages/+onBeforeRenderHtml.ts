import { useConfig } from "vike-react/useConfig";
import { createStyleRegistry } from "styled-jsx";
import type { PageContext } from "vike/types";

export { onBeforeRenderHtml };

function onBeforeRenderHtml(pageContext: PageContext) {
  pageContext.registry = createStyleRegistry();
}
