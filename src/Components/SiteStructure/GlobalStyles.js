import React from "react"
import { Global, css } from '@emotion/core'
import 'roboto-fontface';
import { siteColors, mq } from './StyleVariables'

const GlobalStyles = () => (
  <>
    <Global
      styles={css`
        body {
          font-family: 'Roboto', sans-serif;
          margin: 0;
        }

        h1 {
          margin-bottom: 15px;
          margin-top: 0;
        }
      `}
    />
  </>
);

export default GlobalStyles;
