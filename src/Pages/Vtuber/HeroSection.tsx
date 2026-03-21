import React from 'react';
import PLACEHOLDER_CHAR from '../../assets/getsuka.png';
import FISH_IMG from '../../assets/Getsuka-image.png';

const HeroSection: React.FC = () => {
  return (
    <section className="custom-hero-section">
      {/* Mobile Titles Header (Hidden on Desktop) */}
      <div className="hero-titles-mobile">
        <span className="mobile-zh">玥華</span>
        <span className="mobile-en">Getsuka</span>
      </div>

      <div className="container custom-hero-container">
        <div className="hero-left">
          <div className="desktop-zh bg-title-style">玥華</div>
          <div className="hero-tags">
            <span className="hero-tag">大小姐</span>
            <span className="hero-tag">溫柔</span>
            <span className="hero-tag">雜談</span>
            <span className="hero-tag">公主</span>
          </div>
          <div className="hero-intro">
            <p>是隻世界上比較聰明的金魚！</p>
            <p>為了尋找同類離開了家鄉，來到了這裡 ✦</p>
            <p>願意成為我的朋友嗎 ( ^ω^)</p>
          </div>
        </div>

        <div className="hero-center">
          <img src={PLACEHOLDER_CHAR} alt="Character" className="character-img" />
        </div>

        <div className="hero-right">
          <div className="desktop-en bg-title-style">Getsuka</div>
        </div>

        {/* Floating Logo Element */}
        <div className="floating-logo-container">
          <div className="floating-logo-bg"></div>
          <img src={FISH_IMG} alt="Getsuka Fish" className="floating-logo-img" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
