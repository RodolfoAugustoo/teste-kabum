import styled from "styled-components";

export const BrowserBy = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 234px;
  margintop: 84px;
  padding: 0 72px;
`;

export const Item = styled.div`
  height: 100%;
  text-align: center;
  width: 30%;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 66px;
  width: 100%;
  padding: 16px;
`;

export const Title = styled.p`
  font-size: 14px;
  line-height: 18px;
  font-weight: 700;
  text-transform: uppercase;
`;
export const Description = styled.p`
  font-size: 10px;
  line-height: 16px;
  font-weight: 400;
`;
