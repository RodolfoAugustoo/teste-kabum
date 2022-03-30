import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  background-color: white;
`;

export const ArrowNext = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateX(50%);
`;
export const ArrowPrevious = styled.div`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateX(-150%);
`;
