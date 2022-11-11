import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IPerson } from "../../@types/api";
import Drawer from "react-modern-drawer";
import { Header } from "../../components/molecules/Header";
import api from "../../services/api";
import {
  ButtonAddMember,
  ButtonSubmit,
  CardMember,
  Container,
  DrawerAddMemberArea,
  ImageMember,
  MembersDiv,
  NameMember,
  TitleAddMemberDrawer,
} from "./styles";
import { Input } from "../../components/atoms/Input";
import { useNavigate } from "react-router-dom";

export function Members() {
  const [persons, setPersons] = useState<IPerson[]>([] as IPerson[]);
  const [drawerAddMemberIsVisible, setDrawerAddMemberIsVisible] =
    useState(false);
  const { control, handleSubmit, setValue } = useForm();
  const navigate = useNavigate();

  const handleDrawerAddMember = () =>
    setDrawerAddMemberIsVisible(!drawerAddMemberIsVisible);

  useEffect(() => {
    api.get("/person").then((data) => {
      console.log(data.data);
      setPersons(data.data);
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

  const onSubmit = async (values: any) => {
    api
      .post("/person", values)
      .then((res) => {
        console.log(res);
        setDrawerAddMemberIsVisible(false);
        setValue("name", "");
        setValue("avatar", "");
        setValue("sex", "");
        setValue("phone", "");
        setValue("adress", "");
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Header />
      <Container>
        <h1 style={{ color: "#fff" }}>Membros</h1>
        <MembersDiv>
          {persons.map((item) => (
            <CardMember onClick={() => navigate(`/members/${item.id}`)}>
              <ImageMember src={item.avatar} alt="imagem" />
              <NameMember>{item.name}</NameMember>
            </CardMember>
          ))}
        </MembersDiv>
        <ButtonAddMember onClick={() => setDrawerAddMemberIsVisible(true)}>
          +
        </ButtonAddMember>
        <Drawer
          open={drawerAddMemberIsVisible}
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
          <DrawerAddMemberArea>
            <TitleAddMemberDrawer>Adicionar novo membro</TitleAddMemberDrawer>
            <form
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: 5,
              }}
              onSubmit={handleSubmit(onSubmit)}
            >
              <Input
                name="name"
                control={control}
                label="Nome"
                placeholder="Nome"
              />
              <Input
                name="avatar"
                control={control}
                label="Imagem(url)"
                placeholder="Imagem(url)"
              />
              <Input
                name="sex"
                control={control}
                label="Sexo"
                placeholder="Sexo"
              />
              <Input
                name="phone"
                control={control}
                label="Telefone"
                placeholder="Telefone"
              />
              <Input
                name="adress"
                control={control}
                label="Endereço"
                placeholder="Endereço"
              />
              <ButtonSubmit type="submit">Adicionar</ButtonSubmit>
            </form>
          </DrawerAddMemberArea>
        </Drawer>
      </Container>
    </>
  );
}
