import {
  Container,
  Box,
  Title,
  Subtitle,
  IconWrapper,
  InfoText,
  ButtonHome,
} from "./style";
import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";  

export default function DeliveryPage() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <Container>
      <Box>
        <IconWrapper>
          <CheckCircle size={60} color="#fde68a" />
        </IconWrapper>
        <Title>Pedido Finalizado! ☕</Title>
        <Subtitle>
          Seu pedido foi confirmado e está a caminho. Aproveite seu café!
        </Subtitle>
        <InfoText>
          Você receberá uma notificação quando o pedido chegar.
        </InfoText>
        <ButtonHome onClick={handleGoHome}>Finalizar</ButtonHome>
      </Box>
    </Container>
  );
}
