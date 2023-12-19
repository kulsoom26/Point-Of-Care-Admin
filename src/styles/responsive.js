import { css } from "styled-components";

export const media = {
  mobile: (props) => css`
    @media only screen and (max-width: 480px) {
      ${props}
    }
  `,
  tablet: (props) => css`
    @media only screen and (min-width: 481px) and (max-width: 768px) {
      ${props}
    }
  `,
  desktop: (props) => css`
    @media only screen and (min-width: 769px) {
      ${props}
    }
  `,
};

