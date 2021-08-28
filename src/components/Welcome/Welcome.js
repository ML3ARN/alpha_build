
import PhoneAuthSection from './PhoneAuthSection'
import './Welcome.css'
import orange_welcome from './orange_welcome.svg'


const Welcome = () => {

  return (
    <div id="SignUpContainer">
      <div className="WelcomeBannerContainer">
        <div className="WelcomeBanner">
        <img className="WelcomeBannerText" src={orange_welcome} alt="could not load" />
        </div>
      </div>
      <div className="PhoneAuthSectionContainer">
        <PhoneAuthSection />
      </div>
    </div> 
  )
}


export default Welcome