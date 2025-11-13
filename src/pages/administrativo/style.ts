import styled from "styled-components";

export const AdminContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(to bottom right, #fff8e1, #fef3c7);
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const AdminHeader = styled.header`
  background: #d97706;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 3rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
`;

export const AdminTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;

  span {
    color: #fde68a;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  img {
    border-radius: 50%;
    border: 2px solid #fff;
  }

  span {
    font-size: 1rem;
    font-weight: 500;
  }
`;

export const ButtonExit = styled.button`
  background: #fff;
  color: #92400e;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  padding: 0.4rem 1rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #fde68a;
    color: #78350f;
    transform: scale(1.05);
  }
`;

export const AdminContent = styled.main`
  flex: 1;
  padding: 3rem;
  color: #4b2e05;

  p {
    max-width: 700px;
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 2rem;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #92400e;
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

export const Card = styled.div`
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.1);
  transition: all 0.25s ease;
  border-top: 5px solid #d97706;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12);
  }
`;

export const CardTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  color: #78350f;
  margin-bottom: 0.5rem;
`;

export const CardText = styled.p`
  color: #6b3e1d;
  font-size: 0.95rem;
  line-height: 1.5;
`;
