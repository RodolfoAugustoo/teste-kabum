import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  justify-content: flex-start;
  background-color: #ff6500;
  width: 100%;
  align-items: center;
`;
export const Select = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 373px;

  :after {
    background: #e35214;
  }

  p {
    margin-right: 18px;
  }
`;

export const Text = styled.p`
  color: white;
  font-size: 14px;
  line-height: 18px;
  font-weight: 700;
  text-transform: uppercase;
  width: 210px;
  text-align: left;
  cursor: pointer;
`;
