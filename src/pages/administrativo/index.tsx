import { useUser } from "../../context/ContextUser";
import {
  AdminContainer,
  AdminHeader,
  AdminTitle,
  AdminContent,
  UserInfo,
  SectionTitle,
  ButtonExit,
  CardGrid,
  Card,
  CardTitle,
  CardText,
} from "./style";
import { useNavigate } from "react-router-dom";

export function AdministrativoPage() {
  const navigate = useNavigate();

  const handleExit = () => {
    navigate("/homepage");
  };

  const { user } = useUser();
  return (
    <AdminContainer>
      <AdminHeader>
        <AdminTitle>☕ Coffee Delivery — Painel Administrativo</AdminTitle>

        <UserInfo>
          <img src="https://i.pravatar.cc/40" alt="Usuário" />
          <span>
            Administrador, <strong> {user?.name} </strong>
          </span>
          <ButtonExit onClick={handleExit}>Sair</ButtonExit>
        </UserInfo>
      </AdminHeader>

      <AdminContent>
        <SectionTitle>Dashboard</SectionTitle>
        <p>
          Bem-vindo ao painel de controle! Aqui você pode acompanhar pedidos,
          gerenciar cafés e monitorar clientes em tempo real.
        </p>

        <CardGrid>
          <Card>
            <CardTitle>📦 Pedidos</CardTitle>
            <CardText>
              Gerencie todos os pedidos e acompanhe o status das entregas.
            </CardText>
          </Card>

          <Card>
            <CardTitle>☕ Produtos</CardTitle>
            <CardText>
              Adicione, edite ou remova cafés disponíveis no cardápio.
            </CardText>
          </Card>

          <Card>
            <CardTitle>👥 Clientes</CardTitle>
            <CardText>
              Visualize e mantenha o histórico de compras de seus clientes.
            </CardText>
          </Card>

          <Card>
            <CardTitle>📊 Relatórios</CardTitle>
            <CardText>
              Veja estatísticas de vendas e desempenho semanal.
            </CardText>
          </Card>
        </CardGrid>
      </AdminContent>
    </AdminContainer>
  );
}
