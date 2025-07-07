// src/components/ScrollToTopButton.jsx
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaArrowUp } from 'react-icons/fa';
// Pastikan 'breakpoints' diimpor di sini
import { colors, spacing, borderRadius, transitionDuration, breakpoints } from '../styles/variables';

const StyledScrollButton = styled.button`
  position: fixed;
  bottom: ${spacing.large};
  right: ${spacing.large};
  background-color: ${colors.primary};
  color: ${colors.lightText};
  border: none;
  border-radius: 50%; /* Bentuk bulat */
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: opacity ${transitionDuration} ease, transform ${transitionDuration} ease;
  opacity: ${({ $isVisible }) => ($isVisible ? '1' : '0')};
  transform: ${({ $isVisible }) => ($isVisible ? 'translateY(0)' : 'translateY(20px)')};
  z-index: 9999; /* Pastikan di atas sebagian besar elemen */

  @media (max-width: ${breakpoints.mobile}) { /* Ini yang diperbaiki */
    bottom: ${spacing.medium};
    right: ${spacing.medium};
    width: 45px;
    height: 45px;
    font-size: 1.3em;
  }
`;

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) { // Muncul setelah scroll 300px
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Scroll to top when button is clicked
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Animasi smooth scroll
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <StyledScrollButton onClick={scrollToTop} $isVisible={isVisible}>
            <FaArrowUp />
        </StyledScrollButton>
    );
};

export default ScrollToTopButton;
