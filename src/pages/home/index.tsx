import { useNavigate } from "react-router-dom";
import {
  Container,
  Hero,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  HeroButton,
  Section,
  SectionTitle,
  CardGrid,
  Card,
  CardTitle,
  CardText,
  About,
  AboutText,
  Footer,
} from "./style";

export default function HomePage() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/projectsobre");
  };

  return (
    <Container>
      <Hero>
        <HeroContent>
          <HeroTitle>
            Bem-vindo ao <span>Coffee Delivery</span>
          </HeroTitle>
          <HeroSubtitle>
            O melhor café da cidade entregue quentinho na sua porta. <br />
            Escolha, peça e saboreie — simples assim ☕<br />
            <span style={{ fontSize: "1rem", fontWeight: 400 }}>
              Atendendo clientes satisfeitos desde 2020. Mais de 10.000 cafés entregues!
            </span>
          </HeroSubtitle>
          <HeroButton onClick={handleNavigate}>Explorar Cafés</HeroButton>
        </HeroContent>
      </Hero>

      <Section>
        <SectionTitle>Nossos Serviços</SectionTitle>
        <CardGrid>
          <Card>
            <CardTitle>Cafés Especiais</CardTitle>
            <CardText>
              Grãos selecionados e torrados artesanalmente para garantir o sabor
              e aroma perfeitos em cada xícara.<br />
              <strong>+30 variedades disponíveis</strong>
            </CardText>
          </Card>

          <Card>
            <CardTitle>Entrega Rápida</CardTitle>
            <CardText>
              Seu café favorito entregue fresquinho em minutos.<br />
              <strong>Tempo médio de entrega: 18 minutos</strong>
            </CardText>
          </Card>

          <Card>
            <CardTitle>Assinatura Mensal</CardTitle>
            <CardText>
              Receba todos os meses uma seleção exclusiva de cafés premium
              direto da nossa torrefação.<br />
              <strong>Planos flexíveis e cancelamento grátis</strong>
            </CardText>
          </Card>

          <Card>
            <CardTitle>Programa de Fidelidade</CardTitle>
            <CardText>
              Acumule pontos a cada compra e troque por descontos ou brindes exclusivos.<br />
              <strong>Ganhe até 10% de cashback!</strong>
            </CardText>
          </Card>
        </CardGrid>
      </Section>

      <Section>
        <SectionTitle>Destaques Recentes</SectionTitle>
        <CardGrid>
          <Card>
            <CardTitle>☕ Café do Mês</CardTitle>
            <CardText>
              <strong>Rituais Andinos</strong> - 100% arábica, notas de chocolate e frutas vermelhas.
            </CardText>
          </Card>
          <Card>
            <CardTitle>Novidade!</CardTitle>
            <CardText>
              Agora entregamos também <strong>cafés gelados</strong> e <strong>latte vegano</strong>.
            </CardText>
          </Card>
          <Card>
            <CardTitle>Avaliações dos Clientes</CardTitle>
            <CardText>
              Nota média: <strong>4.9/5</strong> <br />
              O que dizem: "Rápido, saboroso, atendimento excelente!"
            </CardText>
          </Card>
        </CardGrid>
      </Section>

      <About>
        <SectionTitle>Sobre Nós</SectionTitle>
        <AboutText>
          O <strong>Coffee Delivery</strong> nasceu do amor por café e pela
          experiência de saborear cada momento. Trabalhamos com os melhores
          produtores, grãos selecionados e uma equipe apaixonada por transformar
          o seu dia com um bom café.<br /><br />
          <ul style={{ paddingLeft: "1.2em", margin: 0 }}>
            <li>
              <strong>Missão:</strong> Levar a melhor experiência de café até você, todos os dias.
            </li>
            <li>
              <strong>Valores:</strong> Qualidade, compromisso, sustentabilidade social e ambiental.
            </li>
            <li>
              <strong>Equipe:</strong> Mais de 20 baristas certificados e entregadores treinados.
            </li>
          </ul>
          <br />
          <div style={{ fontSize: "0.95rem", color: "#835a2b", marginTop: "1em" }}>
            <strong>Curiosidade:</strong> Nossos copos são feitos de material reciclável e todas as entregas são neutras em carbono.
          </div>
        </AboutText>
      </About>

      <Section>
        <SectionTitle>Perguntas Frequentes</SectionTitle>
        <CardGrid>
          <Card>
            <CardTitle>Quais regiões atendemos?</CardTitle>
            <CardText>
              Atendemos o centro e zona sul da cidade. Consulte disponibilidade no seu CEP!
            </CardText>
          </Card>
          <Card>
            <CardTitle>Quais métodos de pagamento?</CardTitle>
            <CardText>
              Aceitamos Pix, cartão de crédito/débito, vale-refeição e pagamento online.
            </CardText>
          </Card>
          <Card>
            <CardTitle>Posso personalizar meu pedido?</CardTitle>
            <CardText>
              Sim! Escolha o tipo, tamanho, extras, e faça observações especiais ao pedir.
            </CardText>
          </Card>
        </CardGrid>
      </Section>

      <Footer>
        <p>
          © {new Date().getFullYear()} Coffee Delivery. Todos os direitos
          reservados ☕<br />
          <small>
            Fale conosco: contato@coffeedelivery.com.br | Seguimos no Instagram <a href="https://instagram.com/coffeedeliverybr" target="_blank" rel="noopener noreferrer">@coffeedeliverybr</a>
          </small>
        </p>
      </Footer>
    </Container>
  );
}
