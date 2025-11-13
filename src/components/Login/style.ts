import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom right, #fff8e1, #fde68a);
  font-family: "Poppins", sans-serif;
`;

export const LoginBox = styled.div`
  background: #fff;
  border-radius: 20px;
  padding: 3rem 2.5rem;
  width: 100%;
  max-width: 420px;
  box-shadow: 0 10px 25px rgba(139, 94, 52, 0.25);
  text-align: center;
  animation: fadeIn 0.6s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 800;
  color: #6b3e1d;
  margin-bottom: 0.5rem;
`;

export const Subtitle = styled.p`
  color: #8b5e34;
  font-size: 1rem;
  margin-bottom: 2rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Input = styled.input`
  padding: 0.8rem 1rem;
  border: 2px solid #fcd34d;
  border-radius: 10px;
  outline: none;
  font-size: 1rem;
  transition: all 0.2s ease;

  &:focus {
    border-color: #d97706;
    box-shadow: 0 0 0 3px rgba(217, 119, 6, 0.2);
  }

  &::placeholder {
    color: #a3a3a3;
  }
`;

export const Button = styled.button`
  background: #d97706;
  color: #fff;
  font-weight: 600;
  font-size: 1rem;
  border: none;
  border-radius: 10px;
  padding: 0.8rem 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #b45309;
    transform: scale(1.03);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const ErrorText = styled.p`
  color: #b91c1c;
  background: #fee2e2;
  border-radius: 8px;
  padding: 0.5rem;
  margin-top: 1rem;
  font-size: 0.9rem;
`;

export const FooterText = styled.p`
  margin-top: 1.5rem;
  color: #7c4a21;
  font-size: 0.9rem;

  a {
    color: #b45309;
    font-weight: 600;
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: #92400e;
    }
  }
`;
