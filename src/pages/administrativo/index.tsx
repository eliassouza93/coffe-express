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
            Administrador, <strong>{user?.name}</strong>
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
              <br />
              <strong>Total de pedidos hoje:</strong> 24 <br />
              <strong>Pedidos em andamento:</strong> 5 <br />
              <a href="#">Ver detalhes dos pedidos</a>
            </CardText>
          </Card>

          <Card>
            <CardTitle>☕ Produtos</CardTitle>
            <CardText>
              Adicione, edite ou remova cafés disponíveis no cardápio.
              <br />
              <strong>Produtos cadastrados:</strong> 38 <br />
              <strong>Última atualização:</strong> 02/06/2024 <br />
              <a href="#">Gerenciar produtos</a>
            </CardText>
          </Card>

          <Card>
            <CardTitle>👥 Clientes</CardTitle>
            <CardText>
              Visualize e mantenha o histórico de compras de seus clientes.
              <br />
              <strong>Clientes cadastrados:</strong> 412 <br />
              <strong>Novos clientes este mês:</strong> 18 <br />
              <a href="#">Ver lista de clientes</a>
            </CardText>
          </Card>

          <Card>
            <CardTitle>📊 Relatórios</CardTitle>
            <CardText>
              Veja estatísticas de vendas e desempenho semanal.
              <br />
              <strong>Vendas este mês:</strong> R$ 8.490,00 <br />
              <strong>Crescimento:</strong> +12% <br />
              <a href="#">Acessar relatórios</a>
            </CardText>
          </Card>
        </CardGrid>

        <SectionTitle style={{ marginTop: "2.5rem" }}>Notificações Recentes</SectionTitle>
        <ul style={{ background: "#fffbe8", padding: "1rem 1.5rem", borderRadius: "12px", marginBottom: "1.5rem" }}>
          <li>✔️ Novo pedido realizado por <strong>Maria Souza</strong> — há 5 minutos</li>
          <li>⚠️ Baixo estoque: "Café Expresso Tradicional"</li>
          <li>🎉 Novo cliente cadastrado: <strong>Lucas Pereira</strong></li>
        </ul>

        <SectionTitle>Atalhos rápidos</SectionTitle>
        <div style={{ display: "flex", gap: "1.5rem", marginBottom: "2rem" }}>
          <button
            style={{
              background: "#d97706",
              color: "#fff",
              fontWeight: 600,
              padding: "0.7rem 1.6rem",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
            onClick={() => navigate("/administrativo/pedidos")}
          >
            Gerenciar Pedidos
          </button>
          <button
            style={{
              background: "#92400e",
              color: "#fff",
              fontWeight: 600,
              padding: "0.7rem 1.6rem",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
            onClick={() => navigate("/administrativo/produtos")}
          >
            Adicionar Produto
          </button>
          <button
            style={{
              background: "#fde68a",
              color: "#92400e",
              fontWeight: 600,
              padding: "0.7rem 1.6rem",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
            onClick={() => navigate("/administrativo/clientes")}
          >
            Clientes
          </button>
          <button
            style={{
              background: "#fbbf24",
              color: "#92400e",
              fontWeight: 600,
              padding: "0.7rem 1.6rem",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
            onClick={() => navigate("/administrativo/relatorios")}
          >
            Relatórios
          </button>
        </div>

        <SectionTitle>Dicas para usar o painel</SectionTitle>
        <ul style={{ background: "#fffbe8", padding: "1rem 1.5rem", borderRadius: "12px" }}>
          <li>🔎 Utilize o menu para navegar entre os módulos do sistema.</li>
          <li>🕑 Acompanhe o status dos pedidos em tempo real na aba “Pedidos”.</li>
          <li>✏️ Atualize o catálogo de cafés regularmente para manter seus clientes informados.</li>
        </ul>
      </AdminContent>
    </AdminContainer>
  );
}
