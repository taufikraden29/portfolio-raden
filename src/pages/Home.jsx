// src/pages/Home.jsx
import React, { forwardRef } from 'react'; // Impor forwardRef
import styled, { keyframes } from 'styled-components';
import Button from '../components/Button';
// Hapus import { Link } dari 'react-router-dom';
import { colors, typography, spacing, breakpoints, transitionDuration } from '../styles/variables';
import heroBg from '../assets/react.svg';
import { Fade, Slide } from 'react-awesome-reveal';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HeroSection = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${heroBg}) center/cover no-repeat;
  background-attachment: fixed;
  color: ${colors.lightText};
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: ${spacing.xxlarge} ${spacing.large};
  position: relative;
  overflow: hidden;

  @media (max-width: ${breakpoints.mobile}) {
    padding: ${spacing.xlarge} ${spacing.medium};
    min-height: 80vh;
  }
`;

const HeroContent = styled.div`
  max-width: 900px;
`;

const HeroTitle = styled.h1`
  font-size: 4.5em;
  margin-bottom: ${spacing.medium};
  line-height: 1.1;
  color: ${colors.lightText};
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 2.8em;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.6em;
  margin-bottom: ${spacing.large};
  max-width: 700px;
  opacity: 0.9;
  font-weight: ${typography.fontWeightLight};

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.2em;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: ${spacing.medium};
  justify-content: center;

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
  }
`;

// Gunakan forwardRef untuk menerima ref
const Home = forwardRef((props, ref) => {
    return (
        <HeroSection ref={ref}> {/* Terapkan ref di sini */}
            <HeroContent>
                <Slide direction="down" triggerOnce>
                    <HeroTitle>Transformasi Ide Anda Menjadi Visual Memukau.</HeroTitle>
                </Slide>
                <Fade direction="up" triggerOnce delay={300}>
                    <HeroSubtitle>
                        Saya seorang desainer grafis profesional yang siap membantu brand Anda menonjol dengan desain yang inovatif dan strategis.
                    </HeroSubtitle>
                </Fade>
                <Fade direction="up" triggerOnce delay={600}>
                    <ButtonGroup>
                        {/* Ubah Link menjadi button dan tambahkan onClick untuk scroll */}
                        <Button $primary onClick={() => props.scrollToSection(props.refs.portfolioRef)}>
                            Lihat Portofolio
                        </Button>
                        <Button $outline onClick={() => props.scrollToSection(props.refs.contactRef)}>
                            Mulai Proyek Anda
                        </Button>
                    </ButtonGroup>
                </Fade>
            </HeroContent>
        </HeroSection>
    );
});

export default Home;
