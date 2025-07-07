// src/pages/About.jsx
import React, { forwardRef } from 'react'; // Impor forwardRef
import styled from 'styled-components';
import { Fade, Slide } from 'react-awesome-reveal';
import { colors, spacing, breakpoints, typography, borderRadius } from '../styles/variables';

import profilePic from '../assets/react.svg';

const AboutContainer = styled.section`
  padding: ${spacing.xxlarge} ${spacing.large};
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

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

const ContentWrapper = styled.div`
  display: flex;
  gap: ${spacing.xlarge};
  align-items: center;
  text-align: left;
  margin-top: ${spacing.large};

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    text-align: center;
  }
`;

const ProfileImageWrapper = styled.div`
  flex: 0 0 300px;
  height: 300px;
  border-radius: ${borderRadius};
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  @media (max-width: ${breakpoints.tablet}) {
    flex: none;
    width: 250px;
    height: 250px;
    margin-bottom: ${spacing.large};
  }
`;

const AboutText = styled.div`
  flex: 1;
  p {
    font-size: 1.1em;
    line-height: 1.7;
    color: ${colors.text};
    margin-bottom: ${spacing.medium};
  }

  span {
    font-weight: ${typography.fontWeightSemiBold};
    color: ${colors.primary};
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 1em;
  }
`;

const HighlightText = styled.p`
  font-size: 1.3em;
  font-weight: ${typography.fontWeightBold};
  color: ${colors.accent};
  margin-top: ${spacing.large};
  font-family: ${typography.fontFamilySecondary};
`;

// Gunakan forwardRef untuk menerima ref
const About = forwardRef((props, ref) => {
    return (
        <AboutContainer ref={ref}> {/* Terapkan ref di sini */}
            <Fade direction="down" triggerOnce>
                <SectionTitle>Tentang Saya</SectionTitle>
            </Fade>
            <ContentWrapper>
                <Slide direction="left" triggerOnce>
                    <ProfileImageWrapper>
                        <img src={profilePic} alt="Your Profile" />
                    </ProfileImageWrapper>
                </Slide>
                <Slide direction="right" triggerOnce delay={200}>
                    <AboutText>
                        <p>
                            Halo! Saya <span>R Muhamad Irsyad Taufik</span>, seorang desainer grafis dengan passion mendalam dalam menciptakan visual yang tidak hanya indah, tetapi juga strategis dan efektif. Dengan pengalaman bertahun-tahun di industri kreatif, saya berdedikasi untuk membantu brand dan individu mewujudkan visi mereka melalui desain yang inovatif.
                        </p>
                        <p>
                            Saya percaya bahwa setiap desain memiliki cerita. Pendekatan saya berpusat pada pemahaman mendalam tentang kebutuhan klien dan audiens mereka, memastikan setiap elemen visual berfungsi untuk mencapai tujuan bisnis. Saya mengkhususkan diri dalam <span>desain logo, branding, UI/UX, ilustrasi, dan grafis media sosial</span>.
                        </p>
                        <p>
                            Saya selalu mengikuti tren desain terbaru dan terus mengasah keterampilan saya untuk memberikan hasil terbaik. Mari kita bekerja sama untuk menciptakan sesuatu yang luar biasa!
                        </p>
                        <HighlightText>
                            "Desain adalah pemikiran yang dibuat visual."
                        </HighlightText>
                    </AboutText>
                </Slide>
            </ContentWrapper>
        </AboutContainer>
    );
});

export default About;
