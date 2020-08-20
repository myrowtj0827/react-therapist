import React from 'react';
import Header from "./Header";
import '../assets/css/featuresPage.css';

function FeaturesScheduling() {
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
                                Scheduling
                            </div>

                            <div className="btn-header-common-desc txt-18">
                                Manage Your Calendar With Ease
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
                            Client Scheduler enables your clients to schedule appointments but still gives you complete control over your calendar!
                        </div>
                        <div className="features-payment-pb2 col-lightColor">
                            That's what we call a WIN-WIN.
                        </div>

                        <div className="features-payment-pb3">
                            Set Your Availability – Online, In Office, or Both</div>
                        <div className="features-payment-pb3">Link to your Client Scheduler from your website (if you’d like)
                        </div>
                        <div className="features-payment-pb3">
                            New clients are automatically added to your practice and sent a welcome email
                        </div>
                        <div className="features-payment-pb3">
                            Approve the appointment request from your dashboard
                        </div>
                    </div>
                </div>
            </div>

            <div className="whole-body-mW align-l">
                <div className="features-flex-grid2">
                    <div className="empty-img"></div>
                    <div className="txt-18 col-heavyDark">
                        <div className="txt-26 txt-bold col-paragraphBg features-payment-pb1">
                            Automatic appointment reminders sent via email to reduce no-shows.
                        </div>
                        <div className="features-payment-pb2 col-lightColor">
                            You have more important things to worry about!
                        </div>
                        <div className="features-payment-pb3">
                            Turn reminders on/off the Practice level
                        </div>
                        <div className="features-payment-pb3">
                            Set 24/48/72 hours based on your cancellation policy
                        </div>
                    </div>
                </div>
            </div>

            <div className="whole-body-mW align-l">
                <div className="features-flex-grid2">
                    <div className="empty-img"></div>
                    <div className="txt-18 col-heavyDark">
                        <div className="txt-26 txt-bold col-paragraphBg features-payment-pb1">
                            Create Appointment Types to match your services
                        </div>
                        <div className="features-payment-pb2 col-lightColor">
                            You have more important things to worry about!
                        </div>

                        <div className="features-payment-pb3">
                            Create Appointment Types to match your services (i.e. Intake, Couple, Individual)
                        </div>
                        <div className="features-payment-pb3">
                            Approve/Edit/Decline appointment requests from clients
                        </div>
                        <div className="features-payment-pb3">
                            Add payment to your appointments
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

export default FeaturesScheduling;