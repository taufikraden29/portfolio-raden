// src/components/Button.jsx
import styled from 'styled-components';
import { colors, spacing, borderRadius, transitionDuration, typography } from '../styles/variables';

const StyledButton = styled.button`
  display: inline-block;
  padding: ${spacing.medium} ${spacing.large};
  border: none;
  border-radius: ${borderRadius};
  font-family: ${typography.fontFamilyPrimary};
  font-weight: ${typography.fontWeightSemiBold}; /* Lebih tebal */
  cursor: pointer;
  transition: all ${transitionDuration} ease; /* Transisi untuk semua properti */
  font-size: 1.05em; /* Sedikit lebih besar */
  text-transform: uppercase; /* Huruf kapital */
  letter-spacing: 0.5px;

  ${(props) =>
        props.$primary &&
        `
    background-color: ${colors.primary};
    color: ${colors.lightText};
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

    &:hover {
      background-color: ${colors.accent};
      transform: translateY(-3px); /* Efek angkat */
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
    }
  `}

  ${(props) =>
        props.$secondary &&
        `
    background-color: ${colors.secondary};
    color: ${colors.text};
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

    &:hover {
      background-color: ${colors.primary};
      color: ${colors.lightText};
      transform: translateY(-3px);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
    }
  `}

  ${(props) =>
        props.$outline &&
        `
    background-color: transparent;
    color: ${colors.lightText}; /* Warna teks putih untuk kontras di hero */
    border: 2px solid ${colors.lightText};
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

    &:hover {
      background-color: ${colors.lightText};
      color: ${colors.primary};
      transform: translateY(-3px);
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    }
  `}
`;

const Button = ({ children, ...props }) => {
    return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
