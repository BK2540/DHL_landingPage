import { KeyboardArrowRight } from '@mui/icons-material'
import './solutions.css'

const Solutions = () => {
  return (
    <div className='solutions'>
        <h1>Logistics Solutions</h1>

        <div className="solution_container">
            <div className="solution_box">
                <img 
                src="https://www.dhl.com/content/dam/dhl/global/core/images/teaser-image-1200x588/glo-warehousing-solutions-warehousing.web.343.168.jpg" 
                alt="warehousing-solutions" 
                />
                    <div className="title">
                    <h3>Warehouse Solutions</h3>
                    </div>
                    <div className="solution_desc">
                        <span>
                        <p>Warehousing for Small and Medium Businesses</p>
                        <KeyboardArrowRight style={{ fontSize: '1.5rem', color: "#d40511" }}/>
                        </span>
                        <span>
                        <p>Warehousing for Enterprises</p>
                        <KeyboardArrowRight style={{ fontSize: '1.5rem', color: "#d40511" }}/>
                        </span>
                    </div>                    
                                
            </div>

            <div className="solution_box">
                <img 
                src="https://www.dhl.com/content/dam/dhl/global/dhl-global-forwarding/images/teaser-image-1200x588/glo-dgf-air-freight-cargo-text-generic.web.800.392.jpg" 
                alt="warehousing-solutions" 
                />
                    <div className="title">
                    <h3>Transport and Distribution</h3>
                    </div>
                    <div className="solution_desc">
                        <span>
                        <p>Transportation Management for Small and Medium <br/>Businesses</p>
                        <KeyboardArrowRight style={{ fontSize: '1.5rem', color: "#d40511" }}/>
                        </span>
                        <span>
                        <p>Transporting Management for Enterprises</p>
                        <KeyboardArrowRight style={{ fontSize: '1.5rem', color: "#d40511" }}/>
                        </span>
                    </div>                                    
            </div>

            <div className="solution_box">
                <img 
                src="https://www.dhl.com/content/dam/dhl/global/core/images/teaser-image-1200x588/glo-management-services-inventory-financing.web.400.196.jpg" 
                alt="warehousing-solutions" 
                />
                    <div className="title">
                    <h3>Warehouse Solutions</h3>
                    </div>
                    <div className="solution_desc">
                        <span>
                        <p>Find Out More About Contract Logistics</p>
                        <KeyboardArrowRight style={{ fontSize: '1.5rem', color: "#d40511" }}/>
                        </span>
                    </div>                    
                                
            </div>

        </div>
    </div>
  )
}

export default Solutions