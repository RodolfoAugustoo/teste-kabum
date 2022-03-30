import styled from "styled-components";

export const Input = styled.input`
  height: 36px;
  text-align: start;
  margin-bottom: 8px;
  padding: 6px 34px 7px 12px;
  border: 0;

  ::-webkit-input-placeholder {
    text-transform: uppercase;
    font-size: 12px;
    line-height: 18px;
    font-weight: 600;
  }
  :active {
    border: 1px solid white;
  }
  :focus {
    border: 1px solid white;
  }
  :focus-within {
    border: 1px solid white;
  }
  :hover {
    border: 1px solid white;
  }
  :target {
    border: 1px solid white;
  }
  :visited {
    border: 1px solid white;
  }
  :focus-visible {
    border: 1px solid white;
  }
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 530px;
  margin-right: 72px;
`;
