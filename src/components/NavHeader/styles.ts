import styled from "styled-components";

export const NavContainer = styled.nav`
  width: 100%;
  background: linear-gradient(90deg, #6b3e1d, #8b5e34);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2.5rem;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 4px 12px rgba(107, 62, 29, 0.3);
`;

export const Brand = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  font-weight: 800;
  color: #fde68a;
  gap: 0.4rem;

  span {
    color: #fff8e6;
    font-weight: 700;
  }
`;

export const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

export const NavItem = styled.li`
  list-style: none;

  a {
    text-decoration: none;
    color: #fff8e6;
    font-weight: 500;
    transition: color 0.3s ease;

    &:hover {
      color: #fde68a;
      text-decoration: overline;
    }

    &.active {
      color: #fde68a;
      text-decoration: overline;
    }
  }
`;

export const NavInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  font-size: 0.95rem;

  p {
    cursor: pointer;
    color: #fff8e6;
    margin: 0;
    strong {
      color: #fde68a;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-end;
    gap: 0.5rem;
  }
`;

export const ButtonExit = styled.button`
  background: #fde68a;
  color: #4b2e05;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #fcd34d;
    transform: translateY(-2px);
  }
`;
