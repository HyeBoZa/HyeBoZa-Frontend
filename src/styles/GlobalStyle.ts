import { css } from "@emotion/react";
import Background from "../assets/background.png";

export const globalStyle = css`
  * {
    font-family: "Noto Sans KR", sans-serif !important;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    -webkit-touch-callout: none;
    box-sizing: border-box;
    margin: 0;
    background-image: url(${Background});
    background-size: cover;
  }
`;
