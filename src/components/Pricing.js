import React from 'react';
import Header from "./Header";
import '../assets/css/directory.css';

function Pricing() {

    return (
        <div>
            <div className="directory-header-bg">
                <Header/>

                <div className="directory-header-position">
                    <div className="txt-48 txt-bold">Connect with a Provider Today</div>
                    <div className="txt-18 connect-today-pb">All providers use the thera-LINK platform for secure online sessions.</div>


                    <div className="align-l">
                        <select className="looking-for directory">
                            <option>Choose a category ...</option>
                        </select>

                        <select className="looking-for directory">
                            <option>All Regions</option>
                        </select>

                        <div className="justify-rl txt-16">
                            <div>
                                <input className="looking-for directory" type="text" placeholder="What are you looking for ?" />
                                <div className="btn-search-h mouse-cursor justify-center">Search</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="whole-body-mW">
                <div className="txt-48 col-darkBlue align-c search-specialty">Search by Specialty</div>
                <div className="txt-24 col-heavyDark seeking-needs">
                    Seeking help for a specific reason? Click to locate an Online Provider that fits your needs!
                </div>
            </div>

            <div className="whole-body-mW">

            </div>

            {/*  Search by Provider Type */}
            <div className="whole-body-mW">
                <div className="txt-48 col-darkBlue align-c search-specialty">Search by Provider Type</div>
                <div className="txt-24 col-heavyDark seeking-needs">
                    Seeking a specific provider? Click to find your match now!
                </div>
            </div>

            <div className="whole-body-mW img-top-p">

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