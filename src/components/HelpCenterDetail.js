import React from 'react';
import Header from "./Header";
import '../assets/css/helpCenter.css';

function HelpCenterDetails() {
    return (
        <div className="help-article-bgColor">
            <div className="help-article-bg">
                <Header></Header>

                <div className="header-mt">
                    <div className="flex-grid2">
                        <div><input type="text" placeholder="I need help with ..." /></div>

                        <div className="justify-center btn-find-help txt-16 mouse-cursor">Find Help</div>
                    </div>
                </div>
            </div>

            <div className="whole-body-mW help-article-pt align-l">
                <div>
                    <span className="txt-16 col-buttonAndLink mouse-cursor">Help</span>
                    <img className="arrow-rl" src={require('../assets/img/right-arrow.svg')} alt="" />
                    <span className="txt-16 col-heavyDark mouse-cursor">General</span>
                </div>

                <div className="txt-32 col-darkBlue general-articles general-pt">General</div>

                <div className="general-flex">
                    <img src={require('../assets/img/warning-icon.svg')} alt="" />
                    <span className="help-article-p6">
                        <div className="txt-16 col-heavyDark">
                            The concept of telehealth isn’t new. In fact, one the earliest conceptions of something akin to modern telehealth was described in the cover story of Radio News in April, 1924. The story...
                        </div>
                    </span>
                </div>

                <div className="txt-16 col-buttonAndLink general-articles mouse-cursor">23 articles</div>

                <div className="help-article-desc txt-16 col-heavyDark help-article-p5">
                    <div className="txt-24 col-darkBlue">
                        Tips for a great therapy session!
                    </div>

                    <div className="help-article-p1">These are general principles that work well to remember - for both clients and providers!</div>
                    <div className="txt-16 help-article-p2">
                        <span className="col-buttonAndLink">Nataly - </span>
                        <span className="col-lightColor"> June 1, 2020</span>
                    </div>
                </div>

                <div className="help-article-desc txt-16 col-heavyDark help-article-p5">
                    <div className="txt-24 col-darkBlue">
                        Tips for a great therapy session!
                    </div>

                    <div className="help-article-p1">These are general principles that work well to remember - for both clients and providers!</div>
                    <div className="txt-16 help-article-p2">
                        <span className="col-buttonAndLink">Nataly - </span>
                        <span className="col-lightColor"> June 1, 2020</span>
                    </div>
                </div>

                <div className="help-article-desc txt-16 col-heavyDark help-article-p5">
                    <div className="txt-24 col-darkBlue">
                        Tips for a great therapy session!
                    </div>

                    <div className="help-article-p1">These are general principles that work well to remember - for both clients and providers!</div>
                    <div className="txt-16 help-article-p2">
                        <span className="col-buttonAndLink">Nataly - </span>
                        <span className="col-lightColor"> June 1, 2020</span>
                    </div>
                </div>

                <div className="help-center-align">
                    <div className="product-btn justify-center">
                        <svg width="11" height="15" viewBox="0 0 11 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.60496 14.6383C9.42024 14.6383 9.23359 14.5779 9.07773 14.457L0.923018 8.02084C0.724826 7.86414 0.609375 7.62814 0.609375 7.37704C0.609375 7.12782 0.724826 6.88993 0.923018 6.73512L9.0431 0.332906C9.40485 0.047818 9.934 0.104458 10.2246 0.459402C10.5151 0.814346 10.4574 1.33355 10.0956 1.61863L2.79141 7.37704L10.1322 13.1713C10.4939 13.4564 10.5517 13.9756 10.2611 14.3305C10.0937 14.5326 9.85126 14.6383 9.60496 14.6383Z" fill="black" fill-opacity="0.65"/>
                        </svg>
                    </div>

                    <div className="product-btn justify-center col-darkBlue">1</div>
                    <div className="product-btn justify-center col-darkBlue">2</div>
                    <div className="product-btn justify-center col-darkBlue">3</div>
                    <div className="product-btn justify-center col-darkBlue">4</div>
                    <div className="product-btn justify-center col-darkBlue">5</div>
                    <div className="product-btn justify-center col-darkBlue">6</div>
                    <div className="product-btn justify-center col-darkBlue">7</div>
                    <div className="product-btn justify-center col-darkBlue">8</div>
                    <div className="product-btn justify-center col-darkBlue">9</div>

                    <div className="product-btn justify-center">
                        <svg width="11" height="15" viewBox="0 0 11 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.39506 14.6383C1.57978 14.6383 1.76643 14.5779 1.92229 14.457L10.077 8.02084C10.2752 7.86414 10.3906 7.62814 10.3906 7.37704C10.3906 7.12782 10.2752 6.88993 10.077 6.73512L1.95692 0.332906C1.59518 0.047818 1.06603 0.104458 0.775474 0.459402C0.484922 0.814346 0.542647 1.33355 0.904394 1.61863L8.2086 7.37704L0.867834 13.1713C0.506087 13.4564 0.448362 13.9756 0.738914 14.3305C0.906319 14.5326 1.14877 14.6383 1.39506 14.6383Z" fill="black" fill-opacity="0.65"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HelpCenterDetails;