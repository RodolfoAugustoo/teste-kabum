import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  gap: 16px;
  /* justify-content: center;
  align-items: center; */
  position: relative;
  width: 100%;
  background-color: white;
  overflow: hidden;
  scroll-behavior: smooth;
`;

export const ArrowNext = styled.div`
  display: flex;
  width: 48px;
  justify-content: center;
  background: white;
  /* position: absolute;
  right: 0;
  top: 50%;
  transform: translateX(-100%); */
  cursor: pointer;
`;
export const ArrowPrevious = styled.div`
  display: flex;
  width: 48px;
  justify-content: center;
  cursor: pointer;
  background: white;
  /* position: absolute;
  top: 50%;
  cursor: pointer; */
  /* transform: translateX(-150%); */
`;

export const Teste = styled.div`
  width: 100%;
  overflow: hidden;
  transition: 200ms;
  scroll-behavior: smooth;
  transition: all ease 1s;
  position: relative;
`;
export const Teste2 = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
`;
