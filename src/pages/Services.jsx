// src/pages/Services.jsx
import React, { forwardRef } from 'react'; // Impor forwardRef
import styled from 'styled-components';
import { FaPencilRuler, FaPaintBrush, FaGlobe, FaMobileAlt, FaShareAlt } from 'react-icons/fa';
import { colors, spacing, breakpoints, borderRadius, typography, transitionDuration } from '../styles/variables';
import { Fade, Slide } from 'react-awesome-reveal';

const ServicesContainer = styled.section`
  padding: ${spacing.xxlarge} ${spacing.large};
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: ${breakpoints.mobile}) {
    padding: ${spacing.xlarge} ${spacing.medium};
  }
`;

const SectionTitle = styled.h2`
  margin-bottom: ${spacing.xlarge};
  font-size: 2.8em;
  color: ${colors.primary};
  font-family: ${typography.fontFamilySecondary};

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 2em;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${spacing.large};
  margin-top: ${spacing.xlarge};

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: ${spacing.medium};
  }
`;

const ServiceCard = styled.div`
  background-color: ${colors.background};
  border-radius: ${borderRadius};
  padding: ${spacing.large};
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  transition: transform ${transitionDuration} ease, box-shadow ${transitionDuration} ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: ${borderRadius};
    background: linear-gradient(45deg, ${colors.gradientStart}, ${colors.gradientEnd});
    opacity: 0;
    transition: opacity ${transitionDuration} ease;
    z-index: 0;
  }

  &:hover::before {
    opacity: 1;
  }

  .icon {
    font-size: 3.5em;
    color: ${colors.accent};
    margin-bottom: ${spacing.medium};
    transition: transform ${transitionDuration} ease, color ${transitionDuration} ease;
    position: relative;
    z-index: 1;
  }

  &:hover .icon {
    transform: scale(1.1);
    color: ${colors.lightText};
  }

  h3 {
    color: ${colors.primary};
    margin-bottom: ${spacing.small};
    font-size: 1.5em;
    font-family: ${typography.fontFamilySecondary};
    position: relative;
    z-index: 1;
    transition: color ${transitionDuration} ease;
  }
  &:hover h3 {
    color: ${colors.lightText};
  }

  p {
    color: ${colors.darkGray};
    font-size: 1em;
    position: relative;
    z-index: 1;
    transition: color ${transitionDuration} ease;
  }
  &:hover p {
    color: ${colors.lightText};
  }
`;

const servicesData = [
    {
        icon: <FaPencilRuler className="icon" />,
        title: 'Desain Logo & Branding',
        description: 'Menciptakan identitas merek yang kuat dan berkesan untuk bisnis Anda.',
    },
    {
        icon: <FaPaintBrush className="icon" />,
        title: 'Ilustrasi & Grafis Kustom',
        description: 'Ilustrasi unik dan grafis yang menarik untuk berbagai keperluan.',
    },
    {
        icon: <FaGlobe className="icon" />,
        title: 'Desain UI/UX Website',
        description: 'Mendesain antarmuka web yang intuitif dan pengalaman pengguna yang luar biasa.',
    },
    {
        icon: <FaMobileAlt className="icon" />,
        title: 'Desain Aplikasi Mobile',
        description: 'Merancang desain antarmuka aplikasi mobile yang fungsional dan estetis.',
    },
    {
        icon: <FaShareAlt className="icon" />,
        title: 'Desain Media Sosial',
        description: 'Grafis menarik untuk kampanye media sosial Anda yang efektif dan konsisten.',
    },
];

// Gunakan forwardRef untuk menerima ref
const Services = forwardRef((props, ref) => {
    return (
        <ServicesContainer ref={ref}> {/* Terapkan ref di sini */}
            <Fade direction="down" triggerOnce>
                <SectionTitle>Layanan Desain Kami</SectionTitle>
            </Fade>
            <ServicesGrid>
                {servicesData.map((service, index) => (
                    <Fade key={index} direction="up" cascade damping={0.1} triggerOnce>
                        <ServiceCard>
                            {service.icon}
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </ServiceCard>
                    </Fade>
                ))}
            </ServicesGrid>
        </ServicesContainer>
    );
});

export default Services;
