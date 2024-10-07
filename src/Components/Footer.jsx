import { RiBook3Line, RiFacebookCircleLine, RiInstagramLine, RiTwitterXLine } from "@remixicon/react"
import '../CSS/Footer.css';
import Services from "./Services";

function Footer(){
    let iconStyle = {
        fontSize: '1.25rem'
    }
    return(
        <footer className="footer">
            <div className="footer-container ">
                <div className="first-part">
                    <div>
                        <a href="#" className="footer-logo">
                            <RiBook3Line/>
                        </a>
                        <p className="footer-description">
                            Find and explore the best <br/>
                            eBooks from all your <br/>
                            favorite writers.
                        </p>
                    </div>
                    <div className="store-locations">
                        <h3 className="footer-title">Our Locations & Events</h3>
                        <p>Join us at our next book signing event or visit one of our branches.</p>
                        <a href="#" className="footer-link">View Locations</a>
                    </div>
                    <div><Services/></div>
                </div>
                
                <div className="footer-data ">
                    <div className="footer-con">
                        <h3 className="footer-title">About</h3>
                        <ul>
                            <li>
                                <a href="#" className="footer-link">Awards<br></br></a>
                            </li>

                            <li>
                                <a href="#" className="footer-link">FAQs</a>
                            </li>

                            <li>
                                <a href="#" className="footer-link">Privacy policy</a>
                            </li>
                            <li>
                                <a href="#" className="footer-link">Terms of services</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-con">
                        <h3 className="footer-title">Company</h3>

                        <ul>
                            <li>
                                <a href="#" className="footer-link">Blogs</a>
                            </li>

                            <li>
                                <a href="#" className="footer-link">Community</a>
                            </li>

                            <li>
                                <a href="#" className="footer-link">Our team</a>
                            </li>

                            <li>
                                <a href="#" className="footer-link">Help center</a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-con">
                        <h3 className="footer-title">Contact</h3>

                        <ul className="footer-link">
                            <li>
                               <address className="footer-info">
                                    Av. Hacienda <br/>
                                    Lima 4321, Perú 
                               </address>
                            </li>
                            <li>
                               <address className="footer-info">
                                    e.book@email.com <br/>
                                    0987-654-321
                               </address>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-con" >
                        <h3 className="footer-title">Social</h3>
                        <div className="footer_social">
                            <a href="https://www.facebook.com/" target="_blank" className="footer_social-link">
                                <RiFacebookCircleLine style={iconStyle}/>
                            </a>
                            <a href="https://www.instagram.com/" target="_blank" className="footer_social-link">
                                <RiInstagramLine style={iconStyle}/>
                            </a>
                            <a href="https://twitter.com/" target="_blank" className="footer_social-link">
                                <RiTwitterXLine style={iconStyle}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <p className="footer-copy">&#169; All Rights Reserved By Bedimcode</p>
        </footer>
    )
}
export default Footer;