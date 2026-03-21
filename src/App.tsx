import './App.css'
import Navbar from './Components/Navbar';
import Title from './Components/Title';
import Vtuber from './Pages/Vtuber';
import Fan from './Pages/Fan';
import Character from './Pages/Character';
import Timeline from './Components/Timeline/Timeline';
import Footer from './Components/Footer'
import OtherInfo from './Components/OtherInfo/OtherInfo';


function App() {
  return(
    <div>
      <Navbar />
      <section id ="intro">
        <div className='intro-container'>
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
      
      <section id="timeline-section">
        <div>
          <Title text='活動紀錄' />
        </div>
        <Timeline />
      </section>

      <OtherInfo />

      <Footer />
    </div>
  );
}

export default App