import { useState } from "react";
import Formulario from "../../components/Formulario";
import { useNavigate } from "react-router-dom";

export function AdminPage() {
  const [error] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1800));
      navigate("/administrativopage");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Formulario
      mensagem="Entre para acessar área administrativa ☕"
      onSubmit={handleLogin}
      error={error}
      loading
    />
  );
}
