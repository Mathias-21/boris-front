import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  background-color: #062961;
  padding: 0 40px;
`;

export const LogoImg = styled.img`
  max-height: 60px;
  cursor: pointer;
`;

export const AreaButtons = styled.div`
  display: flex;
  height: 100%;
`;

export const Button = styled.button`
  min-height: 100%;
  min-width: 90px;
  padding: 0 10px;
  border: 0;
  background-color: #062961;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;

  :hover {
    background-color: #0a44a1;
  }
`;
