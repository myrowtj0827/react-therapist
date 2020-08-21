import React, {useState} from 'react';
import Header from "./Header";
import '../assets/css/directory.css';

function DirectorySearch() {

    const [menuVisible, setMenuVisible] = useState(false);
    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <div>
            <div className="view-header-bgColor justify-center">
                <Header></Header>
            </div>




            <div className="whole-body-mW directory-header-pt">
                <div className="justify-rl">
                    <div>
                        <select className="looking-for">
                            <option>Choose a category ...</option>
                        </select>
                        <select className="looking-for">
                            <option>All Regions</option>
                        </select>
                    </div>
                </div>
                <input className="looking-for" type="text" placeholder="What are you looking for?"/>

                <div className="general-flex filter-label mouse-cursor" onClick={toggleMenu}>
                    <div className="txt-16 col-paragraphBg">Filter by label</div>
                    <img className="down-up-pl" src={require('../assets/img/down-icon.svg')} alt="" />
                </div>


                {
                    menuVisible && (
                        <div className="content">
                            <div className="flex-grid4">
                                <div>
                                    <label className="container-event align-l">
                                        <a className="txt-14">Acceptance and Commitment ...</a>
                                        <input type="checkbox" checked/>
                                        <span className="checkMark"/>
                                    </label>
                                    <label className="container-event align-l">
                                        <a className="txt-14">Adolescents</a>
                                        <input type="checkbox"/>
                                        <span className="checkMark"/>
                                    </label>
                                    <label className="container-event align-l">
                                        <a className="txt-14">Assessment</a>
                                        <input type="checkbox"/>
                                        <span className="checkMark"/>
                                    </label>
                                    <label className="container-event align-l">
                                        <a className="txt-14">Chronic Illness & Disability</a>
                                        <input type="checkbox"/>
                                        <span className="checkMark"/>
                                    </label>
                                    <label className="container-event align-l">
                                        <a className="txt-14">Cognitive Behavioral Therapy</a>
                                        <input type="checkbox"/>
                                        <span className="checkMark"/>
                                    </label>
                                    <label className="container-event align-l">
                                        <a className="txt-14">Couples/Marriage</a>
                                        <input type="checkbox"/>
                                        <span className="checkMark"/>
                                    </label>
                                    <label className="container-event align-l">
                                        <a className="txt-14">Eating Disorders</a>
                                        <input type="checkbox"/>
                                        <span className="checkMark"/>
                                    </label>
                                    <label className="container-event align-l">
                                        <a className="txt-14">Forensic Psychology</a>
                                        <input type="checkbox"/>
                                        <span className="checkMark"/>
                                    </label>
                                    <label className="container-event align-l">
                                        <a className="txt-14">Indigenous & First Nations & Na...</a>
                                        <input type="checkbox"/>
                                        <span className="checkMark"/>
                                    </label>
                                    <label className="container-event align-l">
                                        <a className="txt-14">Life Transitions</a>
                                        <input type="checkbox"/>
                                        <span className="checkMark"/>
                                    </label>
                                    <label className="container-event align-l">
                                        <a className="txt-14">Mindfulness</a>
                                        <input type="checkbox"/>
                                        <span className="checkMark"/>
                                    </label>
                                    <label className="container-event align-l">
                                        <a className="txt-14">Obsessive Compulsive Disorder...</a>
                                        <input type="checkbox"/>
                                        <span className="checkMark"/>
                                    </label>
                                    <label className="container-event align-l">
                                        <a className="txt-14">Post-Traumatic Stress Disorder</a>
                                        <input type="checkbox"/>
                                        <span className="checkMark"/>
                                    </label>
                                    <label className="container-event align-l">
                                        <a className="txt-14">Self-Esteem</a>
                                        <input type="checkbox"/>
                                        <span className="checkMark"/>
                                    </label>
                                    <label className="container-event align-l">
                                        <a className="txt-14">Spirituality/Faith</a>
                                        <input type="checkbox"/>
                                        <span className="checkMark"/>
                                    </label>
                                    <label className="container-event align-l">
                                        <a className="txt-14">Wellness of Musculoskeletal Sys...</a>
                                        <input type="checkbox"/>
                                        <span className="checkMark"/>
                                    </label>
                                </div>


                                <div>
                                    <label className="container-event align-l">
                                        <a className="txt-14">Acute and Chronic Medical Cond...</a>
                                        <input type="checkbox"/>
                                        <span className="checkMark"/>
                                    </label>
                                    <label className="container-event align-l">
                                        <a className="txt-14">African American</a>
                                        <input type="checkbox"/>
                                        <span className="checkMark"/>
                                    </label>
                                    <label className="container-event align-l">
                                        <a className="txt-14">Autism Spectrum Disorder</a>
                                        <input type="checkbox"/>
                                        <span className="checkMark"/>
                                    </label>
                                    <label className="container-event align-l">
                                        <a className="txt-14">Clinical Hypnosis</a>
                                        <input type="checkbox"/>
                                        <span className="checkMark"/>
                                    </label>
                                    <label className="container-event align-l">
                                        <a className="txt-14">College Students</a>
                                        <input type="checkbox"/>
                                        <span className="checkMark"/>
                                    </label>
                                    <label className="container-event align-l">
                                        <a className="txt-14">Depression</a>
                                        <input type="checkbox"/>
                                        <span className="checkMark"/>
                                    </label>
                                    <label className="container-event align-l">
                                        <a className="txt-14">EMDR</a>
                                        <input type="checkbox"/>
                                        <span className="checkMark"/>
                                    </label>
                                    <label className="container-event align-l">
                                        <a className="txt-14">Gender and sexual diversity</a>
                                        <input type="checkbox"/>
                                        <span className="checkMark"/>
                                    </label>
                                    <label className="container-event align-l">
                                        <a className="txt-14">Infertility</a>
                                        <input type="checkbox"/>
                                        <span className="checkMark"/>
                                    </label>
                                    <label className="container-event align-l">
                                        <a className="txt-14">Men's Issues & Health</a>
                                        <input type="checkbox"/>
                                        <span className="checkMark"/>
                                    </label>
                                    <label className="container-event align-l">
                                        <a className="txt-14">Motivation & Goal Achievement</a>
                                        <input type="checkbox"/>
                                        <span className="checkMark"/>
                                    </label>
                                    <label className="container-event align-l">
                                        <a className="txt-14">Parenting</a>
                                        <input type="checkbox"/>
                                        <span className="checkMark"/>
                                    </label>
                                    <label className="container-event align-l">
                                        <a className="txt-14">Postpartum Depression</a>
                                        <input type="checkbox"/>
                                        <span className="checkMark"/>
                                    </label>
                                    <label className="container-event align-l">
                                        <a className="txt-14">Sexual Abuse</a>
                                        <input type="checkbox"/>
                                        <span className="checkMark"/>
                                    </label>
                                    <label className="container-event align-l">
                                        <a className="txt-14">Sport Performance and Biofeed...</a>
                                        <input type="checkbox"/>
                                        <span className="checkMark"/>
                                    </label>
                                    <label className="container-event align-l">
                                        <a className="txt-14">Women's Issues & Health</a>
                                        <input type="checkbox"/>
                                        <span className="checkMark"/>
                                    </label>

                                </div>


                                <div>
                                    <label className="container-event align-l">
                                        <a className="txt-14">Addictions/Recovery</a>
                                        <input type="checkbox"/>
                                        <span className="checkMark"/>
                                    </label>
                                    <label className="container-event align-l">
                                        <a className="txt-14">Anger Management</a>
                                        <input type="checkbox"/>
                                        <span className="checkMark"/>
                                    </label>
                                    <label className="container-event align-l">
                                        <a className="txt-14">Bipolar Disorder</a>
                                        <input type="checkbox"/>
                                        <span className="checkMark"/>
                                    </label>
                                    <label className="container-event align-l">
                                        <a className="txt-14">Clinical Supervision</a>
                                        <input type="checkbox"/>
                                        <span className="checkMark"/>
                                    </label>
                                    <label className="container-event align-l">
                                        <a className="txt-14">Compassion Fatigue & Burnout</a>
                                        <input type="checkbox"/>
                                        <span className="checkMark"/>
                                    </label>
                                    <label className="container-event align-l">
                                        <a className="txt-14">Diabetes</a>
                                        <input type="checkbox"/>
                                        <span className="checkMark"/>
                                    </label>
                                    <label className="container-event align-l">
                                        <a className="txt-14">Erectile Dysfunction</a>
                                        <input type="checkbox"/>
                                        <span className="checkMark"/>
                                    </label>
                                    <label className="container-event align-l">
                                        <a className="txt-14">Grief</a>
                                        <input type="checkbox"/>
                                        <span className="checkMark"/>
                                    </label>
                                    <label className="container-event align-l">
                                        <a className="txt-14">Intimacy & Sexual Health</a>
                                        <input type="checkbox"/>
                                        <span className="checkMark"/>
                                    </label>
                                    <label className="container-event align-l">
                                        <a className="txt-14">Metabolic Syndrome</a>
                                        <input type="checkbox"/>
                                        <span className="checkMark"/>
                                    </label>
                                    <label className="container-event align-l">
                                        <a className="txt-14">Narcissism</a>
                                        <input type="checkbox"/>
                                        <span className="checkMark"/>
                                    </label>
                                    <label className="container-event align-l">
                                        <a className="txt-14">Pastors</a>
                                        <input type="checkbox"/>
                                        <span className="checkMark"/>
                                    </label>
                                    <label className="container-event align-l">
                                        <a className="txt-14">Relationships</a>
                                        <input type="checkbox"/>
                                        <span className="checkMark"/>
                                    </label>
                                    <label className="container-event align-l">
                                        <a className="txt-14">Sexual Addiction</a>
                                        <input type="checkbox"/>
                                        <span className="checkMark"/>
                                    </label>
                                    <label className="container-event align-l">
                                        <a className="txt-14">Stress</a>
                                        <input type="checkbox"/>
                                        <span className="checkMark"/>
                                    </label>
                                    <label className="container-event align-l">
                                        <a className="txt-14">Work Issues/Performance</a>
                                        <input type="checkbox"/>
                                        <span className="checkMark"/>
                                    </label>
                                </div>


                                <div>
                                    <label className="container-event align-l">
                                        <a className="txt-14">ADHD/ADD</a>
                                        <input type="checkbox"/>
                                        <span className="checkMark"/>
                                    </label>
                                    <label className="container-event align-l">
                                        <a className="txt-14">Anxiety</a>
                                        <input type="checkbox"/>
                                        <span className="checkMark"/>
                                    </label>
                                    <label className="container-event align-l">
                                        <a className="txt-14">Borderline Personality Disorder</a>
                                        <input type="checkbox"/>
                                        <span className="checkMark"/>
                                    </label>
                                    <label className="container-event align-l">
                                        <a className="txt-14">Codependecy</a>
                                        <input type="checkbox"/>
                                        <span className="checkMark"/>
                                    </label>
                                    <label className="container-event align-l">
                                        <a className="txt-14">Coping Skills</a>
                                        <input type="checkbox"/>
                                        <span className="checkMark"/>
                                    </label>
                                    <label className="container-event align-l">
                                        <a className="txt-14">Divorce</a>
                                        <input type="checkbox"/>
                                        <span className="checkMark"/>
                                    </label>
                                    <label className="container-event align-l">
                                        <a className="txt-14">Family</a>
                                        <input type="checkbox"/>
                                        <span className="checkMark"/>
                                    </label>
                                    <label className="container-event align-l">
                                        <a className="txt-14">Immigrant and Refugee Mental ...</a>
                                        <input type="checkbox"/>
                                        <span className="checkMark"/>
                                    </label>
                                    <label className="container-event align-l">
                                        <a className="txt-14">LGBTQIA</a>
                                        <input type="checkbox"/>
                                        <span className="checkMark"/>
                                    </label>
                                    <label className="container-event align-l">
                                        <a className="txt-14">Military Related Issues</a>
                                        <input type="checkbox"/>
                                        <span className="checkMark"/>
                                    </label>
                                    <label className="container-event align-l">
                                        <a className="txt-14">Obesity</a>
                                        <input type="checkbox"/>
                                        <span className="checkMark"/>
                                    </label>
                                    <label className="container-event align-l">
                                        <a className="txt-14">Phobias</a>
                                        <input type="checkbox"/>
                                        <span className="checkMark"/>
                                    </label>
                                    <label className="container-event align-l">
                                        <a className="txt-14">Schizophrenia</a>
                                        <input type="checkbox"/>
                                        <span className="checkMark"/>
                                    </label>
                                    <label className="container-event align-l">
                                        <a className="txt-14">Social Justice/Search for Meaning</a>
                                        <input type="checkbox"/>
                                        <span className="checkMark"/>
                                    </label>
                                    <label className="container-event align-l">
                                        <a className="txt-14">Trauma/Abuse</a>
                                        <input type="checkbox"/>
                                        <span className="checkMark"/>
                                    </label>
                                </div>
                            </div>
                        </div>
                    )
                }

                <div className="btn-bttonAndLink update-btn-pt mouse-cursor">Update</div>

                <div className="justify-rl">
                    <div className="justify-center">
                        <div className="txt-14 col-darkBlue">200 providers found</div>
                        <select className="looking-for sort-by-width">
                            <option>Sort by</option>
                            <option>Price</option>
                        </select>
                    </div>
                </div>

                <div className="flex-grid3 directory-grid-gaps">
                    <div>
                        <div>
                            <img className="auto-matching" src={require('../assets/img/directory-img1.svg')} alt="" />
                        </div>

                        <div className="michael-pl align-l">
                            <div className="txt-24 col-darkBlue">Michael Therapy Services LLC</div>

                            <div className="txt-16 col-heavyDark new-york-ptb">New York, NY</div>

                            <div className="general-flex txt-16 col-buttonAndLink">
                                <img className="ring-pr" src={require('../assets/img/ring-icon.svg')} alt="" /> 23-456-7890
                            </div>
                        </div>
                    </div>

                    <div>
                        <div>
                            <img className="auto-matching" src={require('../assets/img/directory-img2.svg')} alt="" />
                        </div>

                        <div className="michael-pl align-l">
                            <div className="txt-24 col-darkBlue">Michael Johnson</div>

                            <div className="txt-16 col-heavyDark new-york-ptb">New York, NY</div>

                            <div className="general-flex txt-16 col-buttonAndLink">
                                <img className="ring-pr" src={require('../assets/img/ring-icon.svg')} alt="" /> 23-456-7890
                            </div>
                        </div>
                    </div>

                    <div>
                        <div>
                            <img className="auto-matching" src={require('../assets/img/directory-img3.svg')} alt="" />
                        </div>

                        <div className="michael-pl align-l">
                            <div className="txt-24 col-darkBlue">Michael Johnson</div>

                            <div className="txt-16 col-heavyDark new-york-ptb">New York, NY</div>

                            <div className="general-flex txt-16 col-buttonAndLink">
                                <img className="ring-pr" src={require('../assets/img/ring-icon.svg')} alt="" /> 23-456-7890
                            </div>
                        </div>
                    </div>


                    <div>
                        <div>
                            <img className="auto-matching" src={require('../assets/img/directory-img1.svg')} alt="" />
                        </div>

                        <div className="michael-pl align-l">
                            <div className="txt-24 col-darkBlue">Michael Therapy Services LLC</div>

                            <div className="txt-16 col-heavyDark new-york-ptb">New York, NY</div>

                            <div className="general-flex txt-16 col-buttonAndLink">
                                <img className="ring-pr" src={require('../assets/img/ring-icon.svg')} alt="" /> 23-456-7890
                            </div>
                        </div>
                    </div>

                    <div>
                        <div>
                            <img className="auto-matching" src={require('../assets/img/directory-img2.svg')} alt="" />
                        </div>

                        <div className="michael-pl align-l">
                            <div className="txt-24 col-darkBlue">Michael Johnson</div>

                            <div className="txt-16 col-heavyDark new-york-ptb">New York, NY</div>

                            <div className="general-flex txt-16 col-buttonAndLink">
                                <img className="ring-pr" src={require('../assets/img/ring-icon.svg')} alt="" /> 23-456-7890
                            </div>
                        </div>
                    </div>

                    <div>
                        <div>
                            <img className="auto-matching" src={require('../assets/img/directory-img3.svg')} alt="" />
                        </div>

                        <div className="michael-pl align-l">
                            <div className="txt-24 col-darkBlue">Michael Johnson</div>

                            <div className="txt-16 col-heavyDark new-york-ptb">New York, NY</div>

                            <div className="general-flex txt-16 col-buttonAndLink">
                                <img className="ring-pr" src={require('../assets/img/ring-icon.svg')} alt="" /> 23-456-7890
                            </div>
                        </div>
                    </div>


                    <div>
                        <div>
                            <img className="auto-matching" src={require('../assets/img/directory-img1.svg')} alt="" />
                        </div>

                        <div className="michael-pl align-l">
                            <div className="txt-24 col-darkBlue">Michael Therapy Services LLC</div>

                            <div className="txt-16 col-heavyDark new-york-ptb">New York, NY</div>

                            <div className="general-flex txt-16 col-buttonAndLink">
                                <img className="ring-pr" src={require('../assets/img/ring-icon.svg')} alt="" /> 23-456-7890
                            </div>
                        </div>
                    </div>

                    <div>
                        <div>
                            <img className="auto-matching" src={require('../assets/img/directory-img2.svg')} alt="" />
                        </div>

                        <div className="michael-pl align-l">
                            <div className="txt-24 col-darkBlue">Michael Johnson</div>

                            <div className="txt-16 col-heavyDark new-york-ptb">New York, NY</div>

                            <div className="general-flex txt-16 col-buttonAndLink">
                                <img className="ring-pr" src={require('../assets/img/ring-icon.svg')} alt="" /> 23-456-7890
                            </div>
                        </div>
                    </div>

                    <div>
                        <div>
                            <img className="auto-matching" src={require('../assets/img/directory-img3.svg')} alt="" />
                        </div>

                        <div className="michael-pl align-l">
                            <div className="txt-24 col-darkBlue">Michael Johnson</div>

                            <div className="txt-16 col-heavyDark new-york-ptb">New York, NY</div>

                            <div className="general-flex txt-16 col-buttonAndLink">
                                <img className="ring-pr" src={require('../assets/img/ring-icon.svg')} alt="" /> 23-456-7890
                            </div>
                        </div>
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

export default DirectorySearch;
