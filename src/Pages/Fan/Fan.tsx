import './Fan.scss'

import fan from '../../assets/Fan.jpeg'

function Fan() {
  return (
    <div className='fan-container'>
      <div className="fan-content-bg">
        <div className="container">
        <div className="fan-content">
          <div className="container-header">
            <h2>粉絲形象</h2>
          </div>
          <div className="fan-inner-content">
            <div className="fan-subtitle">
              <h3 className="direct">設計: <a className="fan-designer" href="https://x.com/MED0medo_3JYO" target="_blank">MEDO</a></h3>
            </div>
            <a className="fan-img" href="https://x.com/MED0medo_3JYO/status/1795671550571823485/photo/1" target="_blank">
              <img src={fan} alt="魚玥飯" />
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export { Fan }