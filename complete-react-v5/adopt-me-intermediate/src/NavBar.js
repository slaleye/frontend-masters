/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from "react";
import { Link } from "@reach/router";
import { css, keyframes} from "@emotion/core";
import colors from './colors';

const spin = keyframes`
to {
    transform: rotate(10deg)
}`;

const NavBar = () => {
  const [padding, setPadding] = useState(15);
  return (
    <header
      onClick={() => setPadding(padding + 15)}
      css={css`
        background-color: ${colors.primary};
        padding: ${padding}px;
      `}
    >
      <Link to="/">ADdpt Me!</Link>
      <span
        css={css`
          font-size: 60px;
          display:inline-block;
          animation: .2s ${spin} linear;
          &:hover{
              transform:rotate(45deg);
              cursor:default;
          }
        `}
        role="img"
        aria-label="logo"
      >
        🐶
      </span>
    </header>
  );
};

export default NavBar;
