import React from 'react';
import Header from "./Header";
import '../assets/css/featuresPage.css';

function FeaturesNotes() {
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
                                Session & Client Notes
                            </div>

                            <div className="btn-header-common-desc txt-18">
                                Keep notes at your fingertips!
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
                            Using our editor is just like using Word or any other editing program you already know.
                        </div>
                        <div className="features-payment-pb2 col-lightColor">
                            That's what we call a WIN-WIN.
                        </div>

                        <div className="features-payment-pb3">
                            Notes can be associated with a session or written as a general client note
                        </div>
                        <div className="features-payment-pb3">
                            Create any styling you’d like – headings, bold, italics, etc…
                        </div>
                        <div className="features-payment-pb3">
                            Make your note match your needs – you have a blank canvas to work with
                        </div>
                    </div>
                </div>
            </div>

            <div className="whole-body-mW align-l">
                <div className="features-flex-grid2">
                    <div className="empty-img"></div>
                    <div className="txt-18 col-heavyDark">
                        <div className="txt-26 txt-bold col-paragraphBg features-payment-pb1">
                            Save Your Notes Securely
                        </div>
                        <div className="features-payment-pb2 col-lightColor">
                            We do the heavy lifting of making sure it's secure and saved. You just type away!
                        </div>

                        <div className="features-payment-pb3">
                            Every note is auto-saved so you don’t have to start over
                        </div>
                        <div className="features-payment-pb3">
                            Sign and lock your note so it can’t be edited in the future
                        </div>
                        <div className="features-payment-pb3">
                            Notes are time and date stamped
                        </div>
                    </div>
                </div>
            </div>

            <div className="whole-body-mW align-l">
                <div className="features-flex-grid2">
                    <div className="empty-img"></div>
                    <div className="txt-18 col-heavyDark">
                        <div className="txt-26 txt-bold col-paragraphBg features-payment-pb1">
                            Review past notes with ease
                        </div>
                        <div className="features-payment-pb2 col-lightColor">
                            Look back at your past client and session notes while on the same page as you write your new note.
                        </div>

                        <div className="features-payment-pb3">
                            Notes at your fingertips so you can look back at historical records
                        </div>
                        <div className="features-payment-pb3">
                            No need to go back and forth in the app to find past notes
                        </div>
                        <div className="features-payment-pb3">
                            Copy and paste from previous notes
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

export default FeaturesNotes;