import styled from "styled-components";

export const Container = styled.div`
  font-family: "Inter", sans-serif;
  color: #4b2e05;
  background-color: #fff8e6;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

export const Box = styled.div`
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 6px 18px rgba(75, 46, 5, 0.2);
  padding: 3rem 2.5rem;
  width: 100%;
  max-width: 500px;
  text-align: center;
  border: 1px solid #f5deb3;
`;

export const IconWrapper = styled.div`
  margin-bottom: 1.5rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 800;
  color: #6b3e1d;
  margin-bottom: 1rem;
`;

export const Subtitle = styled.p`
  font-size: 1.1rem;
  color: #7b5541;
  margin-bottom: 1rem;
`;

export const InfoText = styled.p`
  font-size: 0.95rem;
  color: #5c3d1e;
  margin-bottom: 2rem;
`;

export const ButtonHome = styled.button`
  background: #fde68a;
  color: #4b2e05;
  border: none;
  border-radius: 12px;
  padding: 0.9rem 1.8rem;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #fcd34d;
    transform: translateY(-2px);
  }
`;
