import './Getsuka.scss'

// placeholders for images
const PLACEHOLDER_CHAR = "src/assets/getsuka.png";
const MASCOT_IMG = "src/assets/getsuka-mascot.jpg";

function Getsuka() {
    return(
      <div className="vtuber-profile-custom">
        {/* Hero Section */}
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
                <span className="hero-tag">金魚</span>
                <span className="hero-tag">溫柔</span>
                <span className="hero-tag">雜談</span>
                <span className="hero-tag">突發系</span>
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
          </div>
        </section>

        {/* Info Section */}
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
                  <span className="info-value">錢錢（黑色流星）、亂叫馬麻&婆、
別人話說一半、恐遊、恐怖片、鬼故事</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}

export default Getsuka;