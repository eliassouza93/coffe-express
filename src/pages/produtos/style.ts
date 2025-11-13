import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(to bottom, #fff8e1, #ffecb3);
  padding: 3rem 2rem;
  display: flex;
  justify-content: center;
`;

export const Box = styled.div`
  width: 100%;
  max-width: 1200px;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  color: #92400e;
  text-align: center;
  margin-bottom: 2.5rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Grid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
`;

export const Card = styled.div`
  background: #fff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;

  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
  }
`;

export const ImageWrapper = styled.div`
  height: 160px;
  width: 100%;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;

  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

export const Content = styled.div`
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`;

export const Nome = styled.h2`
  font-size: 1.125rem;
  font-weight: 600;
  color: #333;
`;

export const Preco = styled.p`
  color: #b45309;
  font-weight: 700;
  margin-top: 0.25rem;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.25rem;
`;

export const QuantidadeWrapper = styled.div`
  display: flex;
  align-items: center;
  background: #fef3c7;
  border-radius: 8px;
`;

export const ButtonMenos = styled.button`
  background: transparent;
  border: none;
  color: #92400e;
  font-size: 1.2rem;
  padding: 0.4rem 0.75rem;
  border-radius: 8px 0 0 8px;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: #fde68a;
  }
`;

export const ButtonMais = styled(ButtonMenos)`
  border-radius: 0 8px 8px 0;
`;

export const Quantidade = styled.span`
  font-weight: 500;
  width: 32px;
  text-align: center;
  color: #444;
`;

export const ButtonAdd = styled.button`
  background: #d97706;
  color: white;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background 0.25s ease, transform 0.15s ease;

  &:hover {
    background: #b45309;
    transform: scale(1.03);
  }
`;
