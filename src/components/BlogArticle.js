import React from 'react';
import Header from "./Header";
import '../assets/css/blogArticle.css';

function BlogArticle() {
    return (
        <div>
            <div className="blog-article-bg">
                <Header></Header>
            </div>

            <div className="whole-body-mW online-therapy">
                <div className="blog-flex-grid2 align-l">
                    <div>
                        <div className="txt-32 txt-bold col-heavyDark align-l">
                            The Essential Guide Online Therapy
                        </div>

                        <div className="txt-16 col-lightColor general-nataly">
                            June 1, 2020 in
                            <span className="col-buttonAndLink date-rl">General</span>
                            by
                            <span className="col-buttonAndLink date-rl">Nataly</span>
                        </div>

                        <div className="blog-bg"></div>

                        <div className="txt-lorem-pt txt-16 col-heavyDark">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales risus non nisl sagittis finibus. Sed venenatis ultrices sem eget rutrum. Nullam non volutpat sem, nec vehicula lacus. Etiam vulputate arcu a viverra sagittis. Phasellus ante leo, iaculis eu ipsum et, convallis porta diam. Sed vel augue eu diam condimentum ornare a mattis elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce maximus ipsum eros, a lobortis mauris dictum quis.
                        </div>
                        <div className="txt-lorem-pt txt-16 col-heavyDark">
                            Donec convallis consectetur ultricies. Quisque ultricies tristique tortor, ac sodales neque. Nullam maximus rutrum semper. Mauris eros lorem, interdum quis enim sit amet, pulvinar ullamcorper arcu. Nulla arcu arcu, elementum vitae ex eu, rhoncus ullamcorper justo. Quisque vitae enim nec orci rhoncus vulputate. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras ultrices mi diam, vitae tempor risus elementum eu. Mauris eu rutrum elit. Vestibulum consequat enim ac mattis vestibulum. Nam vulputate urna at consequat euismod. Sed nec hendrerit urna. Fusce a dignissim odio, facilisis tempus orci. Sed volutpat magna quis eros pellentesque commodo.
                        </div>
                        <div className="txt-lorem-pt txt-16 col-heavyDark">
                            Suspendisse egestas scelerisque pulvinar. Sed pretium commodo orci vitae finibus. Nulla non dolor eu mauris accumsan elementum eget vitae elit. Maecenas et metus vitae ipsum consectetur tempor quis non mauris. Integer a erat nulla. Proin finibus leo cursus, fringilla diam quis, rhoncus elit. Aenean aliquam, turpis eget sollicitudin molestie, tellus diam rutrum ante, sit amet finibus ante neque non orci. Phasellus convallis dolor ac efficitur lacinia. Vivamus est ex, tincidunt a convallis eget, vestibulum ac arcu. Mauris quis vestibulum ante. Donec consequat mollis tempus. Maecenas euismod risus varius sagittis vehicula. Integer at accumsan mauris. Cras id velit mattis, consequat risus eget, sagittis orci. Sed in mi ac est ultrices sollicitudin. Sed porttitor cursus finibus.
                        </div>
                        <div className="txt-lorem-pt txt-16 col-heavyDark">
                            Donec ac consequat eros, ut accumsan diam. Fusce congue consequat purus, at facilisis nulla pretium accumsan. Vivamus eu risus id lorem feugiat semper et eu ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi tempor purus non luctus molestie. Proin eu massa vel justo accumsan suscipit. Pellentesque dui purus, gravida et malesuada nec, vestibulum eget lacus. Proin non ultricies libero. Etiam eget cursus urna, ut pharetra ligula. Etiam porta volutpat dictum. Vivamus et tortor quis ex semper finibus vel a nunc. Suspendisse sed orci sit amet dolor sagittis commodo. Mauris porttitor tempor dolor, id feugiat lacus consequat et. Duis eu nibh ac quam lacinia tincidunt vel ac enim.
                        </div>
                        <div className="txt-lorem-pt txt-16 col-heavyDark">
                            Etiam faucibus vulputate tincidunt. Praesent suscipit, est sit amet sollicitudin bibendum, urna enim laoreet lorem, in mollis augue nibh quis quam. Pellentesque id velit quis elit pulvinar dapibus vel in ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultricies et lacus vel dictum. Vestibulum non sagittis arcu. Integer imperdiet at est a tempor. Cras sed justo et tortor pretium tincidunt. Quisque in ex nibh. Sed pharetra erat suscipit, porta tellus quis, ornare nibh. Suspendisse quis orci eget lectus dictum gravida sit amet eu nibh. Etiam leo elit, porttitor eu massa vel, elementum venenatis quam. Mauris tincidunt risus velit, non ornare lorem hendrerit et. Aliquam vitae nibh vitae ex auctor ultrices ultricies eu quam. Duis elementum nisi quis erat blandit euismod.
                        </div>
                    </div>

                    <div>
                        <div className="txt-24 col-heavyDark popular-posts">
                            Popular Posts
                        </div>
                        <hr />
                        <div className="txt-16 col-buttonAndLink">The Essential Guide to Online Therapy</div>
                        <hr />
                        <div className="txt-16 col-buttonAndLink">The Essential Guide to Online Therapy</div>
                        <hr />
                        <div className="txt-16 col-buttonAndLink">The Essential Guide to Online Therapy</div>
                        <hr />
                        <div className="txt-16 col-buttonAndLink">The Essential Guide to Online Therapy</div>
                        <hr />
                        <div className="txt-16 col-buttonAndLink">The Essential Guide to Online Therapy</div>
                        <hr />
                        <div className="txt-16 col-buttonAndLink">The Essential Guide to Online Therapy</div>
                        <hr />
                        <div className="txt-16 col-buttonAndLink">The Essential Guide to Online Therapy</div>
                        <hr />
                        <div className="txt-16 col-buttonAndLink">The Essential Guide to Online Therapy</div>
                        <hr />
                        <div className="txt-16 col-buttonAndLink">The Essential Guide to Online Therapy</div>
                        <hr />
                        <div className="txt-16 col-buttonAndLink">The Essential Guide to Online Therapy</div>
                        <hr />
                    </div>
                </div>

                <div className="blog-social-share align-l">
                    <div className="blog-article-p1 txt-24 col-buttonAndLink">Share This Article</div>

                    <div className="">
                        <img className="social-icon mouse-cursor" src={require('../assets/img/blog-1.svg')} alt="" />
                        <img className="social-icon mouse-cursor" src={require('../assets/img/blog-2.svg')} alt="" />
                        <img className="social-icon mouse-cursor" src={require('../assets/img/blog-3.svg')} alt="" />
                    </div>
                </div>

                <div className="link-arrow justify-rl">
                    <div>
                        <div className="txt-20 col-heavyDark">
                            <img className="pair-arrow-r mouse-cursor" src={require('../assets/img/pair-arrow-left.svg')} alt="" />
                            <span className="pair-arrow-txt">The Essential Guide to Online Therapy</span>
                        </div>

                        <div className="txt-20 col-heavyDark">
                            <span className="pair-arrow-txt">The Essential Guide to Online Therapy</span>
                            <img className="pair-arrow-l mouse-cursor" src={require('../assets/img/pair-arrow-right.svg')} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="client-login-bg justify-center">
                <div className="whole-body-mW justify-rl ">
                    <div className="btn-txt">
                        <div className="txt-24 ">Existing Client? Please login.</div>

                        <div className="btn-blog-login mouse-cursor">LOGIN</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogArticle;