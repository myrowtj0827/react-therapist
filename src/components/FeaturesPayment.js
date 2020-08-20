import React from 'react';
import Header from "./Header";
import '../assets/css/featuresPage.css';

function FeaturesPayments() {
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
                                Client Payment
                            </div>

                            <div className="btn-header-common-desc txt-18">
                                You need to get paid for your hard work!
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
                            Request payment from your clients
                        </div>
                        <div className="features-payment-pb2 col-lightColor">
                            Freedom to set your fee per appointment per client.
                        </div>
                        <div className="features-payment-pb3">
                            Set your client’s payment amount when scheduling
                        </div>
                        <div className="features-payment-pb3">
                            Request payment from clients at any time
                        </div>
                        <div className="features-payment-pb3">
                            Client easily pays via credit card
                        </div>
                        <div className="features-payment-pb3">
                            Stripe processes your charges for a flat 2.9% + $.30 (charge $100, get $96.80)
                        </div>
                        <div className="features-payment-pb3">
                            Money is deposited into your account in 2 business days (on average)
                        </div>
                    </div>
                </div>
            </div>

            <div className="whole-body-mW align-l">
                <div className="features-flex-grid2">
                    <div className="empty-img"></div>
                    <div className="txt-18 col-heavyDark">
                        <div className="txt-26 txt-bold col-paragraphBg features-payment-pb1">
                            It's so easy for clients to login and pay you at their convenience!
                        </div>
                        <div className="features-payment-pb2 col-lightColor">
                            Clients just login and click 'Pay Now' button - doesn't get much easier!
                        </div>
                        <div className="features-payment-pb3">
                            You decide if client is required to pay prior to joining the session
                        </div>
                        <div className="features-payment-pb3">
                            Automatic notifications to the client for all payment requests
                        </div>
                        <div className="features-payment-pb3">
                            Receive an email notification for every payment made to you by clients
                        </div>
                    </div>
                </div>
            </div>

            <div className="whole-body-mW align-l">
                <div className="features-flex-grid2">
                    <div className="empty-img"></div>
                    <div className="txt-18 col-heavyDark">
                        <div className="txt-26 txt-bold col-paragraphBg features-payment-pb1">
                            Visibility into all your payment requests
                        </div>
                        <div className="features-payment-pb2 col-lightColor">
                            You have more important things to worry about!
                        </div>
                        <div className="features-payment-pb3">
                            You can view current outstanding payment requests and edit them if needed
                        </div>
                        <div className="features-payment-pb3">
                            Take a look at past history of payments
                        </div>
                        <div className="features-payment-pb3">
                            Clients can also view their history and outstanding payment requests
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

export default FeaturesPayments;