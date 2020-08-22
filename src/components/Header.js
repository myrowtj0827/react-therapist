import React, {useState} from 'react';

// import $ from "jquery";

function Header() {

    const [menuVisible, setMenuVisible] = useState(false);
    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <div className="header-body">
            <div className="header-height">
                <div className="logo-mw justify-rl">
                    <div>
                        <div>
                            <a className="btn-underLine" href="/home"><img className="mouse-cursor tablet-shown" src={require('../assets/img/landing/app-logo.svg')} alt="Logo"/></a>
                            <a className="btn-underLine" href="/home"><img className="mouse-cursor phone-shown" src={require('../assets/img/landing/app-logo-mobile.svg')} alt="Logo"/></a>
                        </div>

                        <div className="justify-rl justify-center">
                            <div>
                                <a className="btn-underLine" href="/pricing"><div className="btn-navbar mouse-cursor">Pricing</div></a>
                                <a className="btn-underLine" href="/directory"><div className="btn-navbar mouse-cursor">Directory</div></a>
                                <a className="btn-underLine" href="/features-page"><div className="btn-navbar mouse-cursor">Features</div></a>
                                <a className="btn-underLine" href="/" ><div className="btn-navbar mouse-cursor">Resource</div></a>
                                    <a className="btn-underLine" href="/" ><div className="btn-navbar mouse-cursor">Login</div></a>
                                        <a className="btn-underLine" href="/" ><div className="btn-navbar mouse-cursor bg-signUp">Sign-Up</div></a>
                            </div>

                            <div id="menu" className="justify-center" onClick={toggleMenu}>
                                <img className="mobile-menu mouse-cursor"
                                     src={require('../assets/img/landing/mobile-menu.svg')} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {
                menuVisible && (
                    <div className="menu-container trans-menu">
                        <a className="btn-underLine" href="/" ><div className="navbar-menu justify-center txt-24 mouse-cursor btn-navbar-bb">Sign-Up</div></a>
                        <a className="btn-underLine" href="/" ><div className="navbar-menu justify-center txt-24 mouse-cursor btn-navbar-bb">Login</div></a>
                        <a className="btn-underLine" href="/pricing"><div className="navbar-menu justify-center txt-24 mouse-cursor btn-navbar-bb">Pricing</div></a>
                        <a className="btn-underLine" href="/directory"><div className="navbar-menu justify-center txt-24 mouse-cursor btn-navbar-bb">Directory</div></a>
                        <a className="btn-underLine" href="/features-page"><div className="navbar-menu justify-center txt-24 mouse-cursor btn-navbar-bb">Features</div></a>
                        <a className="btn-underLine" href="/" ><div className="navbar-menu justify-center txt-24 mouse-cursor">Resources</div></a>
                    </div>
                )
            }

        </div>
    );
}

export default Header;