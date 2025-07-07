// src/pages/Portfolio.jsx
import React, { useState, forwardRef } from 'react'; // Impor forwardRef
import styled from 'styled-components';
import { colors, spacing, breakpoints, borderRadius, typography, transitionDuration } from '../styles/variables';
import { FaArrowRight } from 'react-icons/fa';
import { Fade } from 'react-awesome-reveal';
import PortfolioModal from '../components/PortfolioModal';

const PortfolioContainer = styled.section`
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

const FilterButtons = styled.div`
  margin-bottom: ${spacing.xlarge};
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: ${spacing.medium};

  button {
    background-color: ${colors.lightGray};
    border: none;
    color: ${colors.darkGray};
    padding: ${spacing.small} ${spacing.large};
    border-radius: ${borderRadius};
    cursor: pointer;
    font-weight: ${typography.fontWeightSemiBold};
    transition: all ${transitionDuration} ease;
    font-family: ${typography.fontFamilyPrimary};
    font-size: 1.05em;
    position: relative;
    overflow: hidden;

    &:hover {
      background-color: ${colors.primary};
      color: ${colors.lightText};
      transform: translateY(-3px);
      box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
    }

    &.active {
      background-color: ${colors.primary};
      color: ${colors.lightText};
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    }

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 3px;
      background-color: ${colors.secondary};
      transform: translateX(-100%);
      transition: transform ${transitionDuration} ease-out;
    }

    &:hover::after {
      transform: translateX(0);
    }

    &.active::after {
      transform: translateX(0);
      background-color: ${colors.secondary};
    }

    @media (max-width: ${breakpoints.mobile}) {
      padding: ${spacing.small} ${spacing.medium};
      font-size: 0.9em;
    }
  }
`;

const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${spacing.large};

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: ${spacing.medium};
  }
`;

const PortfolioCard = styled.div`
  background-color: ${colors.background};
  border-radius: ${borderRadius};
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform ${transitionDuration} ease, box-shadow ${transitionDuration} ease;
  position: relative;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    display: block;
    transition: transform ${transitionDuration} ease;
  }

  &:hover img {
    transform: scale(1.08);
  }

  .info {
    padding: ${spacing.medium};
    text-align: left;
    position: relative;
    z-index: 2;
  }

  h3 {
    margin-bottom: ${spacing.small};
    color: ${colors.primary};
    font-size: 1.4em;
    font-family: ${typography.fontFamilySecondary};
  }

  p {
    font-size: 0.95em;
    color: ${colors.darkGray};
    line-height: 1.5;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, ${colors.primary}40, ${colors.accent}40);
    opacity: 0;
    transition: opacity ${transitionDuration} ease;
    pointer-events: none;
    z-index: 1;
  }

  &:hover::before {
    opacity: 1;
  }

  .view-project-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${colors.lightText};
    font-size: 1.3em;
    font-weight: ${typography.fontWeightBold};
    opacity: 0;
    transition: opacity ${transitionDuration} ease, transform ${transitionDuration} ease;
    z-index: 3;
    display: flex;
    align-items: center;
    gap: ${spacing.small};

    svg {
      font-size: 1.5em;
    }
  }

  &:hover .view-project-text {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.1);
  }
`;

