import './App.css'

import Navbar from './Components/Navbar';
import Title from './Components/Title';
import Vtuber from './Pages/Vtuber';
import Fan from './Pages/Fan';
import Character from './Pages/Character';
import Media from './Pages/Media';
import YoutubeInfo from './Components/YoutubeInfo';
import Footer from './Components/Footer'


import getsukaSetup from './assets/getsuka-setup.jpg'
import GetsukaEat  from './assets/getsuka-eat.png'
import getsukaStar from './assets/getsuka-star.png'
import getsukaHappy from './assets/getsuka-happy.png'

function App() {
  return(
    <div>
      <div className='navbar-container'>
        <Navbar />
      </div>
      <section id="banner">
        <img src={getsukaSetup} alt='getsuka-setup' />
      </section>
      <section id ="intro">
        <div className='intro-container'>
          <div>
            <Title text='介紹' />
          </div>
          <Media />
          <YoutubeInfo />
          <div className="vtuber-fan-wrapper">
            <div className="vtuber-wrapper">
              <Vtuber />
            </div>
          </div>
          <div id="fan" className="fan-wrapper">
            <Fan />
          </div>
        </div>
      </section>
      <section id="member">
        <div className='member-container'>
          <div>
            <Title text='相關人物' />
          </div>
          <div>
            <Character />
          </div>
        </div>
      </section>
      <section id="more-info">
        <div>
          <Title text='更多資訊' />
        </div>
        <div className='more-info-container'>
          <a href='https://docs.google.com/spreadsheets/d/1sOmeablnN8j1IdqmpXhtWDvST33AsAzPbziVyU6fGj4/edit?usp=drivesdk' target='_blank'>
            <p className="card-header">玥華小檔案</p>
            <img src={getsukaHappy} alt="更多資訊" />
          </a>
          <a href='https://p.ecpay.com.tw/5AB9B96' target='_blank'>
            <p className="card-header">綠界</p>
            <img src={GetsukaEat} alt='綠界' />
          </a>
          <a href='https://gestuka.fandom.com/' target='_blank'>
            <p className="card-header">Wiki</p>
            <img src={getsukaStar} alt="Wiki" />
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App