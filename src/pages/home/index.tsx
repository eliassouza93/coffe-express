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
            O melhor café da cidade entregue quentinho na sua porta. Escolha,
            peça e saboreie — simples assim ☕
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
              e aroma perfeitos em cada xícara.
            </CardText>
          </Card>

          <Card>
            <CardTitle>Entrega Rápida</CardTitle>
            <CardText>
              Seu café favorito entregue fresquinho em minutos. Praticidade e
              qualidade no conforto da sua casa.
            </CardText>
          </Card>

          <Card>
            <CardTitle>Assinatura Mensal</CardTitle>
            <CardText>
              Receba todos os meses uma seleção exclusiva de cafés premium
              direto da nossa torrefação.
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
          o seu dia com um bom café.
        </AboutText>
      </About>

      <Footer>
        <p>
          © {new Date().getFullYear()} Coffee Delivery. Todos os direitos
          reservados ☕
        </p>
      </Footer>
    </Container>
  );
}
