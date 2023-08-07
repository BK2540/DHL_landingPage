import { Launch } from '@mui/icons-material'
import './help.css'

const Help = () => {
  return (
    <div className='help'>
        <div className="help_container">
            <div className="help_wrapper">
                <div className="main_title">Help Center</div>
                <ul className="list">
                    <li>Customer Service</li>
                    <li>Customer Portal Logins</li>
                    <li>Digital Partners and Integrations</li>
                    <li>
                        Developer Portal
                        <Launch style={{ fontSize: '0.8rem', color: "#191919"}}/> 
                    </li>
                </ul>
            </div>
            <div className="help_wrapper">
                <div className="title">Our Divisions</div>
                <ul className="list">
                    <li>
                        Post and Paket Deutschland 
                        <Launch style={{ fontSize: '0.8rem', color: "#191919"}}/> 
                    </li>
                    <li>DHL Express</li>
                    <li>DHL Global Forwarding</li>
                    <li>DHL Freight</li>
                    <li>DHL Supply Chain</li>
                    <li>DHL eCommerce Solutions</li>
                </ul>
            </div>
            <div className="help_wrapper">
                <div className="title">Industry Sectors</div>
                <ul className="list">
                    <li>Auto-Mobility</li>
                    <li>Chemicals</li>
                    <li>Consumer</li>
                    <li>Energy</li>
                    <li>Engineering and Manufacturing</li>
                    <li>Life Sciences and Healthcare</li>
                    <li>Public Sector</li>
                    <li>Retail</li>
                    <li>Technology</li>
                </ul>
            </div>
            <div className="help_wrapper">
                <div className="title">Company Information</div>
                <ul className="list">
                    <li>About DHL</li>
                    <li>Delivered</li>
                    <li>Careers</li>
                    <li>Press Center</li>
                    <li>Sustainability</li>
                    <li>Insights and Innovation</li>
                    <li>Official Logistics Partners</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Help