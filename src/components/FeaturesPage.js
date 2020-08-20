import React from 'react';
import Header from "./Header";
import '../assets/css/featuresPage.css';

function FeaturesPage() {
    return (
        <div className="features-payment-bgColor justify-center">
            <Header></Header>

            <div className="whole-body-mW justify-center">
                <div className="payment-flex-grid2 justify-center">
                    <div>
                        <img src={require('../assets/img/query-icon.svg')} alt="" />
                    </div>

                    <div className="">
                        <div className="btn-header-common txt-36 mouse-cursor">
                            The Online Therapy Services
                        </div>

                        <div className="btn-header-common-desc txt-18">
                            Platform For Everybody's Healthcare
                        </div>
                    </div>
                </div>
            </div>





        </div>
    );
}

export default FeaturesPage;