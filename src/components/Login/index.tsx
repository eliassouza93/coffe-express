import React, { useState } from "react";
import {
  Container,
  LoginBox,
  Title,
  Subtitle,
  Form,
  Input,
  Button,
  ErrorText,
  FooterText,
} from "./style";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/ContextUser";

export const LoginPage = () => {
  const [loginInput, setLoginInput] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loadPage, setLoadPage] = useState(false);

  const { login } = useUser();

  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoadPage(true);

    if (!loginInput || !password) {
      setError("Por favor, preencha todos os campos ☕");
      setLoadPage(false);
      return;
    }

    try {
      setTimeout(() => {
        // if (loginInput === "admin" && password === "123") {
        // } else {
        //   setError("Usuário ou senha inválidos 😕");
        // }

        navigate("/homepage");
        setLoadPage(false);
      }, 1000);
      login(loginInput);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <LoginBox>
        <Title>☕ Coffee Delivery</Title>
        <Subtitle>Entre para continuar</Subtitle>

        <Form onSubmit={handleLogin}>
          <Input
            type="text"
            placeholder="Digite seu usuário"
            value={loginInput}
            onChange={(e) => setLoginInput(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" disabled={loadPage}>
            {loadPage ? "Entrando..." : "Entrar"}
          </Button>
        </Form>

        {error && <ErrorText>{error}</ErrorText>}

        <FooterText>
          Esqueceu a senha? <a href="#">Recupere aqui</a>
        </FooterText>
      </LoginBox>
    </Container>
  );
};
