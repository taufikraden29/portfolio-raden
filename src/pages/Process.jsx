// src/pages/Process.jsx
import React, { forwardRef } from 'react'; // Impor forwardRef
import styled from 'styled-components';
import { Fade, Slide } from 'react-awesome-reveal';
// Pastikan 'transitionDuration' diimpor di sini
import { colors, spacing, breakpoints, typography, borderRadius, transitionDuration } from '../styles/variables';
import { FaLightbulb, FaSearch, FaPalette, FaSyncAlt, FaCheckCircle } from 'react-icons/fa';

const ProcessContainer = styled.section`
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

const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${spacing.large};
  margin-top: ${spacing.xlarge};

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: ${spacing.medium};
  }
`;

const ProcessStep = styled.div`
  background-color: ${colors.background};
  border-radius: ${borderRadius};
  padding: ${spacing.large};
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  /* Perbaikan di sini: pastikan transitionDuration digunakan dengan benar */
  transition: transform ${transitionDuration} ease, box-shadow ${transitionDuration} ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  }

  .icon {
    font-size: 3.5em;
    color: ${colors.secondary};
    margin-bottom: ${spacing.medium};
    transition: transform ${transitionDuration} ease, color ${transitionDuration} ease;
  }

  &:hover .icon {
    transform: scale(1.1);
    color: ${colors.primary};
  }

  h3 {
    color: ${colors.primary};
    margin-bottom: ${spacing.small};
    font-size: 1.5em;
    font-family: ${typography.fontFamilySecondary};
  }

  p {
    color: ${colors.darkGray};
    font-size: 1em;
    line-height: 1.6;
  }

  &::before {
    content: "${props => props.$stepNumber}";
    position: absolute;
    top: ${spacing.medium};
    right: ${spacing.medium};
    font-size: 3em;
    font-weight: ${typography.fontWeightBold};
    color: ${colors.lightGray};
    opacity: 0.5;
    z-index: 0;
  }
`;

const processData = [
    {
        step: 1,
        icon: <FaLightbulb className="icon" />,
        title: 'Penemuan & Ideasi',
        description: 'Kami memulai dengan memahami visi, tujuan, dan target audiens Anda. Ini melibatkan sesi brainstorming dan riset mendalam.',
    },
    {
        step: 2,
        icon: <FaSearch className="icon" />,
        title: 'Riset & Konseptualisasi',
        description: 'Berdasarkan penemuan, kami melakukan riset pasar dan kompetitor, lalu mengembangkan beberapa konsep desain awal.',
    },
    {
        step: 3,
        icon: <FaPalette className="icon" />,
        title: 'Pengembangan Desain',
        description: 'Konsep yang disetujui akan dikembangkan menjadi desain yang lebih detail, termasuk pemilihan warna, tipografi, dan elemen visual.',
    },
    {
        step: 4,
        icon: <FaSyncAlt className="icon" />,
        title: 'Revisi & Umpan Balik',
        description: 'Kami menyajikan desain dan mengumpulkan umpan balik Anda untuk melakukan revisi yang diperlukan hingga Anda sepenuhnya puas.',
    },
    {
        step: 5,
        icon: <FaCheckCircle className="icon" />,
        title: 'Finalisasi & Penyerahan',
        description: 'Setelah desain disetujui, kami menyiapkan semua file dalam format yang diperlukan dan menyerahkannya kepada Anda.',
    },
];

// Gunakan forwardRef untuk menerima ref
const Process = forwardRef((props, ref) => {
    return (
        <ProcessContainer ref={ref}> {/* Terapkan ref di sini */}
            <Fade direction="down" triggerOnce>
                <SectionTitle>Proses Kerja Kami</SectionTitle>
            </Fade>
            <ProcessGrid>
                {processData.map((item, index) => (
                    <Fade key={item.step} direction="up" cascade damping={0.1} triggerOnce delay={index * 100}>
                        <ProcessStep $stepNumber={item.step}>
                            {item.icon}
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </ProcessStep>
                    </Fade>
                ))}
            </ProcessGrid>
        </ProcessContainer>
    );
});

export default Process;
