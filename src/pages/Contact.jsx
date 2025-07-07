// src/pages/Contact.jsx
import React, { useState, forwardRef } from 'react'; // Impor forwardRef
import styled from 'styled-components';
import Button from '../components/Button';
import { colors, spacing, breakpoints, borderRadius, typography, transitionDuration } from '../styles/variables';
import { Fade, Slide } from 'react-awesome-reveal';

const ContactContainer = styled.section`
  padding: ${spacing.xxlarge} ${spacing.large};
  text-align: center;
  max-width: 800px;
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

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${spacing.medium};
  background-color: ${colors.background};
  border-radius: ${borderRadius};
  padding: ${spacing.xlarge};
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);

  @media (max-width: ${breakpoints.mobile}) {
    padding: ${spacing.large};
  }
`;

const FormGroup = styled.div`
  text-align: left;

  label {
    display: block;
    margin-bottom: ${spacing.small};
    font-weight: ${typography.fontWeightSemiBold};
    color: ${colors.darkGray};
    font-size: 1.05em;
  }

  input,
  textarea,
  select {
    width: 100%;
    padding: ${spacing.medium};
    border: 2px solid ${colors.lightGray};
    border-radius: ${borderRadius};
    font-family: ${typography.fontFamilyPrimary};
    font-size: 1em;
    outline: none;
    transition: border-color ${transitionDuration} ease, box-shadow ${transitionDuration} ease;
    background-color: ${colors.lightGray};

    &:focus {
      border-color: ${colors.primary};
      box-shadow: 0 0 0 3px ${colors.primary}30;
      background-color: ${colors.background};
    }
  }

  textarea {
    resize: vertical;
    min-height: 150px;
  }
`;

// Gunakan forwardRef untuk menerima ref
const Contact = forwardRef((props, ref) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const whatsappNumber = '6285179999132'; // Ganti dengan nomor WhatsApp Anda
        const message = `Halo, saya ${formData.name} (${formData.email}).\n\nSaya tertarik dengan layanan: ${formData.service}.\n\nPesan saya:\n${formData.message}\n\nTerima kasih.`;
        const encodedMessage = encodeURIComponent(message);
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

        window.open(whatsappURL, '_blank');

        console.log('Form data submitted and WhatsApp opened:', formData);

        setFormData({
            name: '',
            email: '',
            service: '',
            message: '',
        });
    };

    return (
        <ContactContainer ref={ref}> {/* Terapkan ref di sini */}
            <Fade direction="down" triggerOnce>
                <SectionTitle>Pesan Desain Anda</SectionTitle>
            </Fade>
            <Fade direction="up" triggerOnce delay={200}>
                <p style={{ marginBottom: spacing.large, color: colors.darkGray }}>
                    Isi formulir di bawah ini dan saya akan segera menghubungi Anda untuk mendiskusikan proyek desain Anda.
                </p>
            </Fade>
            <Slide direction="up" triggerOnce delay={400}>
                <ContactForm onSubmit={handleSubmit}>
                    <FormGroup>
                        <label htmlFor="name">Nama Lengkap</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        <label htmlFor="email">Email Anda</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        <label htmlFor="service">Jenis Layanan</label>
                        <select
                            id="service"
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            required
                        >
                            <option value="">-- Pilih Layanan --</option>
                            <option value="Logo Design">Desain Logo & Branding</option>
                            <option value="Illustration">Ilustrasi & Grafis Kustom</option>
                            <option value="Web UI/UX">Desain UI/UX Website</option>
                            <option value="Mobile App Design">Desain Aplikasi Mobile</option>
                            <option value="Social Media Design">Desain Media Sosial</option>
                            <option value="Other">Lainnya</option>
                        </select>
                    </FormGroup>
                    <FormGroup>
                        <label htmlFor="message">Pesan / Detail Proyek</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </FormGroup>
                    <Button $primary type="submit">Kirim Pesan</Button>
                </ContactForm>
            </Slide>
        </ContactContainer>
    );
});

export default Contact;
