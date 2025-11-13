import { useState } from "react";
import {
  Container,
  Box,
  Title,
  Subtitle,
  PaymentOptions,
  Option,
  ButtonConfirm,
  InfoLine,
} from "./style";
import { cafesObj } from "../../utils/cafes";
import { useUser } from "../../context/ContextUser";
import { useNavigate } from "react-router-dom";

export default function PaymentsPage() {
  const [selected, setSelected] = useState<string | null>(null);

  const { cart , logout} = useUser();
  const navigate = useNavigate()

  const handleSelect = (option: string) => {
    setSelected(option);
  };

  const handleConfirm = () => {
    if (!selected) {

      alert("Por favor, selecione uma forma de pagamento 💰");
      return;
    }
    logout()
    navigate('/deliverypage')
  };
  const total = cafesObj.reduce((acc, cafe) => {
    const quantidade = cart[cafe.id] || 0;
    return acc + cafe.preco * quantidade;
  }, 0);

  return (
    <Container>
      <Box>
        <Title>💳 Pagamento</Title>
        <Subtitle>Escolha sua forma de pagamento preferida:</Subtitle>

        <InfoLine>
          Quantidade total:{" "}
          <span>
            {Object.values(cart || {}).reduce((total, qtd) => total + qtd, 0)}
          </span>
        </InfoLine>

        <InfoLine>
          Valor total: <span>R$ {total.toFixed(2)}</span>
        </InfoLine>

        <PaymentOptions>
          <Option
            selected={selected === "Cartão de Crédito"}
            onClick={() => handleSelect("Cartão de Crédito")}
          >
            💳 Cartão de Crédito
          </Option>

          <Option
            selected={selected === "Cartão de Débito"}
            onClick={() => handleSelect("Cartão de Débito")}
          >
            💳 Cartão de Débito
          </Option>

          <Option
            selected={selected === "Pix"}
            onClick={() => handleSelect("Pix")}
          >
            ⚡ Pix
          </Option>

          <Option
            selected={selected === "Dinheiro"}
            onClick={() => handleSelect("Dinheiro")}
          >
            💵 Dinheiro
          </Option>
        </PaymentOptions>

        <ButtonConfirm onClick={handleConfirm}>
          Confirmar Pagamento
        </ButtonConfirm>
      </Box>
    </Container>
  );
}
