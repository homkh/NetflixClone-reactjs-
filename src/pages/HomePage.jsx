import './homepage.css';
import Hrline from '../components/Hrline.jsx'
// import Navbar from '../components/Navbar.jsx';
import TextSec from '../components/TextSec.jsx';
import Thirdsec from '../components/ThirdSec.jsx';
import Forthsec from '../components/ForthSec.jsx';
import Fifthsec from '../components/FifthSec.jsx';
import FaqSection from '../components/FaqSection.jsx';
import Footter from '../components/Footter.jsx';
import Second from '../components/Second.jsx';
import Navbar from '../components/Navbar/Navbar.jsx';
function HomePage() {
  const getUserEmail = localStorage.getItem('email');
  return (
    <>
      <div>
        <div className="firstSection">
          <div className="overLay">
            <div className="items">
              <Navbar />
              <h6 style={{ color: 'orange' }}>
                {typeof getUserEmail === 'string' && getUserEmail.length > 0
                  ? `Welcome to you ${getUserEmail}`
                  : "You are not logined yet!!!"}
              </h6>
              <TextSec />
            </div>
          </div>
        </div>
        <Hrline />
        <Second />
        <Hrline />
        <Thirdsec />
        <Hrline />
        <Forthsec />
        <Hrline />
        <Fifthsec />
        <Hrline />
        <FaqSection />
        <Hrline />
        <Footter />
      </div>
    </>
  )
}

export default HomePage;
