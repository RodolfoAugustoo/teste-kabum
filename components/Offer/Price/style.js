import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const TextNormal = styled.p`
  font-size: 12px;
  /* line-height: 18px; */
  font-weight: 400;
  color: #7f858d;
  text-transform: uppercase;
`;

export const TextNormalDark = styled.p`
  font-size: 12px;
  /* line-height: 21px; */
  font-weight: 400;
  text-transform: uppercase;
  color: #565c69;
`;

export const TextNormalDarkLine = styled.p`
  font-size: 12px;
  /* line-height: 21px; */
  font-weight: 400;
  text-transform: uppercase;
  text-decoration: line-through;
  color: #565c69;
`;

export const TextBold = styled.p`
  font-size: 14px;
  /* line-height: 18px; */
  font-weight: 700;
  color: #42464d;
`;

export const TextOrange = styled.p`
  font-size: 24px;
  line-height: 34px;
  font-weight: 700;
  color: #ff6500;
`;
export const DivFlex = styled.div`
  display: flex;
  gap: 4px;
`;
