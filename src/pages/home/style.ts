import styled from "styled-components";

export const Container = styled.div`
  font-family: "Inter", sans-serif;
  color: #4b2e05;
  background-color: #fff8e6;
  overflow-x: hidden;
`;

export const Hero = styled.section`
  background: linear-gradient(135deg, #c49b63, #8b5e34);
  color: white;
  padding: 6rem 2rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeroContent = styled.div`
  max-width: 800px;
`;

export const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1rem;

  span {
    color: #fde68a;
  }

  @media (max-width: 768px) {
    font-size: 2.25rem;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  opacity: 0.95;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

export const HeroButton = styled.button`
  background: #fde68a;
  color: #5c3d1e;
  padding: 0.9rem 1.8rem;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #fcd34d;
    transform: translateY(-2px);
  }
`;

export const Section = styled.section`
  padding: 5rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  color: #6b3e1d;
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

export const Card = styled.div`
  background: #fff;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(75, 46, 5, 0.1);
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid #f5deb3;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 18px rgba(75, 46, 5, 0.15);
  }
`;

export const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #5c3d1e;
  margin-bottom: 0.75rem;
`;

export const CardText = styled.p`
  font-size: 1rem;
  color: #7b5541;
  line-height: 1.6;
`;

export const About = styled.section`
  background: #fff3d9;
  padding: 5rem 2rem;
  text-align: center;
`;

export const AboutText = styled.p`
  max-width: 800px;
  margin: 0 auto;
  font-size: 1.1rem;
  color: #4b2e05;
  line-height: 1.7;
`;

export const Footer = styled.footer`
  background: #8b5e34;
  color: #fff;
  text-align: center;
  padding: 1.5rem;
  font-size: 0.9rem;
`;
