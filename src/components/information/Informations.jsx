import './informations.css'

const Informations = () => {
  return (
    <div className='informations'>
        <div className="info_header">
        <h1>IMPORTANT INFORMATION</h1>
        <div className="header-text">
            <h4>Service bulletins keep you up to date with events that might affect our high service standards</h4>
            <p>SMS-Scam “Download Our Application to Track Your Parcel”</p>
        </div>        
        <div className='line'/>
        </div>

        <div className="info_content">
        <div className="info_content-bg1">
            <div className="info_content-box">                
                <div className="info_title">
                    <h2>Green Logistics</h2>
                </div>
                <div className="info_desc">
                    <span>
                    Sustainable business begins with sustainable supply chains. As the pioneer of green logistics, 
                    we have an unmatched portfolio of green logistics solutions. Together with our customers 
                    worldwide, we’re minimizing emissions without compromising operations. Find out what we have 
                    to offer, why we’re committed to sustainability, and how our industry is helping deliver a 
                    sustainable future.
                    </span>
                </div>
                <button className='custom_btn'>Learn More</button>
                </div>
            </div>            
        </div>

        <div className="info_content2">
            <div className="info_content-bg2">
            <div className="info_content-box2">
                <div className="info_title">
                    <h2>Our Divisions</h2>
                </div>
                <div className="info_desc">
                    <span>
                    DHL connects people in over 220 countries and territories worldwide. Driven by the power of 
                    more than 600,000 employees, we deliver integrated services and tailored solutions for 
                    managing and transporting letters, goods and information.
                    </span>
                </div>
                <button className='custom_btn'>Learn More</button>
            </div>
            </div>            
        </div>

        <div className="info_content3">
            <div className='info_content-bg3'>
            <div className="info_content-box">
                <div className="info_title">
                    <h2>Insights and Innovation</h2>
                </div>
                <div className="info_desc">
                    <span>
                    To enable collaboration, the company brings together customers, research and academic 
                    institutions, industry partners, and logistics experts within the DHL business divisions. 
                    As a thought leader in the logistics industry, DHL structurally invests in trend research and 
                    solution development.
                    </span>
                </div>
                <button className='custom_btn'>Learn More</button>
            </div> 
            </div>           
        </div>
    </div>
  )
}

export default Informations