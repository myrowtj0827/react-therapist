import React from 'react';
import Header from "./Header";
import '../assets/css/viewProvider.css';

function ViewProvider() {
    return (
        <div>
            <div className="view-header-bgColor justify-center">
                <Header></Header>
            </div>

            <div className="llc-cover-bg">
                <div className="psychologist-posi">
                    <div className="newYork-pt justify-center">
                        <div className="txt-32 txt-bold">Michael Therapy Services LLC</div>
                        <div className="llc-icon-pl"><img src={require('../assets/img/llc-check-icon.svg')} alt="" /> </div>
                    </div>

                    <div className="txt-20 newYork-pt">
                        <div className="llc-city-pr">Psychologist</div>
                        <div>New York, NY</div>
                    </div>
                </div>
            </div>


            <div className="whole-body-mW view-header-pt align-l">
                <div className="view-grid3 col-darkBlue">
                    <div className="view-grid21">
                        <div className="view-ptl view-grid-bg">
                            <div className="txt-24">Areas of expertise</div>
                            <hr />

                            <div className="general-flex view-icon1-pt">
                                <img src={require('../assets/img/view-icon-1.svg')} alt="" />
                                <div className="view-icon-desc txt-20 align-l">Acceptance and Commitment Therapy</div>
                            </div>

                            <div className="general-flex view-icon1-pt">
                                <img src={require('../assets/img/view-icon-1.svg')} alt="" />
                                <div className="view-icon-desc txt-20 align-l">ADHD/ADD</div>
                            </div>

                            <div className="general-flex view-icon1-pt">
                                <img src={require('../assets/img/view-icon-1.svg')} alt="" />
                                <div className="view-icon-desc txt-20 align-l">Adolescents</div>
                            </div>

                            <div className="general-flex view-icon1-pt">
                                <img src={require('../assets/img/view-icon-1.svg')} alt="" />
                                <div className="view-icon-desc txt-20 align-l">Anxiety</div>
                            </div>

                            <div className="general-flex view-icon1-pt">
                                <img src={require('../assets/img/view-icon-1.svg')} alt="" />
                                <div className="view-icon-desc txt-20 align-l">Assessment</div>
                            </div>

                            <div className="general-flex view-icon1-pt">
                                <img src={require('../assets/img/view-icon-1.svg')} alt="" />
                                <div className="view-icon-desc txt-20 align-l">Autism Spectrum</div>
                            </div>

                            <div className="general-flex view-icon1-pt">
                                <img src={require('../assets/img/view-icon-1.svg')} alt="" />
                                <div className="view-icon-desc txt-20 align-l">Clinical Supervision</div>
                            </div>

                            <div className="general-flex view-icon1-pt">
                                <img src={require('../assets/img/view-icon-1.svg')} alt="" />
                                <div className="view-icon-desc txt-20 align-l">Cognitive Behavioral Therapy</div>
                            </div>

                            <div className="general-flex view-icon1-pt">
                                <img src={require('../assets/img/view-icon-1.svg')} alt="" />
                                <div className="view-icon-desc txt-20 align-l">Family</div>
                            </div>
                        </div>

                        <div className="view-ptl view-grid-bg">
                            <div className="txt-24">Cost of Service</div>
                            <hr />

                            <div className="view-icon1-pt">
                                <div className="txt-20 align-l">$60-$100</div>
                            </div>
                        </div>
                    </div>


                    <div className="view-ptl view-grid-bg">
                        <div className="txt-24">About provider</div>
                        <hr />

                        <div className="view-icon1-pt">
                            <div className="txt-18 align-l">
                                The psychologists at Sydney Children’s Practice are committed to providing ongoing care to children, adolescents and families and serving their needs as we all face the current uncertainty and stress of the COVID-19 pandemic. We are committed to maintaining the highest level of care and professionalism possible while our families manage the current stress associated with the current pandemic.
                            </div>
                            <div className="txt-18 align-l view-desc-pt">
                                We are continuing to deliver evidence-based assessment and therapy using Thera-LINK, which has HIPAA-compliant security features and provides clients a user-friendly online consultation platform. Through this we maintain our clients’ safety during the pandemic by allowing them to remain home while receiving psychological care and support.
                            </div>
                        </div>
                    </div>

                    <div className="view-grid22 txt-16 col-darkBlue">
                        <div className="view-ptl view-grid-bg view-icon1-pt">
                            <div>
                                <img className="auto-matching map-img" src={require('../assets/img/view-map.svg')} alt="" />
                            </div>

                            <div className="">New York, NY</div>
                            <div className="general-flex view-icon1-pt">
                                <img src={require('../assets/img/view-icon-2.svg')} alt="" />
                                <div className="view-icon-desc">123-456-7890</div>
                            </div>

                            <div className="general-flex view-icon1-pt">
                                <img src={require('../assets/img/view-icon-3.svg')} alt="" />
                                <div className="view-icon-desc">www.mike-ts.com</div>
                            </div>

                            <div className="general-flex view-icon1-pt">
                                <img src={require('../assets/img/view-icon-4.svg')} alt="" />
                                <div className="view-icon-desc">Get Directions</div>
                            </div>
                        </div>


                        <div className="view-ptl view-grid-bg">
                            <div className="txt-24">Licensure Info</div>
                            <hr />

                            <div className="txt-16 align-l view-desc-pt">
                                National Association of Cognitive Behavioral Therapy - CBT Certified Anxiety Specialist Certified Master Grief Coach
                            </div>
                            <div className="txt-16 align-l">
                                PESI - Certified Clinical Anxiety Treatment Professional Trained Crisis Counselor
                            </div>
                        </div>
                    </div>

                </div>
                <div className="view-grid-bg view-ptl">
                    <div className="col-darkBlue">
                        <div className="txt-24">Contact Me</div>
                        <hr />

                        <div className="input-pb mobile-flex">
                            <input className="input-maxW" type="text" placeholder="Name" />
                            <img className="asteristic-pl" src={require('../assets/img/icon-asteristic.svg')} alt="" />
                        </div>

                        <div className="mobile-flex">
                            <input className="input-maxW" type="text" placeholder="Your Email Address" />
                            <img className="asteristic-pl" src={require('../assets/img/icon-asteristic.svg')} alt="" />
                        </div>

                        <div className="general-flex">
                            <input className="input-message" type="text" placeholder="Message" />
                            <img className="asteristic-pl" src={require('../assets/img/icon-asteristic.svg')} alt="" />
                        </div>

                        <div className="justify-rl un-between">
                            <div className="justify-center">
                                <img className="robot-maxWidth" src={require('../assets/img/robot-security.svg')} alt="" />
                                <div className="btn-bttonAndLink mouse-cursor">Action</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="login-for justify-center">
                <div className="whole-body-mW justify-rl">
                    <div className="btn-txt">
                        <div className="txt-24 justify-center">Existing Client? Please login.</div>

                        <div className="btn-try-our btn-request-b btn-view-login txt-24 mouse-cursor">LOGIN</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewProvider;