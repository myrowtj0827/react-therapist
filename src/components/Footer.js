import React from 'react';

function Footer() {
    return (
        <div className="whole-body-mW footer-pd">
            <div className="footer-menu flex-grid3 txt-12 col-darkBlue">
                <div className="txt-align">
                    <div className="txt-14 col-heavyDark mouse-cursor">Account</div>
                    <div className="mouse-cursor">Login</div>
                    <div className="mouse-cursor">Sign Up for Free Trial</div>
                    <div className="txt-14 col-heavyDark mouse-cursor">Content</div>
                    <div className="mouse-cursor">Blog</div>
                    <div className="mouse-cursor">Why Online Therapy?</div>
                    <div className="mouse-cursor">Why Us?</div>
                    <div className="mouse-cursor">Our Partners</div>
                    <div className="mouse-cursor">Comparision with Others</div>
                    <div className="mouse-cursor">Sample Online Therapist Sites</div>
                    <div className="txt-14 col-heavyDark mouse-cursor">Help</div>
                    <div className="mouse-cursor">Help Center</div>
                    <div className="mouse-cursor">Videos for Providers</div>
                    <div className="mouse-cursor">Videos for Clients</div>
                </div>

                <div className="txt-align">
                    <div className="txt-14 col-heavyDark mouse-cursor">Features</div>
                    <div className="mouse-cursor">Notes</div>
                    <div className="mouse-cursor">Online Session</div>
                    <div className="mouse-cursor">Payment</div>
                    <div className="mouse-cursor">Scheduling</div>
                    <div className="mouse-cursor">Security</div>
                    <div className="txt-14 col-heavyDark mouse-cursor">Directory</div>
                    <div className="mouse-cursor">Find a Provider</div>
                    <div className="mouse-cursor">Learn More</div>
                    <div className="txt-14 col-heavyDark mouse-cursor">Emergency</div>
                    <div className="mouse-cursor">Emergency Resources</div>
                    <div className="txt-14 col-heavyDark mouse-cursor">Legal</div>
                    <div className="mouse-cursor">Privacy Policy</div>
                    <div className="mouse-cursor">Terms and Conditions</div>
                </div>

                <div className="txt-align">
                    <div className="txt-14 col-heavyDark mouse-cursor">Company Information</div>
                    <div className="txt-bold mouse-cursor">Mailing Address</div>
                    <div className="mouse-cursor">P.O. Box 13709</div>
                    <div className="mouse-cursor">Birmingham, AL 35202</div>
                    <div className="txt-bold mouse-cursor">Main Phone: 972-674-9855</div>
                    <div className="txt-bold mouse-cursor">Tech Support: 1-833-682-6656</div>
                    <div className="txt-bold mouse-cursor">Compliance Phone: 844-758-6852</div>
                    <div className="txt-bold mouse-cursor">Compliance Email: compliance@thera-link.com</div>
                    <div className="contact-align">
                        <div className="btn-contact-us col-buttonAndLink mouse-cursor">Contact Us</div>
                    </div>

                    <div className="social-icon6 txt-14 col-heavyDark mouse-cursor">Connect with Us</div>

                    <div className="social-icon6">
                        <img className="icon-mr mouse-cursor" src={require('../assets/img/landing/icon-1.svg')} alt="" />
                        <img className="icon-mr mouse-cursor" src={require('../assets/img/landing/icon-2.svg')} alt="" />
                        <img className="icon-mr mouse-cursor" src={require('../assets/img/landing/icon-3.svg')} alt="" />
                        <img className="icon-mr mouse-cursor" src={require('../assets/img/landing/icon-4.svg')} alt="" />
                        <img className="icon-mr mouse-cursor" src={require('../assets/img/landing/icon-5.svg')} alt="" />
                        <img className="mouse-cursor" src={require('../assets/img/landing/icon-6.svg')} alt="" />
                    </div>
                </div>
            </div>

            <div className="stripe-pt justify-footer">
                <div>
                    <div>
                        <img className="tele-img mouse-cursor" src={require('../assets/img/landing/app-logo.svg')} alt="" />
                        <div className="txt-12 col-buttonAndLink">
                            &copy;2020 Tele Therapist LLC. All Rights Reserved.
                        </div>
                    </div>

                    <div className="justify-footer">
                        <img className="hipaa-stripe mouse-cursor" src={require('../assets/img/landing/hipaa-compliance.svg')} alt="" />
                        <img className="mouse-cursor" src={require('../assets/img/landing/powered-by-stripe.svg')} alt="" />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Footer;