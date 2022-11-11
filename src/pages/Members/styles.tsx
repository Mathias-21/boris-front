import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px 40px 20px;
  background-color: #0a44a1;
  min-height: 100vh;
`;

export const MembersDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 20px;
`;

export const CardMember = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  background-color: #347aeb;
  border-radius: 15px;
  cursor: pointer;
  transition: 0.3s;

  :hover {
    transform: scale(1.03);
  }
`;

export const ImageMember = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 15px;
  margin-bottom: 5px;
`;

export const NameMember = styled.p`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  margin-top: 5px;
`;

export const ButtonAddMember = styled.button`
  min-width: 65px;
  min-height: 65px;
  position: fixed;
  border-radius: 50%;
  background-color: #fff;
  border: 0;
  bottom: 30px;
  right: 30px;
  font-size: 24px;
  font-weight: bold;
`;

export const DrawerAddMemberArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  padding: 20px;
  gap: 5px;
`;

export const TitleAddMemberDrawer = styled.h3`
  margin-bottom: 12px;
`;

export const ButtonSubmit = styled.button`
  width: 100%;
  height: 35px;
  border-radius: 8px;
  border: 0;
  background-color: #347aeb;
  color: #fff;
  margin-top: 16px;
  font-size: 15px;
  cursor: pointer;

  :hover {
    opacity: 0.9;
  }
`;
