import { AreaButtons, Button, Container, LogoImg } from "./styles";
import Logo from "../../../assets/logo.png";
import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();

  return (
    <Container>
      <LogoImg src={Logo} alt="logo" onClick={() => navigate("/")} />
      <AreaButtons>
        <Button onClick={() => navigate("/")}>Home</Button>
        <Button onClick={() => navigate("/members")}>Membros</Button>
        <Button>Jogos</Button>
        <Button>Sobre</Button>
      </AreaButtons>
    </Container>
  );
}
