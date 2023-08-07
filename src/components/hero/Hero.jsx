import { KeyboardArrowRight, PlayArrow } from '@mui/icons-material'
import './hero.css'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="overlay"/>
      <div className="hero_content-top">
      <div className='hero_title'>
        <h1>Track Your Shipment</h1>
      </div>
      <div className="hero_input">
            <input type="text" id='inut'/>
            <label htmlFor="input" className='label'>
              Enter your tracking number(s)
            </label>
            <button className='custom_btn'>Track</button>
      </div>
      <div className="hero_ref">
        <span>
          <p>DHL Express Reference Tracking</p>
          <KeyboardArrowRight style={{ fontSize: '1.5rem', color: "white" }}/>
        </span>
      </div>
      
      </div>
      <div className="hero_content-bottom">
        <div className='bottom_box'>
          <img src="https://www.dhl.com/content/dam/dhl/global/core/images/icons/general-icons/glo-core-online.svg" alt="ship" />
          <span className='hb_title'>Ship Now</span>
          <span className='hb_desc'>Find the right service</span>
        </div>

        <div className='bottom_box'>
          <img src="https://www.dhl.com/content/dam/dhl/global/core/images/icons/general-icons/glo-core-getaquote.svg" alt="getaquote" />
          <span className='hb_title'>Get a Quote</span>
          <span className='hb_desc'>Estimate cost to share and compare</span>
        </div>

        <div className='bottom_box'>
          <div className="arrow-right"></div>
          <img src="https://www.dhl.com/content/dam/dhl/global/core/images/icons/gogreen-icons/glo-core-gogreen-warehousing.svg" alt="warehousing" />
          <span className='hb_title'>DHL for Businass</span>
          <span className='hb_desc'>
            Shipping regularly? Request a business account and profit from exclusive benefits
          </span>
        </div>
      </div>
    </div>
  )
}

export default Hero