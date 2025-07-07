// src/pages/Testimonials.jsx
import React, { forwardRef } from 'react'; // Impor forwardRef
import styled from 'styled-components';
import { Fade } from 'react-awesome-reveal';
import TestimonialCard from '../components/TestimonialCard';
import { colors, spacing, breakpoints, typography } from '../styles/variables';

const TestimonialsContainer = styled.section`
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

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: ${spacing.large};
  margin-top: ${spacing.xlarge};

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: ${spacing.medium};
  }
`;

const testimonialsData = [
    {
        id: 1,
        quote: "Desain yang luar biasa! [Nama Anda] berhasil menangkap esensi brand kami dengan sempurna. Komunikasi yang sangat baik dan hasil yang melampaui ekspektasi.",
        name: "Sarah Chen",
        title: "CEO, InnovateTech",
        image: "https://placehold.co/100x100/A7D9F0/333333?text=SC",
    },
    {
        id: 2,
        quote: "Sangat profesional dan kreatif. Proyek ilustrasi kami selesai tepat waktu dengan kualitas yang fantastis. Sangat direkomendasikan!",
        name: "David Lee",
        title: "Marketing Manager, GreenLeaf Organics",
        image: "https://placehold.co/100x100/F0A7D9/333333?text=DL",
    },
    {
        id: 3,
        quote: "Desain UI/UX website kami menjadi jauh lebih intuitif dan modern berkat [Nama Anda]. Pengalaman pengguna meningkat drastis.",
        name: "Maria Garcia",
        title: "Founder, Zenith Fitness",
        image: "https://placehold.co/100x100/D9F0A7/333333?text=MG",
    },
    {
        id: 4,
        quote: "Kerja sama yang menyenangkan! Logo baru kami terlihat sangat profesional dan mendapatkan banyak pujian dari pelanggan.",
        name: "John Smith",
        title: "Owner, Artisan Bakehouse",
        image: "https://placehold.co/100x100/F0D9A7/333333?text=JS",
    },
];

// Gunakan forwardRef untuk menerima ref
const Testimonials = forwardRef((props, ref) => {
    return (
        <TestimonialsContainer ref={ref}> {/* Terapkan ref di sini */}
            <Fade direction="down" triggerOnce>
                <SectionTitle>Kata Mereka Tentang Saya</SectionTitle>
            </Fade>
            <TestimonialsGrid>
                {testimonialsData.map((testimonial) => (
                    <Fade key={testimonial.id} direction="up" cascade damping={0.1} triggerOnce>
                        <TestimonialCard testimonial={testimonial} />
                    </Fade>
                ))}
            </TestimonialsGrid>
        </TestimonialsContainer>
    );
});

export default Testimonials;
