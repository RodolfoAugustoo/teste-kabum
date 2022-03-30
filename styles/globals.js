import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  html,
  body {
    min-width: 100vh;
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background-color: #022448;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  p {
    margin: 0;
  }

  * {
    box-sizing: border-box;
  }

  img {
    margin: 0px;
    padding: 0px;
    border: none;
    list-style: none;
    outline: none;
    box-sizing: border-box;
    font-size: 16px;
    font-family: Poppins, sans-serif !important;
  }

  textarea:focus,
  input:focus,
  select:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || "row"};
  align-items: ${({ alignItems }) => alignItems || "baseline"};
  max-width: 1440px;
  margin: 0 auto;
  background: ${({ bgColor }) => bgColor || "transparent"};

  @media (max-width: 1024px) {
    max-width: 90%;
  }

  @media (max-width: 768px) {
    max-width: 90%;
  }
`;
