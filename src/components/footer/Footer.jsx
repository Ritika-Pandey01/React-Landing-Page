import React from "react";
import "../../Styles/footer.css"
import logo from "../../assets/logo_5.jpg";
import gif from "../../assets/careers4.png";

function Footer() {
    return (
        <>
            <div>
                <div className="flex-container">
                    <div className="first">
                        <img src={logo}></img>
                        <h5 className="logo-heading">Google Developer Student Club</h5>
                        <div>

                            <div className="contact-container">
                                <div><i class="fa-brands fa-linkedin icons"></i></div>
                                <div><i class="fa-brands fa-twitter icons"></i></div>
                                <div><i class="fa-brands fa-square-instagram icons"></i></div>
                                <div><i class="fa-brands fa-facebook icons"></i></div>
                                <div><i class="fa-brands fa-youtube icons"></i></div>
                            </div>
                        </div>

                    </div>
                    <div className="second">
                        <h5 className="footer-heading">More Info : </h5>
                        <ul style={{ style: "disc", fontSize: "20px", marginLeft: "20px", color: "gray" }}>
                            <li><a className="footer-links" href="">About</a> </li>
                            <li><a className="footer-links" href="">Careers</a></li>
                            <li><a className="footer-links" href="">Upcoming Events</a></li>
                            <li><a className="footer-links" href="">Contacts</a></li>
                            <li><a className="footer-links" href="">Lead Teams</a></li>
                        </ul>
                    </div>
                </div>
                <div className="googleGif">
                    <img src={gif}></img>
                </div>
            </div>

            <div className="foot-footer">
                <div className="foot1">
                    <p><a className="footer-links" href=""><strong>Terms</strong></a> &nbsp;&nbsp;&nbsp;&nbsp;</p>
                    <p><a className="footer-links" href=""><strong>Policy</strong></a></p>
                </div>
                <div className="foot2">
                    <strong>&#169;2022 Google</strong>
                </div>
            </div>
        </>
    )
}

export default Footer;