import React from 'react';
import Header from "./Header";
import '../assets/css/helpCenter.css';

function HelpCenter() {
    return (
        <div className="help-article-bgColor">
            <div className="help-article-bg refix-pb">
                <Header></Header>

                <div className="header-mt">

                    <div className="txt-42 help-need">Need help?</div>
                    <div className="txt-24 right-place">You are in the right place.</div>

                    <div className="flex-grid2">
                        <div><input type="text" placeholder="I need help with ..." /></div>

                        <div className="justify-center btn-find-help txt-16 mouse-cursor">Find Help</div>
                    </div>
                </div>
            </div>

            <div className="whole-body-mW help-center-p1 align-l">
                <div className="flex-grid3 help-center-gaps">
                    <div className="help-center-p2">
                        <div>
                            <img src={require('../assets/img/help-center-icon-1.svg')} alt="" />
                        </div>
                        <div className="txt-18 col-darkBlue general-t">General</div>
                        <div className="txt-16 col-heavyDark general-t">
                            The concept of telehealth isn’t new. In fact, one the earliest conceptions of something akin to modern telehealth was described in the cover story of Radio News in April, 1924. The story...
                        </div>
                        <div className="txt-16 col-buttonAndLink general-t">23 articles</div>
                    </div>

                    <div className="help-center-p2">
                        <div>
                            <img src={require('../assets/img/help-center-icon-2.svg')} alt="" />
                        </div>
                        <div className="txt-18 col-darkBlue general-t">Clients</div>
                        <div className="txt-16 col-heavyDark general-t">
                            The concept of telehealth isn’t new. In fact, one the earliest conceptions of something akin to modern telehealth was described in the cover story of Radio News in April, 1924. The story...
                        </div>
                        <div className="txt-16 col-buttonAndLink general-t">16 articles</div>
                    </div>

                    <div className="help-center-p2">
                        <div>
                            <img src={require('../assets/img/help-center-icon-3.svg')} alt="" />
                        </div>
                        <div className="txt-18 col-darkBlue general-t">Payments</div>
                        <div className="txt-16 col-heavyDark general-t">
                            The concept of telehealth isn’t new. In fact, one the earliest conceptions of something akin to modern telehealth was described in the cover story of Radio News in April, 1924. The story...
                        </div>
                        <div className="txt-16 col-buttonAndLink general-t">10 articles</div>
                    </div>

                    <div className="help-center-p2">
                        <div>
                            <img src={require('../assets/img/help-center-icon-4.svg')} alt="" />
                        </div>
                        <div className="txt-18 col-darkBlue general-t">Providers</div>
                        <div className="txt-16 col-heavyDark general-t">
                            The concept of telehealth isn’t new. In fact, one the earliest conceptions of something akin to modern telehealth was described in the cover story of Radio News in April, 1924. The story...
                        </div>
                        <div className="txt-16 col-buttonAndLink general-t">23 articles</div>
                    </div>

                    <div className="help-center-p2">
                        <div>
                            <img src={require('../assets/img/help-center-icon-5.svg')} alt="" />
                        </div>
                        <div className="txt-18 col-darkBlue general-t">Technical</div>
                        <div className="txt-16 col-heavyDark general-t">
                            The concept of telehealth isn’t new. In fact, one the earliest conceptions of something akin to modern telehealth was described in the cover story of Radio News in April, 1924. The story...
                        </div>
                        <div className="txt-16 col-buttonAndLink general-t">16 articles</div>
                    </div>

                    <div className="help-center-p2">
                        <div>
                            <img src={require('../assets/img/help-center-icon-6.svg')} alt="" />
                        </div>
                        <div className="txt-18 col-darkBlue general-t">Marketing</div>
                        <div className="txt-16 col-heavyDark general-t">
                            The concept of telehealth isn’t new. In fact, one the earliest conceptions of something akin to modern telehealth was described in the cover story of Radio News in April, 1924. The story...
                        </div>
                        <div className="txt-16 col-buttonAndLink general-t">10 articles</div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default HelpCenter;