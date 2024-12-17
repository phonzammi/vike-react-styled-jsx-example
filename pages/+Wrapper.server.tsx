export { Wrapper }

import React from 'react';
import { usePageContext } from 'vike-react/usePageContext';
import { StyleRegistry } from 'styled-jsx'

function Wrapper({ children }: { children: React.ReactNode }) {
    const pageContext = usePageContext()

    return (
        <StyleRegistry registry={pageContext.registry}>{children}</StyleRegistry>
    )
}
