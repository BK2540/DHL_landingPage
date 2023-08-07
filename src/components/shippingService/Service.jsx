import { KeyboardArrowRight } from '@mui/icons-material'
import './service.css'

const Service = () => {
  return (
    <div className='service'>
        <div className="service_head">
            Shipping Services
        </div>

        <div className="service_container">

            {/* left side */}

            <div className="s-title_container-left">
            <span className='s-title'>Packages</span>
            </div> 

            <div className="service_wrapper-left">            
              <div className="service_box">
              <img src="https://www.dhl.com/content/dam/dhl/global/core/images/icons/wizard-icons/glo-core-wizard-bulkletters.svg" alt="bulkletters" />
              <h5>Document & Parcel</h5>
              <span className='service_info'>
                Domestic and International
                <KeyboardArrowRight style={{ fontSize: '1.5rem', color: "#d40511" }}/>
              </span>
              </div>
            </div>

            {/* right side */}

            <div className="s-title_container-right">
            <span className='s-title'>Pallets, Containers, Cargo</span> 
            </div>

            <div className="service_wrapper-right">            
              <div className="service_box">
              <span className='s-title-mobile'>Pallets, Containers, Cargo</span> 
              <img src="https://www.dhl.com/content/dam/dhl/global/core/images/icons/product-icons/glo-core-product-air.svg" alt="airplane" />
              <h5>Air Freight</h5>
              <span className='service_info'>
                International
                <KeyboardArrowRight style={{ fontSize: '1.5rem', color: "#d40511" }}/>
              </span>
              <span className='service_info'>
                Same Day
                <KeyboardArrowRight style={{ fontSize: '1.5rem', color: "#d40511" }}/>
              </span>
              </div>

              <div className="service_box">
              <span className='s-title-mobile'>Pallets, Containers, Cargo</span> 
              <img src="https://www.dhl.com/content/dam/dhl/global/core/images/icons/tracking-icons/glo-core-tracking-ocean.svg" alt="ocean" />
              <h5>Ocean Freight</h5>
              <span className='service_info'>
                International
                <KeyboardArrowRight style={{ fontSize: '1.5rem', color: "#d40511" }}/>
              </span>
              </div>

              <div className="service_box">
              <span className='s-title-mobile'>Pallets, Containers, Cargo</span> 
              <img src="https://www.dhl.com/content/dam/dhl/global/core/images/icons/tracking-icons/glo-core-tracking-road.svg" alt="truck" />
              <h5>Road Freight</h5>
              <span className='service_info'>
                International
                <KeyboardArrowRight style={{ fontSize: '1.5rem', color: "#d40511" }}/>
              </span>
              </div>

              <div className="service_box">
              <span className='s-title-mobile'>Pallets, Containers, Cargo</span> 
              <img src="https://www.dhl.com/content/dam/dhl/global/core/images/icons/tracking-icons/glo-core-tracking-rail.svg" alt="rail" />
              <h5>Rail Freight</h5>
              <span className='service_info'>
                Between Europe and Asia
                <KeyboardArrowRight style={{ fontSize: '1.5rem', color: "#d40511" }}/>
              </span>
              </div>
            </div>   
                           
                   
        </div>
    </div>
  )
}

export default Service