export { Wrapper }

import React from 'react';
import { usePageContext } from 'vike-react/usePageContext';
import { StyleRegistry, createStyleRegistry } from 'styled-jsx'

function Wrapper({ children }: { children: React.ReactNode }) {
    const pageContext = usePageContext()
    pageContext.config.registry ??= createStyleRegistry()

    if (isBrowser()) {
        return <>{children}</>
    }
    return (
        <StyleRegistry registry={pageContext.config.registry}>{children}</StyleRegistry>
    )
}

function isBrowser() {
    // Using `typeof window !== 'undefined'` alone is not enough because some users use https://www.npmjs.com/package/ssr-window
    return typeof window !== "undefined" && typeof window.scrollY === "number";
    // Alternatively, test whether environment is a *real* browser: https://github.com/brillout/picocolors/blob/d59a33a0fd52a8a33e4158884069192a89ce0113/picocolors.js#L87-L89
}
