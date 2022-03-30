import styled from "styled-components";

export const Campaing = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 68px;
  width: 100%;
  padding: 8px 72px;
  margin-bottom: 34px;
  background-color: #ff6500;
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;

export const Title = styled.p`
  font-size: 24px;
  font-style: normal;
  font-weight: 800;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  text-transform: uppercase;
  color: white;
`;

export const Warning = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0px;
  color: white;
`;
