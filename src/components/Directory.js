import React from 'react';
import Header from "./Header";
import '../assets/css/directory.css';

function Directory() {
    const imgLinkFirst = [
        {link: require('../assets/img/search-img0-1.svg'), desc: 'Acceptance and Commitment Therapy'},
        {link: require('../assets/img/search-img0-2.svg'), desc: 'Acute and Chronic Medical Conditions'},
        {link: require('../assets/img/search-img1-1.svg'), desc: 'Addictions/Recovery'},
        {link: require('../assets/img/search-img1-2.svg'), desc: 'ADHD/ADD'},
        {link: require('../assets/img/search-img1-3.svg'), desc: 'Adolescents'},
        {link: require('../assets/img/search-img2-1.svg'), desc: 'African American'},
        {link: require('../assets/img/search-img2-2.svg'), desc: 'Anger Management'},
        {link: require('../assets/img/search-img2-3.svg'), desc: 'Anxiety'},
        {link: require('../assets/img/search-img3-1.svg'), desc: 'Assessment'},
        {link: require('../assets/img/search-img3-2.svg'), desc: 'Autism Spectrum Disorder'},
        {link: require('../assets/img/search-img3-3.svg'), desc: 'Bipolar Disorder'},
        {link: require('../assets/img/search-img4-1.svg'), desc: 'Borderline Personality Disorder'},
        {link: require('../assets/img/search-img4-2.svg'), desc: 'Chronic Illness & Disability'},
        {link: require('../assets/img/search-img4-3.svg'), desc: 'Clinical Hypnosis'},
        {link: require('../assets/img/search-img5-1.svg'), desc: 'Clinical Supervision'},
        {link: require('../assets/img/search-img5-2.svg'), desc: 'Codependecy'},
        {link: require('../assets/img/search-img5-3.svg'), desc: 'Cognitive Behavioral Therapy'},
        {link: require('../assets/img/search-img6-1.svg'), desc: 'College Students'},
        {link: require('../assets/img/search-img6-2.svg'), desc: 'Compassion Fatigue & Burnout'},
        {link: require('../assets/img/search-img6-3.svg'), desc: 'Coping Skills'},
        {link: require('../assets/img/search-img7-1.svg'), desc: 'Couples/Marriage'},
        {link: require('../assets/img/search-img7-2.svg'), desc: 'Depression'},
        {link: require('../assets/img/search-img7-3.svg'), desc: 'Diabetes'},
        {link: require('../assets/img/search-img8-1.svg'), desc: 'Divorce'},
        {link: require('../assets/img/search-img8-2.svg'), desc: 'Eating Disorders'},
        {link: require('../assets/img/search-img8-3.svg'), desc: 'EMDR'},
        {link: require('../assets/img/search-img9-1.svg'), desc: 'Erectile Dysfunction'},
        {link: require('../assets/img/search-img9-2.svg'), desc: 'Family'},
        {link: require('../assets/img/search-img9-3.svg'), desc: 'Forensic Psychology'},
        {link: require('../assets/img/search-img10-1.svg'), desc: 'Gender and Sexual Diversity'},
        {link: require('../assets/img/search-img10-2.svg'), desc: 'Grief'},
        {link: require('../assets/img/search-img10-3.svg'), desc: 'Immigrant and Refugee Mental Health'},
        {link: require('../assets/img/search-img11-1.svg'), desc: 'Indigenous & First Nations & Native Americans'},
        {link: require('../assets/img/search-img11-2.svg'), desc: 'Infertility'},
        {link: require('../assets/img/search-img11-3.svg'), desc: 'Intimacy & Sexual Health'},
        {link: require('../assets/img/search-img12-1.svg'), desc: 'LGBTQIA'},
        {link: require('../assets/img/search-img12-2.svg'), desc: 'Life Transitions'},
        {link: require('../assets/img/search-img12-3.svg'), desc: 'Men’s Issues & Health'},
        {link: require('../assets/img/search-img13-1.svg'), desc: 'Metabolic Syndrome'},
        {link: require('../assets/img/search-img13-2.svg'), desc: 'Military Related Issues'},
        {link: require('../assets/img/search-img13-3.svg'), desc: 'Mindfulness'},
        {link: require('../assets/img/search-img14-1.svg'), desc: 'Motivation & Goal Achievement'},
        {link: require('../assets/img/search-img14-2.svg'), desc: 'Narcissism'},
        {link: require('../assets/img/search-img14-3.svg'), desc: 'Obesity'},
        {link: require('../assets/img/search-img15-1.svg'), desc: 'Obsessive Compulsive Disorder'},
        {link: require('../assets/img/search-img15-2.svg'), desc: 'Parenting'},
        {link: require('../assets/img/search-img15-3.svg'), desc: 'Pastors'},
        {link: require('../assets/img/search-img16-1.svg'), desc: 'Phobias'},
        {link: require('../assets/img/search-img16-2.svg'), desc: 'Post-Traumatic Stress Disorder'},
        {link: require('../assets/img/search-img16-3.svg'), desc: 'Postpartum Depression'},
        {link: require('../assets/img/search-img17-1.svg'), desc: 'Relationships'},
        {link: require('../assets/img/search-img17-2.svg'), desc: 'Schizophrenia'},
        {link: require('../assets/img/search-img17-3.svg'), desc: 'Self-Esteem'},
        {link: require('../assets/img/search-img18-1.svg'), desc: 'Sexual Abuse'},
        {link: require('../assets/img/search-img18-2.svg'), desc: 'Sexual Addiction'},
        {link: require('../assets/img/search-img18-3.svg'), desc: 'Social Justice/Search for Meaning'},
        {link: require('../assets/img/search-img19-1.svg'), desc: 'Spirituality/Faith'},
        {link: require('../assets/img/search-img19-2.svg'), desc: 'Sport Performance and Biofeedback'},
        {link: require('../assets/img/search-img19-3.svg'), desc: 'Stress'},
        {link: require('../assets/img/search-img20-1.svg'), desc: 'Trauma/Abuse'},
        {link: require('../assets/img/search-img20-2.svg'), desc: 'Wellness of Musculoskeletal System'},
        {link: require('../assets/img/search-img20-3.svg'), desc: 'Women\'s Issues & Health'},
        {link: require('../assets/img/search-img21.svg'), desc: 'Work Issues/Performance'},
        ];

    const imgLinkSecond = [
        {link: require('../assets/img/search-img30-1.svg'), desc: 'Addiction Specialist'},
        {link: require('../assets/img/search-img30-2.svg'), desc: 'Art Therapist'},
        {link: require('../assets/img/search-img31-1.svg'), desc: 'Board Certified Pastoral Counselor'},
        {link: require('../assets/img/search-img31-2.svg'), desc: 'Certified Clinical Anxiety Treatment Professional'},
        {link: require('../assets/img/search-img31-3.svg'), desc: 'Certified Sex Therapist'},
        {link: require('../assets/img/search-img32-1.svg'), desc: 'Certified Trauma Specialist'},
        {link: require('../assets/img/search-img32-2.svg'), desc: 'Clinical Hypnotherapist'},
        {link: require('../assets/img/search-img32-3.svg'), desc: 'Coach'},
        {link: require('../assets/img/search-img33-1.svg'), desc: 'Consultant'},
        {link: require('../assets/img/search-img33-2.svg'), desc: 'Counselor'},
        {link: require('../assets/img/search-img33-3.svg'), desc: 'Dietitian'},
        {link: require('../assets/img/search-img34-1.svg'), desc: 'Distance Credentialed Counselor'},
        {link: require('../assets/img/search-img34-2.svg'), desc: 'Marriage & Family Therapist'},
        {link: require('../assets/img/search-img34-3.svg'), desc: 'Maternal Mental Health Specialist'},
        {link: require('../assets/img/search-img35-1.svg'), desc: 'Mental Health Specialist'},
        {link: require('../assets/img/search-img35-2.svg'), desc: 'Mental Health Therapist'},
        {link: require('../assets/img/search-img35-3.svg'), desc: 'Nurse Practitioner'},
        {link: require('../assets/img/search-img36-1.svg'), desc: 'Occupational Therapist'},
        {link: require('../assets/img/search-img36-2.svg'), desc: 'Physical Therapist'},
        {link: require('../assets/img/search-img36-3.svg'), desc:  'Play Therapist'}
    ];

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
                <div className="flex-grid3 search-grid3-gaps">
                    {
                        imgLinkFirst && imgLinkFirst.map((item, key) => {
                            if (key === 0) {
                                return (
                                    <div className="therapy-span2 acute-chronic">
                                        <img className="auto-matching" src={item.link} alt="" />
                                        <div className="search-img-txt txt-24">{item.desc}</div>
                                    </div>
                                )
                            } else if (key === 62) {
                                return (
                                    <div className="therapy-span3 acute-chronic">
                                        <img className="auto-matching span3-min" src={item.link} alt="" />
                                        <div className="search-img-txt txt-24">{item.desc}</div>
                                    </div>
                                )
                            } else {
                                return (
                                    <div className="acute-chronic">
                                        <img className="auto-matching" src={item.link} alt="" />
                                        <div className="search-img-txt txt-24">{item.desc}</div>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </div>

            {/*  Search by Provider Type */}
            <div className="whole-body-mW">
                <div className="txt-48 col-darkBlue align-c search-specialty">Search by Provider Type</div>
                <div className="txt-24 col-heavyDark seeking-needs">
                    Seeking a specific provider? Click to find your match now!
                </div>
            </div>

            <div className="whole-body-mW img-top-p">
                <div className="flex-grid3 search-grid3-gaps">
                    {
                        imgLinkSecond && imgLinkSecond.map((item, key) => {
                            if (key === 0) {
                                return (
                                    <div className="therapy-span2 acute-chronic">
                                        <img className="auto-matching" src={item.link} alt="" />
                                        <div className="search-img-txt txt-24">{item.desc}</div>
                                    </div>
                                )
                            } else {
                                return (
                                    <div className="acute-chronic">
                                        <img className="auto-matching" src={item.link} alt="" />
                                        <div className="search-img-txt txt-24">{item.desc}</div>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </div>

            <div className="sign-up-for justify-center">
                <div className="whole-body-mW justify-rl">
                    <div className="btn-txt">
                        <div className="txt-24 justify-center">PLease look for your therapy service provider.</div>
                        <div className="btn-try-our btn-request-b txt-24 mouse-cursor">FIND A PROVIDER</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Directory;