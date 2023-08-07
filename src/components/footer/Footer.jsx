import './footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer_top">
            <div className="footer_top-left">
                <div className="logo">
                    <img src="https://www.dhl.com/content/dam/dhl/global/core/images/logos/glo-footer-logo.svg" alt="logo" />
                </div>
                <div className="footer_menu">
                    <ul className='footer_menu-container'>
                        <li>Fraud Awareness</li>
                        <li>Legal Notice</li>
                        <li>Terms of Use</li>
                        <li>Privacy Notice</li>
                        <li>Dispute Resolution</li>
                        <li>Additional Information</li>
                        <li>Consent Settings</li>
                    </ul>
                </div>
            </div>

            <div className="footer_top-right">
                <div className="footer_tr-title">
                    Follow Us
                </div>
                <div className="socials">
                    <img src="https://www.dhl.com/content/dam/dhl/global/core/images/logos/youtube-new.svg" alt="youtube" />
                    <img src="https://www.dhl.com/content/dam/dhl/global/core/images/logos/facebook-new.svg" alt="facebook" />
                    <img src="https://www.dhl.com/content/dam/dhl/global/core/images/logos/linkedIn-new.svg" alt="linkedIn" />
                    <img src="https://www.dhl.com/content/dam/dhl/global/core/images/logos/instagram-new.svg" alt="instagram" />
                </div>
            </div>
        </div>
        <div className="footer_bottom">
            <span>2023 © - all rights reserved</span>
        </div>
    </div>
  )
}

export default Footer