import {
  Actions,
  Box,
  ButtonAdd,
  ButtonMais,
  ButtonMenos,
  Card,
  Container,
  Content,
  Grid,
  Image,
  ImageWrapper,
  Nome,
  Preco,
  Quantidade,
  QuantidadeWrapper,
  Title,
} from "./style";
import type CafeInterface from "../../utils/cafes";
import { cafesObj } from "../../utils/cafes";
import { useUser } from "../../context/ContextUser";
import { useNavigate } from "react-router-dom";

export default function ProjectSobre() {
  const navigate = useNavigate();

  const adicionarCarrinho = (cafe: CafeInterface) => {
    // const cofeQnt = cart[cafe.id] || 0;
    if (cart[cafe.id] > 0) {
      //   alert(`🛒 ${cofeQnt}x ${cafe.nome} adicionado(s) ao carrinho!`);

      navigate("/paymentspage");
    } else {
      // alert("Selecione pelo menos 1 unidade!");
    }
  };

  const { cart, addToCart, removeFromCart } = useUser();
  return (
    <Container>
      <Box>
        <Title>☕ Escolha seu Café Preferido</Title>

        <Grid>
          {cafesObj.map((cafe) => (
            <Card key={cafe.id}>
              <ImageWrapper>
                <Image src={cafe.imagem} alt={cafe.nome} />
              </ImageWrapper>

              <Content>
                <div>
                  <Nome>{cafe.nome}</Nome>
                  <Preco>R$ {cafe.preco.toFixed(2)}</Preco>
                </div>

                <Actions>
                  <QuantidadeWrapper>
                    <ButtonMenos onClick={() => removeFromCart(cafe.id)}>
                      -
                    </ButtonMenos>
                    <Quantidade>{cart[cafe.id] || 0}</Quantidade>
                    <ButtonMais onClick={() => addToCart(cafe.id)}>
                      +
                    </ButtonMais>
                  </QuantidadeWrapper>

                  <ButtonAdd onClick={() => adicionarCarrinho(cafe)}>
                    Pagemento
                  </ButtonAdd>
                </Actions>
              </Content>
            </Card>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
