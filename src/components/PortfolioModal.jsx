// src/components/PortfolioModal.jsx
import React from 'react';
import styled from 'styled-components';
import ReactModal from 'react-modal';
import { FaTimes } from 'react-icons/fa';
import { colors, spacing, borderRadius, typography, transitionDuration, breakpoints } from '../styles/variables';

ReactModal.setAppElement('#root');

const StyledModalContent = styled.div`
  background-color: ${colors.background};
  border-radius: ${borderRadius};
  padding: ${spacing.large};
  outline: none;
  max-width: 900px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;

  @media (max-width: ${breakpoints.mobile}) {
    padding: ${spacing.medium}; /* Kurangi padding */
    width: 95%; /* Sedikit lebih lebar di mobile */
    max-height: 95vh; /* Tinggi maksimal lebih besar di mobile */
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${spacing.medium};
  border-bottom: 1px solid ${colors.lightGray};
  padding-bottom: ${spacing.small};

  @media (max-width: ${breakpoints.mobile}) {
    margin-bottom: ${spacing.small};
    padding-bottom: ${spacing.xsmall};
  }
`;

const ModalTitle = styled.h3`
  font-size: 2em;
  color: ${colors.primary};
  font-family: ${typography.fontFamilySecondary};
  margin: 0;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.5em; /* Ukuran judul modal lebih kecil */
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 2em;
  color: ${colors.darkGray};
  cursor: pointer;
  transition: color ${transitionDuration} ease;

  &:hover {
    color: ${colors.accent};
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.5em; /* Ukuran tombol tutup lebih kecil */
  }
`;

const ModalImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: ${borderRadius};
  margin-bottom: ${spacing.medium};

  @media (max-width: ${breakpoints.mobile}) {
    margin-bottom: ${spacing.small};
  }
`;

const ModalDescription = styled.p`
  font-size: 1em;
  line-height: 1.6;
  color: ${colors.text};
  margin-bottom: ${spacing.medium};

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.95em; /* Ukuran deskripsi modal lebih kecil */
    margin-bottom: ${spacing.small};
  }
`;

const ModalDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${spacing.medium};
  margin-top: ${spacing.medium};
  padding-top: ${spacing.medium};
  border-top: 1px solid ${colors.lightGray};
  font-size: 0.95em;
  color: ${colors.darkGray};

  span {
    font-weight: ${typography.fontWeightSemiBold};
    color: ${colors.primary};
  }

  @media (max-width: ${breakpoints.mobile}) {
    gap: ${spacing.small}; /* Kurangi gap detail */
    margin-top: ${spacing.small};
    padding-top: ${spacing.small};
    font-size: 0.85em; /* Ukuran detail lebih kecil */
  }
`;

const customStyles = {
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        zIndex: 10000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        position: 'relative',
        top: 'auto',
        left: 'auto',
        right: 'auto',
        bottom: 'auto',
        border: 'none',
        background: 'none',
        padding: '0',
        overflow: 'visible',
    },
};

const PortfolioModal = ({ isOpen, onRequestClose, item }) => {
    if (!item) return null;

    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            style={customStyles}
            contentLabel="Detail Proyek Portofolio"
        >
            <StyledModalContent>
                <ModalHeader>
                    <ModalTitle>{item.title}</ModalTitle>
                    <CloseButton onClick={onRequestClose}>
                        <FaTimes />
                    </CloseButton>
                </ModalHeader>
                <ModalImage src={item.image} alt={item.title} />
                <ModalDescription>{item.description}</ModalDescription>
                <ModalDetails>
                    <p>Kategori: <span>{item.category}</span></p>
                    {item.tools && <p>Tools: <span>{item.tools}</span></p>}
                    {item.client && <p>Klien: <span>{item.client}</span></p>}
                    {item.challenge && <p>Tantangan: <span>{item.challenge}</span></p>}
                    {item.solution && <p>Solusi: <span>{item.solution}</span></p>}
                </ModalDetails>
            </StyledModalContent>
        </ReactModal>
    );
};

export default PortfolioModal;
