import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 20px 20px;
  background-color: #0a44a1;
  min-height: calc(100vh - 70px);
  max-width: 1400px;
  margin: auto;

  @media (max-width: 500px) {
    align-items: center;
  }
`;

export const AreaImageTexts = styled.div`
  display: flex;

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ImageMember = styled.img`
  width: 300px;
  height: 300px;
`;

export const AreaTexts = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;

  @media (max-width: 500px) {
    margin-top: 10px;
  }
`;

export const TextInfo = styled.p`
  color: #fff;
  font-size: 20px;
  margin-bottom: 5px;
`;

export const SkillTitle = styled.h2`
  color: #fff;
  font-size: 26px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const AreaSkills = styled.div`
  display: flex;
  gap: 8px;
  max-width: 800px;
  flex-wrap: wrap;
`;

export const SkillArea = styled.div`
  display: flex;
  padding: 10px;
  padding-right: -50px;
  color: #fff;
  font-weight: bold;
  background-color: #0e64ed;
  width: auto;
  border-radius: 8px;
  transition: 0.3s;
`;

export const ButtonAddSkill = styled.button`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background-color: #0e64ed;
  color: #fff;
  border: 0;
  font-size: 20px;
  cursor: pointer;
`;

export const DrawerAddSkillArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  padding: 20px;
  gap: 5px;
`;

export const TitleAddSkillDrawer = styled.h3`
  margin-bottom: 15px;
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
  cursor: pointer;´
  outline: 0;

  :hover {
    opacity: 0.9;
  }
`;
