import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  width: 170px;
  height: 36px;
  cursor: pointer;
`;

export const UserName = styled.p`
  font-size: 12px;
  font-weight: 700;
  line-height: 18px;
  color: white;
  margin: 0;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Avatar = styled.div`
  height: 36px;
  width: 36px;
  border-radius: 18px;
  margin-right: 8px;
`;

export const ImageWrap = styled.span`
  margin-right: 8px;
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > span {
    border-radius: 18px;
  }
`;
