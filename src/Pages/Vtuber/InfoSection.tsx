import React, { useState } from 'react';
import MASCOT_IMG from '../../assets/getsuka-mascot.jpg';
import { Media } from '../Media/Media';

const InfoSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = "getsuka1008@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

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
        <div className="contact-email-wrapper">
          <button onClick={handleCopy} className="contact-email-btn" style={{ cursor: 'pointer', fontFamily: 'inherit', outline: 'none' }}>
            {copied ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fb5a38" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            )}
            <span style={{ minWidth: '235px', textAlign: 'center' }}>
              {copied ? '已複製到剪貼簿！' : `聯絡信箱：${email}`}
            </span>
          </button>
        </div>
        
        <div className="info-media-wrapper">
          <Media />
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
