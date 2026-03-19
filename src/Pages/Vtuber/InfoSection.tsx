import React from 'react';
import MASCOT_IMG from '../../assets/getsuka-mascot.jpg';
import { Media } from '../Media/Media';

const InfoSection: React.FC = () => {
  return (
    <section className="custom-info-section">
      <div className="info-header">
        <div className="title-wrapper">
          <span className="bg-title-text">INFORMATION</span>
          <h2 className="front-title-text">基本資料</h2>
        </div>
      </div>

      <div className="container info-container">
        <div className="info-card">
          <div className="info-mascot-box">
            <img src={MASCOT_IMG} alt="Mascot" className="mascot-img" />
          </div>
          <div className="info-list">
            <div className="info-item">
              <span className="info-label">物種</span>
              <span className="info-value">金魚</span>
            </div>
            <div className="info-item">
              <span className="info-label">身高</span>
              <span className="info-value">155cm</span>
            </div>
            <div className="info-item">
              <span className="info-label">生日</span>
              <span className="info-value">10/08</span>
            </div>
            <div className="info-item">
              <span className="info-label">暱稱</span>
              <span className="info-value">大小姐、金魚、魚魚</span>
            </div>
            <div className="info-item">
              <span className="info-label">喜歡</span>
              <span className="info-value">熊貓、拼圖、萌王、泡澡、鮮奶茶</span>
            </div>
            <div className="info-item">
              <span className="info-label">討厭</span>
              <span className="info-value">錢錢/黑色流星、亂叫馬麻&婆、
別人話說一半、恐遊、恐怖片、鬼故事</span>
            </div>
          </div>
        </div>
        <div className="info-media-wrapper">
          <Media />
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
