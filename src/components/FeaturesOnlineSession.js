import React from 'react';
import Header from "./Header";
import '../assets/css/featuresPage.css';

function FeaturesOnlineSession() {
    return (
        <div>
            <div className="features-payment-bgColor justify-center">
                <Header></Header>

                <div className="whole-body-mW justify-center">
                    <div className="payment-flex-grid2 justify-center">
                        <div>
                            <img src={require('../assets/img/query-icon.svg')} alt="" />
                        </div>

                        <div className="">
                            <div className="btn-header-common txt-36 mouse-cursor">
                                Virtual Session
                            </div>

                            <div className="btn-header-common-desc txt-18">
                                This is what we were created for!
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="whole-body-mW features-header-pt align-l">
                <div className="features-flex-grid2">
                    <div className="empty-img"></div>
                    <div className="txt-18 col-heavyDark">
                        <div className="txt-26 txt-bold col-paragraphBg features-payment-pb1">
                            Beautiful telehealth sessions that put video first.
                        </div>
                        <div className="features-payment-pb2 col-lightColor">
                            Seeing your client is our top priority.
                        </div>

                        <div className="features-payment-pb3">
                            Let your client(s) out of the waiting room when you are ready.
                        </div>
                        <div className="features-payment-pb3">
                            Chat with them while they are in the waiting room to let you know you’ll be right with them.
                        </div>
                        <div className="features-payment-pb3">
                            Double click on any video window to make them larger (80%) of your screen!
                        </div>
                    </div>
                </div>
            </div>

            <div className="whole-body-mW align-l">
                <div className="features-flex-grid2">
                    <div className="empty-img"></div>
                    <div className="txt-18 col-heavyDark">
                        <div className="txt-26 txt-bold col-paragraphBg features-payment-pb1">
                            Wonderful therapeutic experience for your clients!
                        </div>
                        <div className="features-payment-pb2 col-lightColor">
                            Our waiting rooms are going to be your client's favorite.
                        </div>

                        <div className="features-payment-pb3">
                            Customize your waiting room with marvelous imagery.
                        </div>
                        <div className="features-payment-pb3">
                            Select from music options like acoustic, spa, R&B, and more.
                        </div>
                        <div className="features-payment-pb3">
                            Clients wait in your waiting room until you let them in session.
                        </div>
                        <div className="features-payment-pb3">
                            Payment can be required before client’s enter into session.
                        </div>
                    </div>
                </div>
            </div>

            <div className="whole-body-mW align-l">
                <div className="features-flex-grid2">
                    <div className="empty-img"></div>
                    <div className="txt-18 col-heavyDark">
                        <div className="txt-26 txt-bold col-paragraphBg features-payment-pb1">
                            Seamless group telehealth sessions
                        </div>
                        <div className="features-payment-pb2 col-lightColor">
                            Have a couple, family, or group session!
                        </div>

                        <div className="features-payment-pb3">
                            See everyone in the group session just like you were in-office.
                        </div>
                        <div className="features-payment-pb3">
                            Share your screen with everyone in the session!
                        </div>
                        <div className="features-payment-pb3">
                            Hide your self view and see your clients even larger on screen.
                        </div>
                        <div className="features-payment-pb3">
                            You can mute clients or they can mute themselves as needed.
                        </div>
                    </div>
                </div>
            </div>

            <div className="sign-up-for justify-center">
                <div className="whole-body-mW justify-rl">
                    <div className="btn-txt">
                        <div className="txt-24 justify-center">Ready to get started now?</div>

                        <div className="btn-try-our btn-request-b txt-24 mouse-cursor">SIGN UP FOR FREE TRIAL</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeaturesOnlineSession;