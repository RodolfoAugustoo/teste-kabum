import styled from "styled-components";
import Image from "next/image";

export const Input = styled.input`
  height: 36px;
  text-align: start;
  margin-bottom: 8px;
  padding: 6px 34px 7px 12px;
  border: 0;
  width: 530px;

  ::-webkit-input-placeholder {
    text-transform: uppercase;
    font-size: 12px;
    line-height: 18px;
    font-weight: 600;
  }
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-right: 72px;

  @media (max-width: 768px) {
    margin-right: 0;
    max-width: none;
  }
`;

export const SearchIcon = styled.div`
  display: flex;
`;

export const IconSearch = styled(Image)`
  margin-left: -30px;
`;

export const ImageWrap = styled.div`
  margin-left: -24px;
  margin-top: -8px;
`;
