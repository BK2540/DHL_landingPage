import { ArrowDropUp, Close, KeyboardArrowDown, KeyboardArrowRight, Language, Launch, Menu, Person, Search } from '@mui/icons-material'
import './navbar.css'
import { useEffect, useState } from 'react'

const Navbar = () => {

    const [track, setTrack] = useState(false);
    const [ship, setShip] = useState(false);
    const [portal, setPortal] = useState(false);
    

    // Additional state variables to control the active states of dropdown items
    const [trackActive, setTrackActive] = useState(false);
    const [shipActive, setShipActive] = useState(false);
    const [portalActive, setPortalActive] = useState(false);

    const [menuActive, setMenuActive] = useState(false);

    const handleMenuToggle = () => {
        setMenuActive((prevMenuActive) => !prevMenuActive);
      };
    

  return (
    <div className="nav">
        <div className="nav_left">
            <div className="nav_left-top">
                <div className="logo">
                    <img src="https://www.dhl.com/content/dam/dhl/global/core/images/logos/dhl-logo.svg" alt="logo" />
                </div>
            </div>
            <div className="nav_left-bottom">
            <div className={`track center ${trackActive ? 'active' : ''}`} onClick={(e) => {
                setTrack(!track);
                setTrackActive(!trackActive);
            }}>
                        Track
                        <KeyboardArrowDown style={{ fontSize: '1rem', transform: trackActive ? 'rotate(180deg)' : 'rotate(0)' }}/>                        
                    </div>
                    {track && (
                        <div className="track_drop">
                            <ArrowDropUp style={{ fontSize: '4rem', color: "white", position: "absolute", top: "-37px", left: "10px", zIndex: "1" }}/>
                            <h1>Track Your Shipment</h1>
                            <div className="input">
                                <input type="text" placeholder='Enter your tracking number(s)'/>
                                <button>Track</button>
                            </div>
                            <div className="other">
                                <span className='other_content'>
                                Track by DHL Express Reference
                                <Launch style={{ fontSize: '1rem', color: "#d40511"}}/>
                                </span>
                                <span className='other_content'>
                                View all Tracking FAQ's 
                                <KeyboardArrowRight style={{ fontSize: '1.5rem', color: "#d40511" }}/>
                                </span>
                            </div>
                        </div>
                        )}

                    <div className={`ship center ${shipActive ? 'active' : ''}`} onClick={(e) => {
                        setShip(!ship);
                        setShipActive(!shipActive);
                    }}>
                        Ship
                        <KeyboardArrowDown style={{ fontSize: '1rem', transform: shipActive ? 'rotate(180deg)' : 'rotate(0)' }}/>
                    </div>
                    {ship && (
                        <div className="ship_drop">
                            <ArrowDropUp style={{ fontSize: '4rem', color: "white", position: "absolute", top: "-37px", left: "10px", zIndex: "1" }}/>
                            <div className="ship_left">
                                <h3>Get Started</h3>
                                <span className='ship_list'>
                                    Ship Now
                                    <KeyboardArrowRight style={{ fontSize: '1rem', color: "#d40511" }}/>
                                </span>
                                <span className='ship_list'>
                                    Get a Quote
                                    <KeyboardArrowRight style={{ fontSize: '1rem', color: "#d40511" }}/>
                                </span>
                                <span className='ship_list'>
                                    DHL for Business
                                    <KeyboardArrowRight style={{ fontSize: '1rem', color: "#d40511" }}/>
                                </span>
                            </div>
                            <div className="ship_right">
                            <h3>Learn more about...</h3>
                                <span className='ship_list'>
                                    Documents and Parcels
                                    <KeyboardArrowRight style={{ fontSize: '1rem', color: "#d40511" }}/>
                                </span>
                                <span className='ship_list'>
                                    Pallets, Containers and Other Cargo
                                    <KeyboardArrowRight style={{ fontSize: '1rem', color: "#d40511" }}/>
                                </span>
                            </div>
                        </div>
                    )}

                    <span className='list'>Logistics Solutions</span>
                    <span className='list'>Customer Service</span>
            </div>
        </div>
        <div className="nav_right">
            <div className="nav_right-top">
                <div className="location center list">
                    <Language style={{ fontSize: '1rem' }}/>
                    <span>Thailand</span>
                </div>
                <div className="langauge center">
                    <span className='en list'>EN</span>
                    <span className='list'>TH</span>
                </div>
                <div className="search center list">
                    <Search style={{ fontSize: '1rem' }}/>
                    <span>Search</span>
                </div>
            </div>
            <div className={`nav_right-bottom center list ${portalActive ? 'active' : ''}`} onClick={(e) => {
                setPortal(!portal);
                setPortalActive(!portalActive);
            }}>
                <Person style={{ fontSize: '1rem', transform: portalActive ? 'rotate(0deg)' : 'rotate(0)' }}/>
                <span>Customer Portal Logins</span>
                <KeyboardArrowDown style={{ fontSize: '1rem', transform: portalActive ? 'rotate(180deg)' : 'rotate(0)' }}/>
            </div>
            {portal && (
                        <div className="portal_drop">
                            <ArrowDropUp style={{ fontSize: '4rem', color: "white", position: "absolute", top: "-37px", right: "40%", zIndex: "1" }}/>
                            <h1>All Portals</h1>
                            <div className="portal_list">
                            <span className="list">
                            MyDHL+
                            <KeyboardArrowRight style={{ fontSize: '1.2rem', color: "#d40511" }}/>
                            </span>
                            <span className="list">
                            DHL eCommerce Web Portal
                            <Launch style={{ fontSize: '1rem', color: "#d40511"}}/>
                            </span>
                            <span className="list">
                            myDHLi
                            <Launch style={{ fontSize: '1rem', color: "#d40511"}}/>
                            </span>
                            <span className="list">
                            MySupplyChain
                            <Launch style={{ fontSize: '1rem', color: "#d40511"}}/>
                            </span>
                            <span className="list">
                            DHL Trade Automation Services
                            <Launch style={{ fontSize: '1rem', color: "#d40511"}}/>
                            </span>
                            <span className="list">
                            Supply Chain Agile
                            <Launch style={{ fontSize: '1rem', color: "#d40511"}}/>
                            </span>
                            <span className="list">
                            DHL SameDay
                            <Launch style={{ fontSize: '1rem', color: "#d40511"}}/>
                            </span> 
                            <button className='portal_btn'>
                                Learn about Portals
                                <KeyboardArrowRight style={{ fontSize: '1.2rem', color: "#white" }}/>
                            </button>
                            </div>                              
                        </div>
                    )}
        </div>
                <div className="tab_menu">
                    <div className="menu_icons">
                    <Language style={{ fontSize: '1.2rem', color: "#d40511"}}/>
                    <Search style={{ fontSize: '1.2rem', color: "#d40511"}}/>
                    {menuActive ? (
                    // Render close icon when the menu is open
                    <Close style={{ fontSize: '1.2rem', color: '#d40511' }} onClick={handleMenuToggle} />
                    ) : (
                    // Render menu icon when the menu is closed
                    <Menu style={{ fontSize: '1.2rem', color: '#d40511' }} onClick={handleMenuToggle} />
                    )}
                    
                    </div>
                    
                    {menuActive && (
                    <div className="menu">
                        <span className='tab_head'>DHL Thailand</span>
                        <span>Track</span>
                        <span>
                            Ship
                            <KeyboardArrowRight style={{ fontSize: '1rem', color: "#d40511" }}/>
                        </span>
                        <span>
                            Logistics Solutions
                        </span>
                        <span>
                            Customer Service
                        </span>
                        <span>
                            Our Divisions
                            <KeyboardArrowRight style={{ fontSize: '1rem', color: "#d40511" }}/>
                        </span>
                        <span>
                            Industry Sections
                            <KeyboardArrowRight style={{ fontSize: '1rem', color: "#d40511" }}/>
                        </span>
                        <span>
                            Insight & Innovation
                            <KeyboardArrowRight style={{ fontSize: '1rem', color: "#d40511" }}/>
                        </span>
                        <span>
                            Careers
                        </span>
                        <span>
                            Press
                            <KeyboardArrowRight style={{ fontSize: '1rem', color: "#d40511" }}/>
                        </span>
                        <span>
                            About us
                            <KeyboardArrowRight style={{ fontSize: '1rem', color: "#d40511" }}/>
                        </span>
                    </div>
                    )};

                </div>
    </div>
  )
}

export default Navbar