const portfolioItems = [
    {
        id: 1,
        category: 'Logo Design',
        title: 'Logo Perusahaan Tech',
        description: 'Desain logo modern dan minimalis untuk startup teknologi.',
        image: 'https://placehold.co/400x250/2B4A6F/FFFFFF?text=Tech+Logo',
        tools: 'Adobe Illustrator, Figma',
        client: 'Tech Solutions Inc.',
        challenge: 'Menciptakan logo yang mencerminkan inovasi dan kepercayaan.',
        solution: 'Mengembangkan ikon abstrak yang menggabungkan elemen sirkuit dan pertumbuhan.',
    },
    {
        id: 2,
        category: 'Web Design',
        title: 'Website E-commerce Fashion',
        description: 'Desain UI/UX responsif untuk toko online fashion dengan fokus pada pengalaman belanja yang intuitif.',
        image: 'https://placehold.co/400x250/FFC300/333333?text=Fashion+Web',
        tools: 'Figma, Adobe Photoshop',
        client: 'Trendy Threads Co.',
        challenge: 'Meningkatkan konversi penjualan melalui desain yang menarik dan mudah digunakan.',
        solution: 'Menerapkan grid layout yang bersih, navigasi yang jelas, dan visual produk berkualitas tinggi.',
    },
    {
        id: 3,
        category: 'Branding',
        title: 'Panduan Brand Cafe Lokal',
        description: 'Identitas visual lengkap dan panduan merek untuk kedai kopi yang cozy dan modern.',
        image: 'https://placehold.co/400x250/E74C3C/FFFFFF?text=Cafe+Branding',
        tools: 'Adobe Illustrator, Adobe InDesign',
        client: 'The Daily Grind Cafe',
        challenge: 'Membangun identitas merek yang unik di pasar kafe yang kompetitif.',
        solution: 'Mengembangkan palet warna hangat, tipografi yang ramah, dan ilustrasi kustom yang mencerminkan suasana kafe.',
    },
    {
        id: 4,
        category: 'Illustration',
        title: 'Ilustrasi Buku Anak',
        description: 'Kumpulan ilustrasi berwarna cerah untuk buku cerita anak-anak yang edukatif dan menghibur.',
        image: 'https://placehold.co/400x250/333333/FFFFFF?text=Kids+Book+Ilust',
        tools: 'Procreate, Adobe Photoshop',
        client: 'Little Readers Publishing',
        challenge: 'Menciptakan karakter dan adegan yang menarik bagi anak-anak usia dini.',
        solution: 'Menggunakan gaya ilustrasi yang lembut, ekspresif, dan palet warna yang ceria.',
    },
    {
        id: 5,
        category: 'Logo Design',
        title: 'Logo Event Musik',
        description: 'Logo dinamis untuk festival musik tahunan yang merayakan berbagai genre.',
        image: 'https://placehold.co/400x250/555555/FFFFFF?text=Music+Event+Logo',
        tools: 'Adobe Illustrator',
        client: 'Harmony Fest Organizers',
        challenge: 'Mendesain logo yang fleksibel dan dapat digunakan di berbagai media promosi.',
        solution: 'Menciptakan logo modular dengan elemen yang dapat dipisah dan digabungkan kembali.',
    },
    {
        id: 6,
        category: 'Web Design',
        title: 'Landing Page SaaS',
        description: 'Landing page konversi tinggi untuk produk software as a service yang inovatif.',
        image: 'https://placehold.co/400x250/F0F0F0/333333?text=SaaS+Landing',
        tools: 'Figma, Webflow',
        client: 'InnovateSoft',
        challenge: 'Mengarahkan pengunjung untuk mendaftar uji coba gratis.',
        solution: 'Desain yang bersih, CTA yang menonjol, dan testimoni pengguna yang kuat.',
    },
];

// Gunakan forwardRef untuk menerima ref
const Portfolio = forwardRef((props, ref) => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const categories = ['All', ...new Set(portfolioItems.map(item => item.category))];

    const filteredItems = activeFilter === 'All'
        ? portfolioItems
        : portfolioItems.filter(item => item.category === activeFilter);

    const handleCardClick = (item) => {
        setSelectedItem(item);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setSelectedItem(null);
    };

    return (
        <PortfolioContainer ref={ref}> {/* Terapkan ref di sini */}
            <Fade direction="down" triggerOnce>
                <SectionTitle>Portofolio Kami</SectionTitle>
            </Fade>
            <Fade direction="up" triggerOnce delay={200}>
                <FilterButtons>
                    {categories.map(category => (
                        <button
                            key={category}
                            className={activeFilter === category ? 'active' : ''}
                            onClick={() => setActiveFilter(category)}
                        >
                            {category}
                        </button>
                    ))}
                </FilterButtons>
            </Fade>
            <PortfolioGrid>
                {filteredItems.map(item => (
                    <Fade key={item.id} direction="up" cascade damping={0.1} triggerOnce>
                        <PortfolioCard onClick={() => handleCardClick(item)}>
                            <img src={item.image} alt={item.title} />
                            <div className="view-project-text">
                                Lihat Proyek <FaArrowRight />
                            </div>
                            <div className="info">
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </PortfolioCard>
                    </Fade>
                ))}
            </PortfolioGrid>

            <PortfolioModal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                item={selectedItem}
            />
        </PortfolioContainer>
    );
});

export default Portfolio;
