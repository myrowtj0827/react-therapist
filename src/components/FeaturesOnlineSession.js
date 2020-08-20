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
                <div className="online-grid2-l">
                    <div className="empty-img-inversion"></div>
                    <div className="txt-18 col-heavyDark">
                        <div className="txt-32 txt-bold col-darkBlue title-ptb">
                            Scheduling
                        </div>

                        <div>
                            The calendar is clean and easy to use. We’ve got you covered on recurring appointments, appointment reminders, and your client’s ability to request appointments from your website or ours!
                        </div>
                    </div>
                </div>

                <div className="online-grid2-r">
                    <div className="txt-18 col-heavyDark">
                        <div className="txt-32 txt-bold col-darkBlue title-ptb">
                            Custom Waiting Room
                        </div>

                        <div className="desc-features">
                            Our waiting room is amazing. Plain and simple. You choose the imagery and the music.
                        </div>
                        <div>
                            Clients are directed to your custom waiting room until you let them into the session – just like they are in your office!
                        </div>
                    </div>
                    <div className="empty-img-inversion"></div>
                </div>


                <div className="online-grid2-l">
                    <div className="empty-img-inversion"></div>
                    <div className="txt-18 col-heavyDark">
                        <div className="txt-32 txt-bold col-darkBlue title-ptb">
                            Client & Session Notes
                        </div>

                        <div className="desc-features">
                            Easily take notes after a session or even just a quick note about the client.
                        </div>
                        <div>
                            Our notes are beautiful, easy to use, and you get to make them the way you want!
                        </div>
                    </div>
                </div>

                <div className="online-grid2-r">
                    <div className="txt-18 col-heavyDark">
                        <div className="txt-32 txt-bold col-darkBlue title-ptb">
                            Client Payment
                        </div>

                        <div>
                            Your clients can pay you prior to joining a session or you can request a payment from them at any time. Clients simply login and click the “Pay Now” button.
                        </div>
                    </div>
                    <div className="empty-img-inversion"></div>
                </div>


                <div className="online-grid2-l">
                    <div className="empty-img-inversion"></div>
                    <div className="txt-18 col-heavyDark">
                        <div className="txt-32 txt-bold col-darkBlue title-ptb">
                            Secure Messaging
                        </div>

                        <div>
                            Message with your clients, colleagues, and staff members! Messages are securely stored on thera-LINK servers. If someone isn’t logged in when they receive a message, they’ll get a notification email to let them know to login and retrieve the message.
                        </div>
                    </div>
                </div>

                <div className="online-grid2-r">
                    <div className="txt-18 col-heavyDark">
                        <div className="txt-32 txt-bold col-darkBlue title-ptb">
                            File Sharing
                        </div>

                        <div>
                            File sharing is super easy and painless – even for the non-tech savvy folks! Just upload the file, select the client(s) to share with and that’s it! Notifications happen seamlessly to let everyone know.
                        </div>
                    </div>
                    <div className="empty-img-inversion"></div>
                </div>


                <div className="online-grid2-l">
                    <div className="empty-img-inversion"></div>
                    <div className="txt-18 col-heavyDark">
                        <div className="txt-32 txt-bold col-darkBlue title-ptb">
                            Client Profile
                        </div>

                        <div>
                            Client profiles give you information about your client right at your fingertips. See all notes related to that client, a report of past appointments, how long sessions lasted, payment, and personal information.
                        </div>
                    </div>
                </div>

                <div className="online-grid2-r">
                    <div className="txt-18 col-heavyDark">
                        <div className="txt-32 txt-bold col-darkBlue title-ptb">
                            Secure Video
                        </div>

                        <div className="desc-features">
                            The video is beautiful and secure with all streams encrypted end to end.
                        </div>
                        <div>
                            You can have multiple people in one session and all be seen at the same time.
                        </div>
                    </div>
                    <div className="empty-img-inversion"></div>
                </div>


                <div className="online-grid2-l">
                    <div className="empty-img-inversion"></div>
                    <div className="txt-18 col-heavyDark">
                        <div className="txt-32 txt-bold col-darkBlue title-ptb">
                            Directory Listing
                        </div>

                        <div className="desc-features">
                            Our Directory showcases only thera-LINK providers who choose to be listed.
                        </div>
                        <div>
                            We handle the behind the scenes work to help clients find you and connect.
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