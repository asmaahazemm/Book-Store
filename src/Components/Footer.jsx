import { RiBook3Line, RiFacebookCircleLine, RiInstagramLine, RiTwitterXLine } from "@remixicon/react"
import '../CSS/Common.css'
import '../CSS/Footer.css'

function Footer(){
    let iconStyle = {
        fontSize: '1.25rem'
    }
    return(
        <footer className="footer">
            <div className="footer-container ">
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

                <div className="footer-data ">
                    <div className="footer-con">
                        <h3 className="footer-title">About</h3>
                        <ul>
                            <li>
                                <a href="#" className="footer-link">Awards</a>
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
                    <div>
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

                    <div>
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

                    <div>
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
            <span className="footer-copy">&#169; All Rights Reserved By Bedimcode</span>
        </footer>
    )
}
export default Footer;

// ========== FOOTER ==========
// .footer__logo
// E-Book

// .footer__description
// Find and explore the best <br>
// eBooks from all your <br>
// favorite writers.

// footer__title .footer__link
// About
//  Awards
//  FAQs
//  Privacy policy
//  Terms of services

// Company
//  Blogs
//  Community
//  Our team
//  Help center

// Contact
//  Av. Hacienda <br>
//  Lima 4321, Perú 

//  e.book@email.com <br>
//  0987-654-321

// Social
//  https://www.facebook.com/
//  https://www.instagram.com/
//  https://twitter.com/

// .footer__copy
// &#169; All Rights Reserved By Bedimcode