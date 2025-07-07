// src/components/Footer.jsx
import React from 'react';
import styled from 'styled-components';
import { FaInstagram, FaLinkedin, FaBehance, FaDribbble } from 'react-icons/fa';
import { colors, spacing, breakpoints } from '../styles/variables';

const FooterContainer = styled.footer`
  background-color: ${colors.primary};
  color: ${colors.lightText};
  padding: ${spacing.xlarge} ${spacing.large};
  text-align: center;
  margin-top: ${spacing.xlarge};

  @media (max-width: ${breakpoints.mobile}) {
    padding: ${spacing.large} ${spacing.medium};
  }
`;

const SocialLinks = styled.div`
  margin-bottom: ${spacing.medium};

  a {
    color: ${colors.lightText};
    font-size: 1.8em;
    margin: 0 ${spacing.medium};
    transition: color 0.3s ease;

    &:hover {
      color: ${colors.secondary};
    }
  }
`;

const Copyright = styled.p`
  font-size: 0.9em;
  opacity: 0.8;
`;

const Footer = () => {
    return (
        <FooterContainer>
            <SocialLinks>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://behance.net" target="_blank" rel="noopener noreferrer">
                    <FaBehance />
                </a>
                <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">
                    <FaDribbble />
                </a>
            </SocialLinks>
            <Copyright>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</Copyright>
        </FooterContainer>
    );
};

export default Footer;