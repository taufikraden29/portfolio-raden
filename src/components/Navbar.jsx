// src/components/Navbar.jsx
import React, { useState } from 'react';
// Hapus import { Link } dari 'react-router-dom';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';
import Button from './Button';
import { colors, breakpoints, spacing, transitionDuration, typography } from '../styles/variables';

const Nav = styled.nav`
  background-color: ${colors.background};
  color: ${colors.primary};
  padding: ${spacing.medium} ${spacing.large};
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  position: sticky;
  top: 0;
  z-index: 1000;
  height: 80px;

  @media (max-width: ${breakpoints.mobile}) {
    padding: ${spacing.medium};
  }
`;

const Logo = styled.button` /* Ubah Link menjadi button */
  background: none;
  border: none;
  font-size: 2em;
  font-weight: ${typography.fontWeightBold};
  color: ${colors.primary};
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: ${typography.fontFamilySecondary};
  transition: color ${transitionDuration} ease;
  cursor: pointer;

  &:hover {
    color: ${colors.accent};
  }
`;

const NavLinks = styled.ul`
  display: flex;
  gap: ${spacing.xlarge};
  align-items: center;

  @media (max-width: ${breakpoints.mobile}) {
    position: fixed;
    top: 80px;
    left: 0;
    width: 100%;
    height: calc(100vh - 80px);
    background-color: ${colors.background};
    flex-direction: column;
    justify-content: center;
    padding: ${spacing.large} 0;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
    transform: ${({ $isOpen }) => ($isOpen ? 'translateY(0)' : 'translateY(-100%)')};
    transition: transform ${transitionDuration} ease-in-out, opacity ${transitionDuration} ease-in-out;
    opacity: ${({ $isOpen }) => ($isOpen ? '1' : '0')};
    pointer-events: ${({ $isOpen }) => ($isOpen ? 'auto' : 'none')};
    overflow-y: auto;
  }
`;

const NavItem = styled.li`
  button { /* Ubah Link menjadi button */
    background: none;
    border: none;
    color: ${colors.primary};
    font-weight: ${typography.fontWeightMedium};
    font-size: 1.1em;
    position: relative;
    padding: ${spacing.xsmall} 0;
    cursor: pointer;
    font-family: ${typography.fontFamilyPrimary}; /* Pastikan font family diterapkan */

    &::after {
      content: '';
      position: absolute;
      width: 0;
      height: 3px;
      bottom: -8px;
      left: 50%;
      transform: translateX(-50%);
      background-color: ${colors.secondary};
      transition: width ${transitionDuration} ease;
    }

    &:hover::after {
      width: 100%;
    }
  }

  ${Button} {
    margin-left: ${spacing.medium};
    padding: ${spacing.small} ${spacing.large};
    font-size: 1em;
  }
`;

const MobileIcon = styled.div`
  display: none;
  font-size: 2em;
  cursor: pointer;
  color: ${colors.primary};
  z-index: 1001;

  @media (max-width: ${breakpoints.mobile}) {
    display: block;
  }
`;

// Terima props scrollToSection dan refs dari App.jsx
const Navbar = ({ scrollToSection, refs }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleNavClick = (ref) => {
        scrollToSection(ref);
        toggleMenu(); // Tutup menu mobile setelah klik
    };

    return (
        <Nav>
            <Logo onClick={() => handleNavClick(refs.homeRef)}>YourName</Logo> {/* Logo scroll ke Home */}
            <MobileIcon onClick={toggleMenu}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavLinks $isOpen={isOpen}>
                <NavItem>
                    <button onClick={() => handleNavClick(refs.homeRef)}>Home</button>
                </NavItem>
                <NavItem>
                    <button onClick={() => handleNavClick(refs.aboutRef)}>About</button>
                </NavItem>
                <NavItem>
                    <button onClick={() => handleNavClick(refs.servicesRef)}>Services</button>
                </NavItem>
                <NavItem>
                    <button onClick={() => handleNavClick(refs.portfolioRef)}>Portfolio</button>
                </NavItem>
                <NavItem>
                    <button onClick={() => handleNavClick(refs.testimonialsRef)}>Testimonials</button>
                </NavItem>
                <NavItem>
                    <button onClick={() => handleNavClick(refs.processRef)}>Process</button>
                </NavItem>
                <NavItem>
                    <Button $primary onClick={() => handleNavClick(refs.contactRef)}>Pesan Desain</Button> {/* Button juga scroll */}
                </NavItem>
            </NavLinks>
        </Nav>
    );
};

export default Navbar;
