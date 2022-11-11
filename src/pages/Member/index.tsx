import React, { useEffect, useState } from "react";
import { Header } from "../../components/molecules/Header";
import api from "../../services/api";
import Drawer from "react-modern-drawer";
import {
  AreaImageTexts,
  AreaSkills,
  AreaTexts,
  ButtonAddSkill,
  ButtonSubmit,
  Container,
  DrawerAddSkillArea,
  ImageMember,
  SkillArea,
  SkillTitle,
  TextInfo,
  TitleAddSkillDrawer,
} from "./styles";
import { Params, useParams } from "react-router-dom";
import { IPerson } from "../../@types/api";
import { Input } from "../../components/atoms/Input";
import { useForm } from "react-hook-form";

export function Member() {
  const [person, setPerson] = useState<IPerson>({} as IPerson);
  const [drawerAddSkillIsVisible, setDrawerAddSkillIsVisible] = useState(false);

  const { id } = useParams();
  const { control, handleSubmit, setValue } = useForm();

  const handleDrawerAddMember = () =>
    setDrawerAddSkillIsVisible(!drawerAddSkillIsVisible);

  useEffect(() => {
    api.get(`/person/${id}`).then((data) => {
      setPerson(data.data);
    });
  }, []);

  function formatNumber(n: string) {
    const formatedNumber = n
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d)/, "$1-$2")
      .replace(/(-\d{4})\d+?$/, "$1");

    return formatedNumber;
  }

  const onSubmit = (values: any) => {
    api
      .post("/skill", { personId: person.id, title: values.title })
      .then((res) => {
        setDrawerAddSkillIsVisible(false);
        setValue("title", "");
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div style={{ backgroundColor: "#0a44a1" }}>
      <Header />
      <Container>
        <AreaImageTexts>
          <ImageMember src={person.avatar} alt="" />
          <AreaTexts>
            <TextInfo>Nome: {person.name}</TextInfo>
            <TextInfo>
              Sexo: {person.sex === "M" ? "Masculino" : "Feminino"}
            </TextInfo>
            <TextInfo>Endereço: {person.adress}</TextInfo>
            {person.phone && (
              <TextInfo>Telefone: {formatNumber(person.phone)}</TextInfo>
            )}
            <SkillTitle>Habilidades:</SkillTitle>
            <AreaSkills>
              {person?.skills?.map((item) => (
                <SkillArea key={item.id}>{item.title}</SkillArea>
              ))}
              <ButtonAddSkill onClick={() => setDrawerAddSkillIsVisible(true)}>
                +
              </ButtonAddSkill>
              {/* <ButtonAddSkill
                onClick={() => setDrawerAddSkillIsVisible(true)}
                style={{ fontSize: 18 }}
              >
                ✎
              </ButtonAddSkill> */}
            </AreaSkills>
            <SkillTitle>Feitos:</SkillTitle>
            <AreaSkills>
              {person?.deeds?.map((item) => (
                <SkillArea key={item.id}>{item.description}</SkillArea>
              ))}
              <ButtonAddSkill onClick={() => setDrawerAddSkillIsVisible(true)}>
                +
              </ButtonAddSkill>
              {/* <ButtonAddSkill
                onClick={() => setDrawerAddSkillIsVisible(true)}
                style={{ fontSize: 18 }}
              >
                ✎
              </ButtonAddSkill> */}
            </AreaSkills>
          </AreaTexts>
        </AreaImageTexts>
      </Container>
      <Drawer
        open={drawerAddSkillIsVisible}
        direction="right"
        size={320}
        style={{
          borderTopLeftRadius: 30,
          borderEndStartRadius: 30,
          backgroundColor: "#f2f2f2",
        }}
        zIndex={1000}
        onClose={handleDrawerAddMember}
      >
        <DrawerAddSkillArea>
          <TitleAddSkillDrawer>
            Adicionar nova habilidade para {person.name}
          </TitleAddSkillDrawer>
          <form style={{ width: "100%" }} onSubmit={handleSubmit(onSubmit)}>
            <Input
              name="title"
              control={control}
              label="Habilidade"
              placeholder="Habilidade"
            />
            <ButtonSubmit type="submit">Adicionar</ButtonSubmit>
          </form>
        </DrawerAddSkillArea>
      </Drawer>
    </div>
  );
}
