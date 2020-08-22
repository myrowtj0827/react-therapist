import React from 'react';
import Header from "./Header";
import "../assets/css/landing.css";

// import $ from 'jquery';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Landing() {
    return (
        <div>
            <div className="header-bg">
                <Header> </Header>
                <div className="btn-header btn-landing-bg justify-center txt-42 txt-bold">Healthcare Anywhere.</div>
                <div className="therapy-desc txt-20 txt-italic">Online Therapy Service for Everybody</div>
                <div className="btn-trial justify-center mouse-cursor txt-16">Join Us For 3-day Free Trial</div>
            </div>

            <div className="whole-body-mW">
                <div className="take-practice col-darkBlue txt-48">Take your practice online.</div>
                <div className="connect-before col-heavyDark txt-24">We help you connect with your clients like never before.</div>
            </div>

            <div className="whole-body-mW">
                <div className="flex-grid4">
                    <div>
                        <div className="">
                            <img className="online-img mouse-cursor" src={require('../assets/img/landing/online-practical-1.svg')} alt="" />
                        </div>
                        <div className="take-practice-tp justify-center col-heavyDark txt-24">
                            Meet your clients via video
                        </div>
                    </div>

                    <div>
                        <div className="">
                            <img className="online-img mouse-cursor" src={require('../assets/img/landing/online-practice-2.svg')} alt="" />
                        </div>
                        <div className="take-practice-tp justify-center col-heavyDark txt-24">
                            Enable client communication
                        </div>
                    </div>

                    <div>
                        <div className="">
                            <img className="online-img mouse-cursor" src={require('../assets/img/landing/online-practice-3.svg')} alt="" />
                        </div>
                        <div className="take-practice-tp justify-center col-heavyDark txt-24">
                            Extend your practice's reach
                        </div>
                    </div>

                    <div>
                        <div className="">
                            <img className="online-img mouse-cursor" src={require('../assets/img/landing/online-practice-4.svg')} alt="" />
                        </div>
                        <div className="take-practice-tp justify-center col-heavyDark txt-24">
                            Maintain HIPAA Security
                        </div>
                    </div>
                </div>

                <div className="online-practice-pm justify-center">
                    <div className="btn-try-our try-pricing col-buttonAndLink mouse-cursor txt-24">TRY FREE</div>

                    <div className="btn-try-our try-pricing col-buttonAndLink mouse-cursor txt-24">OUR PRICING</div>
                </div>
            </div>

            <div className="bg-buttonAndLink">
                <div className="whole-body-mW">

                    <div className="watch-icon-pd mouse-cursor">
                        <img src={require('../assets/img/landing/watch-icon.svg')} alt="" />
                    </div>

                    <div className="txt-36">
                        Schedule your live one on one demo with our sales team today or watch a pre-recorded demo here!
                    </div>

                    <div className="request-pm justify-center">
                        <div className="btn-try-our btn-request-b txt-24 mouse-cursor">REQUEST DEMO</div>
                        <div className="btn-try-our btn-request-b txt-24 mouse-cursor">WATCH DEMO</div>
                    </div>
                </div>
            </div>

            <div className="whole-body-mW">
                <div className="use-app txt-48 col-darkBlue">Who uses this app?</div>

                <div className="app-desc txt-24 col-heavyDark">
                    While we focus on mental and behavioral health providers, we work with all types of professionals!
                </div>

                <div className="check-width flex-grid2">
                    <div className="use-app-flex">
                        <div><img src={require('../assets/img/landing/circle-checkBox.svg')} alt="" /> </div>
                        <div className="circle-pd txt-24 col-heavyDark">Addition Specialists</div>
                    </div>


                    <div className="use-app-flex">
                        <div><img src={require('../assets/img/landing/circle-checkBox.svg')} alt="" /> </div>
                        <div className="circle-pd txt-24 col-heavyDark">Mental Health Therapists</div>
                    </div>

                    <div className="use-app-flex">
                        <div><img src={require('../assets/img/landing/circle-checkBox.svg')} alt="" /> </div>
                        <div className="circle-pd txt-24 col-heavyDark">Coaches</div>
                    </div>

                    <div className="use-app-flex">
                        <div><img src={require('../assets/img/landing/circle-checkBox.svg')} alt="" /> </div>
                        <div className="circle-pd txt-24 col-heavyDark">Physical Therapists</div>
                    </div>

                    <div className="use-app-flex">
                        <div><img src={require('../assets/img/landing/circle-checkBox.svg')} alt="" /> </div>
                        <div className="circle-pd txt-24 col-heavyDark">Counselors</div>
                    </div>

                    <div className="use-app-flex">
                        <div><img src={require('../assets/img/landing/circle-checkBox.svg')} alt="" /> </div>
                        <div className="circle-pd txt-24 col-heavyDark">Psychologists</div>
                    </div>

                    <div className="use-app-flex">
                        <div><img src={require('../assets/img/landing/circle-checkBox.svg')} alt="" /> </div>
                        <div className="circle-pd txt-24 col-heavyDark">Dietitians</div>
                    </div>

                    <div className="use-app-flex">
                        <div><img src={require('../assets/img/landing/circle-checkBox.svg')} alt="" /> </div>
                        <div className="circle-pd txt-24 col-heavyDark">Psychiatrists</div>
                    </div>

                    <div className="use-app-flex">
                        <div><img src={require('../assets/img/landing/circle-checkBox.svg')} alt="" /> </div>
                        <div className="circle-pd txt-24 col-heavyDark">Hypnotherapists</div>
                    </div>

                    <div className="use-app-flex">
                        <div><img src={require('../assets/img/landing/circle-checkBox.svg')} alt="" /> </div>
                        <div className="circle-pd txt-24 col-heavyDark">Psychotherapists</div>
                    </div>

                    <div className="use-app-flex">
                        <div><img src={require('../assets/img/landing/circle-checkBox.svg')} alt="" /> </div>
                        <div className="circle-pd txt-24 col-heavyDark">Marriage & Family Therapists</div>
                    </div>

                    <div className="use-app-flex">
                        <div><img src={require('../assets/img/landing/circle-checkBox.svg')} alt="" /> </div>
                        <div className="circle-pd txt-24 col-heavyDark">Social Workers</div>
                    </div>

                    <div className="use-app-flex">
                        <div><img src={require('../assets/img/landing/circle-checkBox.svg')} alt="" /> </div>
                        <div className="circle-pd txt-24 col-heavyDark">Occupational Therapists</div>
                    </div>

                    <div className="use-app-flex">
                        <div><img src={require('../assets/img/landing/circle-checkBox.svg')} alt="" /> </div>
                        <div className="circle-pd txt-24 col-heavyDark">Speech-Language Pathologists</div>
                    </div>
                </div>
            </div>

            <div className="features-needs whole-body-mW">
                <div className="txt-48 col-darkBlue">
                    The features you need and want.
                </div>

                <div className="features-pd txt-24 col-heavyDark">
                    We have the online tools for your online and in office practice.
                </div>
            </div>

            <div className="whole-body-mW">
                <div className="flex-grid4 col-heavyDark refixing-gap">
                    <div className="features-mb">
                        <div className="features-img-pb">
                            <img className="features-icons mouse-cursor" src={require('../assets/img/landing/hipaa.svg')} alt="" />
                        </div>
                        <div className="txt-24">
                            HIPAA COMPLEANT
                        </div>
                        <div className="features-icon-desc txt-18">
                            Encrypted video chat to protect the privacy of you and your clients. Yes, we sign a BAA!
                        </div>
                    </div>

                    <div className="features-mb">
                        <div className="features-img-pb">
                            <img className="features-icons mouse-cursor" src={require('../assets/img/landing/easy.svg')} alt="" />
                        </div>
                        <div className="txt-24">
                            EASY SCHEDULING
                        </div>
                        <div className="features-icon-desc txt-18">
                            Easy to use scheduling, appointment reminders, client self-scheduling!
                        </div>
                    </div>

                    <div className="features-mb">
                        <div className="features-img-pb">
                            <img className="features-icons mouse-cursor" src={require('../assets/img/landing/accept.svg')} alt="" />
                        </div>
                        <div className="txt-24">
                            ACCEPT CLIENT PAYMENT
                        </div>
                        <div className="features-icon-desc txt-18">
                            Accept client payment before or after a session.
                        </div>
                    </div>

                    <div className="features-mb">
                        <div className="features-img-pb">
                            <img className="features-icons mouse-cursor" src={require('../assets/img/landing/group.svg')} alt="" />
                        </div>
                        <div className="txt-24">
                            GROUP OR FAMILY SESSIONS
                        </div>
                        <div className="features-icon-desc txt-18">
                            Couples, family or group sessions of any size!
                        </div>
                    </div>

                    <div className="features-mb">
                        <div className="features-img-pb">
                            <img className="features-icons mouse-cursor" src={require('../assets/img/landing/secure.svg')} alt="" />
                        </div>
                        <div className="txt-24">
                            SECURE MESSAGING
                        </div>
                        <div className="features-icon-desc txt-18">
                            Message back and forth with your clients securely.
                        </div>
                    </div>

                    <div className="features-mb">
                        <div className="features-img-pb">
                            <img className="features-icons mouse-cursor" src={require('../assets/img/landing/session.svg')} alt="" />
                        </div>
                        <div className="txt-24">
                            SESSION/CLIENT NOTES
                        </div>
                        <div className="features-icon-desc txt-18">
                            Take session or client notes and store securely!
                        </div>
                    </div>

                    <div className="features-mb">
                        <div className="features-img-pb">
                            <img className="features-icons mouse-cursor" src={require('../assets/img/landing/chat.svg')} alt="" />
                        </div>
                        <div className="txt-24">
                            CHAT WITH YOUR CLIENTS
                        </div>
                        <div className="features-icon-desc txt-18">
                            Instant chat while in the waiting room or in session.
                        </div>
                    </div>

                    <div className="features-mb">
                        <div className="features-img-pb">
                            <img className="features-icons mouse-cursor" src={require('../assets/img/landing/works.svg')} alt="" />
                        </div>
                        <div className="txt-24">
                            WORKS ON ALL DEVICES
                        </div>
                        <div className="features-icon-desc txt-18">
                            PC or Mac computers, iPhone/iPad, Android tablets/phones!
                        </div>
                    </div>

                    <div className="features-mb">
                        <div className="features-img-pb">
                            <img className="features-icons mouse-cursor" src={require('../assets/img/landing/share.svg')} alt="" />
                        </div>
                        <div className="txt-24">
                            SHARE FILES SECURELY
                        </div>
                        <div className="features-icon-desc txt-18">
                            Transfer files to your clients for them to complete or download.
                        </div>
                    </div>

                    <div className="features-mb">
                        <div className="features-img-pb">
                            <img className="features-icons mouse-cursor" src={require('../assets/img/landing/custome.svg')} alt="" />
                        </div>
                        <div className="txt-24">
                            CUSTOM WAITING ROOM
                        </div>
                        <div className="features-icon-desc txt-18">
                            Virtual waiting room with your choice of background and music!
                        </div>
                    </div>

                    <div className="features-mb">
                        <div className="features-img-pb">
                            <img className="features-icons mouse-cursor" src={require('../assets/img/landing/api.svg')} alt="" />
                        </div>
                        <div className="txt-24">
                            API
                        </div>
                        <div className="features-icon-desc txt-18">
                            Use our API to drive your business forward. Bring on your workflows!
                        </div>
                    </div>

                    <div className="features-mb">
                        <div className="features-img-pb">
                            <img className="features-icons mouse-cursor" src={require('../assets/img/landing/directory.svg')} alt="" />
                        </div>
                        <div className="txt-24">
                            DIRECTORY LISTING
                        </div>
                        <div className="features-icon-desc txt-18">
                            Let clients discover you with a profile on our Directory!
                        </div>
                    </div>
                </div>
            </div>

            <div className="why-us-bg bg-cover">
                <div className="why-us-pd">
                    <div className="txt-64 txt-bold">WHY US?</div>
                    <div className="txt-24 why-us-desc">
                        We've created this handy outline with all of the reasons you should choose us plus answers to your burning questions
                        when selecting the right telehealth provider for your practice.
                    </div>

                    <div className="justify-left">
                        <div className="btn-learn-more txt-24 mouse-cursor">Learn More</div>
                    </div>
                </div>
            </div>

            <div className="connect-clients justify-center">
                <div className="connect-contents">
                    <div className="connect-txt-pb txt-24 col-darkBlue">Connect with your clients wherever you are!</div>
                    <div className="txt-18 col-heavyDark">
                        Conduct secure online therapy sessions with your clients. Whether your client moves away, goes on vacation, lives in a rural area of the state,
                        or simply can't make it to your office, thera-Link allows you to continue your sessions in a secure, HIPAA-compliant environment.
                    </div>

                    <div className="justify-center">
                        <div className="btn-learn-features txt-18 mouse-cursor">Learn More About Our Features</div>
                    </div>
                </div>
            </div>

            <div className="our-customers">
                <div className="whole-body-mW">
                    <div className="txt-32">Our Customers Rave About Us</div>
                    <div className="star-pt">
                        <img src={require('../assets/img/landing/star.svg')} alt="" />
                        <img src={require('../assets/img/landing/star.svg')} alt="" />
                        <img src={require('../assets/img/landing/star.svg')} alt="" />
                        <img src={require('../assets/img/landing/star.svg')} alt="" />
                        <img src={require('../assets/img/landing/star.svg')} alt="" />
                    </div>

                    <div>
                        <OwlCarousel items={1}
                                     className="owl-theme"
                                     loop
                                     nav
                                     margin={4}
                                     autoplay={true}
                        >
                            <div className="txt-18">
                                It is easy to use for a non-techie person like me! Quick and easy to contact tech support!
                                Friendly staff!
                            </div>
                            <div className="txt-18">
                                It is easy to use for a non-techie person like me! Quick and easy to contact tech support!
                                Friendly staff!
                            </div>
                        </OwlCarousel>
                    </div>
                    <div className="txt-18">-Shadia D., Counselor</div>
                </div>
            </div>

            <div className="check-trial-bg">
                <div className="whole-body-mW">
                    <div className="txt-24 col-darkBlue">
                        Check out our pricing and sign up for our free 3-day trial.
                    </div>

                    <div className="offer-plan txt-24 col-heavyDark">
                        We offer plans for practices of all sizes!
                    </div>

                    <div className="justify-center">
                        <div className="btn-learn-features btn-start txt-18 mouse-cursor">
                            Start FREE Trial
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;