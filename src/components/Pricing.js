import React from 'react';
import Header from "./Header";
import '../assets/css/pricing.css';

function Pricing() {

    return (
        <div>
            <div className="pricing-header-bg justify-center">
                <Header/>

                <div className="whole-body-mW justify-center">
                    <div className="payment-flex-grid2 justify-center extra-pt">
                        <div>
                            <img src={require('../assets/img/pricing-img-icon.svg')} alt="" />
                        </div>

                        <div className="">
                            <div className="simple-header txt-36 mouse-cursor">
                                Simple. Straightforward Pricing.
                            </div>

                            <div className="justify-rl">
                                <div className="simple-desc justify-center">
                                    <div className=" txt-18">
                                        3-DAY FREE TRIAL. NO CREDIT CARD REQUIRED.
                                    </div>
                                    <div className="btn-watch-demo txt-18 mouse-cursor">WATCH DEMO</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="whole-body-mW">
                <div className="txt-36 col-darkBlue align-c after-select">
                    AFTER YOUR FREE TRIAL, <br />SELECT THE PLAN THAT WORKS BEST FOR YOUR PRACTICE.
                </div>
                <div className="txt-24 col-heavyDark">
                    <div className="justify-individual">
                        <span className="individual-team mouse-cursor justify-center">Individual Plans</span>
                        <span className="individual-team mouse-cursor">Team Plans</span>
                    </div>
                </div>
            </div>

            <div className="whole-body-mW basic-plus-pt">
                <div className="flex-grid3 reFixing-grid3-basic">
                    <div className="card-basic txt-bold">
                        <div className="txt-24 btn-underLine">
                            <div className="txt-month">Basic</div>
                            <div className="txt-month month-pb">$30/month</div>
                        </div>
                        <div className="txt-18 pt-40 btn-underLine txt-month">
                            <div className="txt-month-desc">5 sessions/month</div>
                            <div className="txt-month-desc">1 provider</div>
                            <div className="txt-month-desc">client scheduler</div>
                        </div>
                        <div className="btn-card txt-18 mouse-cursor">START FREE TRIAL</div>
                    </div>

                    <div className="card-plus txt-bold">
                        <div className="txt-24 btn-underLine">
                            <div className="txt-month">Plus</div>
                            <div className="txt-month">$45/month</div>
                            <div className="txt-18">per provider</div>
                        </div>
                        <div className="btn-hot btn-underLine mouse-cursor">HOT</div>
                        <div className="txt-18 pt-40 btn-underLine">
                            <div className="txt-month-desc">unlimited sessions</div>
                            <div className="txt-month-desc">office manager account(s)</div>
                            <div className="txt-month-desc">advanced client scheduler</div>
                            <div className="txt-month-desc">payment requests</div>
                            <div className="txt-month-desc">secure file sharing</div>
                            <div className="txt-month-desc">directory listing</div>
                        </div>
                        <div className="btn-card txt-18 mouse-cursor">START FREE TRIAL</div>
                    </div>

                    <div className="card-ultimate txt-bold">
                        <div className="txt-24 btn-underLine">
                            <div className="txt-month">Ultimate</div>
                            <div className="txt-month">$65/month</div>
                            <div className="txt-18">per provider</div>
                        </div>
                        <div className="txt-18 pt-40 btn-underLine">
                            <div className="txt-month-desc">plus plan features +</div>
                            <div className="txt-month-desc">session & client notes</div>
                            <div className="txt-month-desc">secure messaging</div>
                            <div className="txt-month-desc">branded portal</div>
                            <div className="txt-month-desc">featured directory listing</div>
                        </div>
                        <div className="btn-card txt-18 mouse-cursor justify-center">START FREE TRIAL</div>
                    </div>
                </div>

                <div className="justify-rl col-heavyDark ptb-50-80">
                    <div>
                        <div className="txt-20">No long-term contracts. No fuss.</div>
                        <div className="txt-16">*sales tax is included in the monthly plan pricing</div>
                    </div>
                </div>

                <div className="txt-36 txt-bold col-darkBlue">ALL PLANS INCLUDE:</div>

                <div className="flex-grid3 reFixing-grid3-basic txt-20 ptb--46-70">
                    <div className="card-icon">
                        <div className="">
                            <img className="mouse-cursor" src={require('../assets/img/plan-icon1.svg')} alt="" />
                        </div>
                        <div className="txt-hipaa-title txt-bold">HIPAA Compliance</div>
                        <div className="txt-16">BAA included with all plans!</div>
                    </div>

                    <div className="card-icon">
                        <div className="">
                            <img className="mouse-cursor icon-shadow" src={require('../assets/img/plan-icon2.svg')} alt="" />
                        </div>
                        <div className="txt-hipaa-title txt-bold">Amazing Support</div>
                        <div className="txt-16">24x7x365 bilingual support desk.</div>
                    </div>

                    <div className="card-icon">
                        <div className="">
                            <img className="mouse-cursor" src={require('../assets/img/plan-icon3.svg')} alt="" />
                        </div>
                        <div className="txt-hipaa-title txt-bold">Custom Waiting Room</div>
                        <div className="txt-16">Make it uniquely yours.</div>
                    </div>

                    <div className="card-icon">
                        <div className="">
                            <img className="mouse-cursor" src={require('../assets/img/plan-icon4.svg')} alt="" />
                        </div>
                        <div className="txt-hipaa-title txt-bold">Group Session Ability</div>
                        <div className="txt-16">Individual too, of course.</div>
                    </div>

                    <div className="card-icon">
                        <div className="">
                            <img className="mouse-cursor" src={require('../assets/img/plan-icon5.svg')} alt="" />
                        </div>
                        <div className="txt-hipaa-title txt-bold">Basic Scheduling</div>
                        <div className="txt-16">E-mail notifications & reminders.</div>
                    </div>

                    <div className="card-icon">
                        <div className="">
                            <img className="mouse-cursor" src={require('../assets/img/plan-icon6.svg')} alt="" />
                        </div>
                        <div className="txt-hipaa-title txt-bold">Accept Payment</div>
                        <div className="txt-16">Customize per appointment.</div>
                    </div>
                </div>
            </div>

            <div className="can-plan-bg col-darkBlue">
                <div className="whole-body-mW">
                    <div className="txt-36 txt-bold">PRICING QUESTIONS</div>
                    <div className="pricing-hr">
                        <hr />
                    </div>

                    <div className="flex-grid2 can-grid2-gaps">
                        <div className="align-l pricing-desc-pb">
                            <div className="txt-24 can-plan-title">Can I change my plan later?</div>
                            <div className="txt-20 col-heavyDark">
                                Absolutely!  You can change your plan (up or down) at any time using the portal after you sign up. No questions asked. Yes, really.
                            </div>
                        </div>

                        <div className="align-l pricing-desc-pb">
                            <div className="txt-24 can-plan-title">Can I change my plan later?</div>
                            <div className="txt-20 col-heavyDark">
                                Absolutely!  You can change your plan (up or down) at any time using the portal after you sign up. No questions asked. Yes, really.
                            </div>
                        </div>

                        <div className="align-l pricing-desc-pb">
                            <div className="txt-24 can-plan-title">Can I change my plan later?</div>
                            <div className="txt-20 col-heavyDark">
                                Absolutely!  You can change your plan (up or down) at any time using the portal after you sign up. No questions asked. Yes, really.
                            </div>
                        </div>

                        <div className="align-l pricing-desc-pb">
                            <div className="txt-24 can-plan-title">Can I change my plan later?</div>
                            <div className="txt-20 col-heavyDark">
                                Absolutely!  You can change your plan (up or down) at any time using the portal after you sign up. No questions asked. Yes, really.
                            </div>
                        </div>

                        <div className="align-l pricing-desc-pb">
                            <div className="txt-24 can-plan-title">Can I change my plan later?</div>
                            <div className="txt-20 col-heavyDark">
                                Absolutely!  You can change your plan (up or down) at any time using the portal after you sign up. No questions asked. Yes, really.
                            </div>
                        </div>

                        <div className="align-l pricing-desc-pb">
                            <div className="txt-24 can-plan-title">Can I change my plan later?</div>
                            <div className="txt-20 col-heavyDark">
                                Absolutely!  You can change your plan (up or down) at any time using the portal after you sign up. No questions asked. Yes, really.
                            </div>
                        </div>

                        <div className="align-l pricing-desc-pb">
                            <div className="txt-24 can-plan-title">Can I change my plan later?</div>
                            <div className="txt-20 col-heavyDark">
                                Absolutely!  You can change your plan (up or down) at any time using the portal after you sign up. No questions asked. Yes, really.
                            </div>
                        </div>
                    </div>
                </div>
             </div>

            <div className="whole-body-mW">
                <div className="pricing-hr">
                    <hr />
                </div>

                <div className="txt-18 col-heavyDark">
                    We are here to help so feel free to contact us with any additional questions you may have!
                </div>

                <div className="flex-grid3 phone-email-grid3-gaps">
                    <div className="info-pb">
                        <div className="icon-circle-bg"><img className="schedule-icon" src={require('../assets/img/schedule-icon1.svg')} alt="" /></div>
                        <div className="txt-24 col-darkBlue icon-txt-info">SCHEDULE A DEMO</div>
                        <div className="txt-18 col-paragraphBg">schedule now</div>
                    </div>

                    <div className="info-pb">
                        <div className="icon-circle-bg"><img className="schedule-icon" src={require('../assets/img/schedule-icon2.svg')} alt="" /></div>
                        <div className="txt-24 col-darkBlue icon-txt-info">GIVE US A RING</div>
                        <div className="txt-18 col-paragraphBg">972-674-9855</div>
                    </div>

                    <div className="info-pb">
                        <div className="icon-circle-bg"><img className="schedule-icon" src={require('../assets/img/schedule-icon3.svg')} alt="" /></div>
                        <div className="txt-24 col-darkBlue icon-txt-info">EMAIL US</div>
                        <div className="txt-18 col-paragraphBg">support@asclepius.com</div>
                    </div>
                </div>
            </div>

            <div className="sign-up-for justify-center">
                <div className="whole-body-mW justify-rl">
                    <div className="btn-txt">
                        <div className="txt-24 justify-center">Download our "Informed Consent Checklist" now!</div>
                        <div className="btn-try-our btn-request-b txt-24 mouse-cursor">DOWNLOAD</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;