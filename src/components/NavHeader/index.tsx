import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  ButtonExit,
  NavContainer,
  NavItem,
  NavLinks,
  NavInfo,
  Brand,
} from "./styles";
import { useUser } from "../../context/ContextUser";

export default function NavHeader() {
  const rotas = [
    { label: "Home", to: "/homepage" },
    { label: "Cafés", to: "/projectsobre" },
    { label: "Administração", to: "/adminpage" },
  ];

  const navigate = useNavigate();

  const handleSubmit = () => {
    logout();
    navigate("/");
  };
  const handleNavigate = () => {
    const totalItems = Object.values(cart).reduce((sum, qtd) => sum + qtd, 0);

    if (totalItems === 0) {
      alert("Nenhum produto selecionado");
      return;
    }

    navigate("/paymentspage");
  };
  const handleSubmitHome = () => {
    navigate("/homepage");
  };

  const { user, cart, logout } = useUser();

  return (
    <NavContainer>
      <Brand onClick={handleSubmitHome}>
        ☕ <span>Coffee Delivery</span>
      </Brand>

      <NavLinks>
        {rotas.map((rota, index) => (
          <NavItem key={index}>
            <NavLink
              to={rota.to}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {rota.label}
            </NavLink>
          </NavItem>
        ))}
      </NavLinks>

      <NavInfo>
        <p onClick={handleNavigate}>
          🛒 Carrinho:
          <strong>
            {Object.values(cart || {}).reduce((total, qtd) => total + qtd, 0)}
          </strong>
        </p>
        <p>
          👤 Olá: <strong>{user?.name || "Visitante"}</strong>
        </p>
        <ButtonExit onClick={handleSubmit}>Sair</ButtonExit>
      </NavInfo>
    </NavContainer>
  );
}
