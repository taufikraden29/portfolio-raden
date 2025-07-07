// src/components/TestimonialCard.jsx
import React from 'react';
import styled from 'styled-components';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { colors, spacing, borderRadius, typography, transitionDuration } from '../styles/variables';

const Card = styled.div`
  background-color: ${colors.background};
  border-radius: ${borderRadius};
  padding: ${spacing.large};
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
  transition: transform ${transitionDuration} ease, box-shadow ${transitionDuration} ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
  }
`;

const QuoteIconLeft = styled(FaQuoteLeft)`
  font-size: 2.5em;
  color: ${colors.accent};
  margin-bottom: ${spacing.medium};
  opacity: 0.2;
  position: absolute;
  top: ${spacing.medium};
  left: ${spacing.medium};
`;

const QuoteIconRight = styled(FaQuoteRight)`
  font-size: 2.5em;
  color: ${colors.accent};
  margin-top: ${spacing.medium};
  opacity: 0.2;
  position: absolute;
  bottom: ${spacing.medium};
  right: ${spacing.medium};
`;

const TestimonialText = styled.p`
  font-size: 1.1em;
  font-style: italic;
  line-height: 1.7;
  color: ${colors.text};
  margin: ${spacing.medium} 0;
  position: relative; /* Untuk z-index di atas ikon quote */
  z-index: 1;
`;

const ClientInfo = styled.div`
  margin-top: ${spacing.medium};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ClientImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: ${spacing.small};
  border: 3px solid ${colors.secondary};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const ClientName = styled.h4`
  font-size: 1.2em;
  font-weight: ${typography.fontWeightSemiBold};
  color: ${colors.primary};
  margin-bottom: ${spacing.xsmall};
`;

const ClientTitle = styled.p`
  font-size: 0.9em;
  color: ${colors.darkGray};
`;

const TestimonialCard = ({ testimonial }) => {
    return (
        <Card>
            <QuoteIconLeft />
            <TestimonialText>"{testimonial.quote}"</TestimonialText>
            <QuoteIconRight />
            <ClientInfo>
                <ClientImage src={testimonial.image} alt={testimonial.name} />
                <ClientName>{testimonial.name}</ClientName>
                <ClientTitle>{testimonial.title}</ClientTitle>
            </ClientInfo>
        </Card>
    );
};

export default TestimonialCard;
