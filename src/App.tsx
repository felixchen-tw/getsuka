import './App.css'

// import Navbar from './Components/Navbar';
// import YoutubeInfo from './Components/YoutubeInfo';
import Title from './Components/Title';
import Vtuber from './Pages/Vtuber';
import Fan from './Pages/Fan';
import Character from './Pages/Character';
import Timeline from './Components/Timeline/Timeline';
import Footer from './Components/Footer'


function App() {
  return(
    <div>

      <section id ="intro">
        <div className='intro-container'>
          <div className="vtuber-fan-wrapper">
            <div className="vtuber-wrapper">
              <Vtuber />
            </div>
          </div>
          {/* <YoutubeInfo /> */}
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
      <section id="other-info">
        <div>
          <Title text='其他' />
        </div>
        <div className='other-info-container'>
          <a href='https://p.ecpay.com.tw/5AB9B96' target='_blank' rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
            <span>綠界</span>
          </a>
          <a href='https://sound.getsuka.net' target='_blank' rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>
            <span>音效按鈕</span>
          </a>
          <a href='https://docs.google.com/spreadsheets/d/1sOmeablnN8j1IdqmpXhtWDvST33AsAzPbziVyU6fGj4/edit?usp=drivesdk' target='_blank' rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
            <span>玥華小檔案</span>
          </a>
          <a href='https://gestuka.fandom.com/' target='_blank' rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
            <span>Wiki</span>
          </a>
        </div>
      </section>
      
      <section id="timeline-section">
        <Timeline />
      </section>

      <Footer />
    </div>
  );
}

export default App