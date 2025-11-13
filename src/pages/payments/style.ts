import styled from "styled-components";

export const Container = styled.div`
  font-family: "Inter", sans-serif;
  color: #4b2e05;
  background-color: #fff8e6;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 4rem;
`;

export const Box = styled.div`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(75, 46, 5, 0.1);
  padding: 2rem 3rem;
  width: 100%;
  max-width: 700px;
  text-align: center;
  border: 1px solid #f5deb3;
`;

export const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: 800;
  color: #6b3e1d;
  margin-bottom: 0.5rem;
`;

export const Subtitle = styled.p`
  font-size: 1rem;
  color: #7b5541;
  margin-bottom: 1.5rem;
  line-height: 1.4;
`;

export const InfoLine = styled.p`
  font-size: 1.1rem;
  font-weight: 600;
  color: #5c3d1e;
  background: #fff3d9;
  border: 1px solid #f5deb3;
  border-radius: 10px;
  padding: 0.8rem 1rem;
  margin: 0.5rem auto;
  max-width: 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-weight: 700;
    color: #8b5e34;
  }
`;

export const PaymentOptions = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin: 1.5rem 0;
`;

export const Option = styled.button<{ selected: boolean }>`
  flex: 1 1 45%;
  background: ${({ selected }) => (selected ? "#fcd34d" : "#fff3d9")};
  color: #4b2e05;
  border: 2px solid ${({ selected }) => (selected ? "#eab308" : "#f5deb3")};
  border-radius: 12px;
  padding: 0.8rem 1rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 200px;

  &:hover {
    background: #fde68a;
    transform: translateY(-2px);
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const ButtonConfirm = styled.button`
  background: #c49b63;
  color: white;
  border: none;
  border-radius: 12px;
  padding: 0.8rem 2rem;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1.5rem;

  &:hover {
    background: #8b5e34;
    transform: translateY(-2px);
  }
`;
