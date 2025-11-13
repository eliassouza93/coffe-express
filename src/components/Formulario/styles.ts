import styled from "styled-components";

export const FormWrapper = styled.div`
  background: linear-gradient(135deg, #c49b63, #8b5e34);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 4rem;
`;

export const Form = styled.form`
  background: #fff8e6;
  padding: 2rem 3rem;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(75, 46, 5, 0.2);
  width: 100%;
  max-width: 650px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.2rem 2rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    max-width: 400px;
    padding: 2rem;
  }
`;

export const Title = styled.h1`
  grid-column: 1 / -1;
  font-size: 1.8rem;
  font-weight: 800;
  color: #6b3e1d;
  margin-bottom: 0.25rem;
  text-align: center;
`;

export const Subtitle = styled.p`
  grid-column: 1 / -1;
  color: #8b5e34;
  font-size: 1rem;
  margin-bottom: 1rem;
  text-align: center;
`;

export const Label = styled.label`
  font-weight: 600;
  color: #5c3d1e;
  text-align: left;
`;

export const Input = styled.input`
  padding: 0.8rem 1rem;
  border: 1px solid #d3b898;
  border-radius: 10px;
  background-color: #fff;
  color: #4b2e05;
  font-size: 1rem;
  transition: all 0.3s ease;
  width: 100%;

  &:focus {
    border-color: #c49b63;
    outline: none;
    box-shadow: 0 0 0 2px rgba(196, 155, 99, 0.3);
  }

  &::placeholder {
    color: #b39b82;
  }
`;

export const ErrorText = styled.span`
  color: #b91c1c;
  font-size: 0.9rem;
  grid-column: 1 / -1;
`;

export const Button = styled.button`
  grid-column: 1 / -1;
  background: #fde68a;
  color: #4b2e05;
  border: none;
  border-radius: 10px;
  padding: 0.8rem;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  margin-top: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    background: #fcd34d;
    transform: translateY(-2px);
  }
`;

export const SpanMessage = styled.div`
  grid-column: 1 / -1;
  margin-top: 0.8rem;
  text-align: center;

  a {
    color: #8b5e34;
    font-weight: 500;
    text-decoration: none;
    transition: color 0.2s;
  }
  a:hover {
    color: #6b3e1d;
  }
`;

export const Error = styled.p`
  color: #b91c1c;
  margin-top: 0.8rem;
  font-weight: 600;
  grid-column: 1 / -1;
  text-align: center;
`;
