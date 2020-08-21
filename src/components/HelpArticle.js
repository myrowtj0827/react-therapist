import React from 'react';
import "../assets/css/helpCenter.css";
import Header from "./Header";

function HelpArticle() {
    return (
        <div className="help-article-bgColor">
            <div className="help-article-bg">
                <Header></Header>

                <div className="header-mt">
                    <div className="help-flex-grid2">
                        <div><input type="text" placeholder="I need help with ..." /></div>

                        <div className="justify-center btn-find-help txt-16 mouse-cursor">Find Help</div>
                    </div>
                </div>
            </div>

            <div className="whole-body-mW help-article-pt align-l">
                <div>
                    <span className="txt-16 col-buttonAndLink mouse-cursor">Help</span>
                    <img className="arrow-rl" src={require('../assets/img/right-arrow.svg')} alt="" />
                    <span className="txt-16 col-buttonAndLink mouse-cursor">General</span>
                    <img className="arrow-rl" src={require('../assets/img/right-arrow.svg')} alt="" />

                    <span className="txt-16 col-heavyDark">
                        Tips for a great therapy session!
                    </span>
                </div>

                <div className="help-article-desc txt-16 col-heavyDark">
                    <div className="txt-24 col-darkBlue">
                        Tips for a great therapy session!
                    </div>

                    <div className="help-article-p1">These are general principles that work well to remember - for both clients and providers!</div>
                    <div className="txt-16 help-article-p2">
                        <span className="col-buttonAndLink">Nataly - </span>
                        <span className="col-lightColor"> June 1, 2020</span>
                    </div>

                    <div className="help-article-p2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales risus non nisl sagittis finibus. Sed venenatis ultrices sem eget rutrum. Nullam non volutpat sem, nec vehicula lacus. Etiam vulputate arcu a viverra sagittis. Phasellus ante leo, iaculis eu ipsum et, convallis porta diam. Sed vel augue eu diam condimentum ornare a mattis elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce maximus ipsum eros, a lobortis mauris dictum quis.
                    </div>
                    <div className="help-article-p2">
                        Donec convallis consectetur ultricies. Quisque ultricies tristique tortor, ac sodales neque. Nullam maximus rutrum semper. Mauris eros lorem, interdum quis enim sit amet, pulvinar ullamcorper arcu. Nulla arcu arcu, elementum vitae ex eu, rhoncus ullamcorper justo. Quisque vitae enim nec orci rhoncus vulputate. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras ultrices mi diam, vitae tempor risus elementum eu. Mauris eu rutrum elit. Vestibulum consequat enim ac mattis vestibulum. Nam vulputate urna at consequat euismod. Sed nec hendrerit urna. Fusce a dignissim odio, facilisis tempus orci. Sed volutpat magna quis eros pellentesque commodo.
                     </div>
                    <div className="help-article-p2">
                        Suspendisse egestas scelerisque pulvinar. Sed pretium commodo orci vitae finibus. Nulla non dolor eu mauris accumsan elementum eget vitae elit. Maecenas et metus vitae ipsum consectetur tempor quis non mauris. Integer a erat nulla. Proin finibus leo cursus, fringilla diam quis, rhoncus elit. Aenean aliquam, turpis eget sollicitudin molestie, tellus diam rutrum ante, sit amet finibus ante neque non orci. Phasellus convallis dolor ac efficitur lacinia. Vivamus est ex, tincidunt a convallis eget, vestibulum ac arcu. Mauris quis vestibulum ante. Donec consequat mollis tempus. Maecenas euismod risus varius sagittis vehicula. Integer at accumsan mauris. Cras id velit mattis, consequat risus eget, sagittis orci. Sed in mi ac est ultrices sollicitudin. Sed porttitor cursus finibus.
                    </div>
                    <div className="help-article-p2">
                        Donec ac consequat eros, ut accumsan diam. Fusce congue consequat purus, at facilisis nulla pretium accumsan. Vivamus eu risus id lorem feugiat semper et eu ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi tempor purus non luctus molestie. Proin eu massa vel justo accumsan suscipit. Pellentesque dui purus, gravida et malesuada nec, vestibulum eget lacus. Proin non ultricies libero. Etiam eget cursus urna, ut pharetra ligula. Etiam porta volutpat dictum. Vivamus et tortor quis ex semper finibus vel a nunc. Suspendisse sed orci sit amet dolor sagittis commodo. Mauris porttitor tempor dolor, id feugiat lacus consequat et. Duis eu nibh ac quam lacinia tincidunt vel ac enim.
                    </div>
                    <div className="help-article-p2">
                        Etiam faucibus vulputate tincidunt. Praesent suscipit, est sit amet sollicitudin bibendum, urna enim laoreet lorem, in mollis augue nibh quis quam. Pellentesque id velit quis elit pulvinar dapibus vel in ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultricies et lacus vel dictum. Vestibulum non sagittis arcu. Integer imperdiet at est a tempor. Cras sed justo et tortor pretium tincidunt. Quisque in ex nibh. Sed pharetra erat suscipit, porta tellus quis, ornare nibh. Suspendisse quis orci eget lectus dictum gravida sit amet eu nibh. Etiam leo elit, porttitor eu massa vel, elementum venenatis quam. Mauris tincidunt risus velit, non ornare lorem hendrerit et. Aliquam vitae nibh vitae ex auctor ultrices ultricies eu quam. Duis elementum nisi quis erat blandit euismod.
                    </div>

                    <div className="col-buttonAndLink help-article-p3">Was this helpful?</div>

                    <div className="help-article-p4">
                        <img className="mouse-cursor" src={require('../assets/img/yes-icon.svg')} alt="" /> Yes
                        <img className="icon-l mouse-cursor" src={require('../assets/img/no-icon.svg')} alt="" /> No
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HelpArticle;