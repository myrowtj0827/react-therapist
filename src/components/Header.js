import React, {useState} from 'react';

import $ from "jquery";

function Header() {

    const [menuVisible, setMenuVisible] = useState(false);

    /*$('div.menu').click(function () {
        let x = document.getElementById("menu");
        if (x.style.display === "none") {
            x.style.display = 'block';
        } else {
            x.style.display = 'none';
        }
    });*/

    const toggleMenu = () => {


        setMenuVisible(!menuVisible);
    };

    return (
        <div className="header-body">
            <div className="header-height">
                <div className="logo-mw justify-rl">
                    <div>
                        <div><img className="mouse-cursor" src={require('../assets/img/landing/app-logo.svg')} alt="Logo"/>
                        </div>
                        <div className="justify-rl justify-center">
                            <div>
                                <div className="btn-navbar mouse-cursor">Pricing</div>
                                <div className="btn-navbar mouse-cursor">Directory</div>
                                <div className="btn-navbar mouse-cursor">Features</div>
                                <div className="btn-navbar mouse-cursor">Resource</div>
                                <div className="btn-navbar mouse-cursor">Login</div>
                                <div className="btn-navbar mouse-cursor bg-signUp">Sign-Up</div>
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
                    <div className="menu-container">
                        <div className="navbar-menu justify-center txt-24 mouse-cursor btn-navbar-bb">Sign-Up</div>
                        <div className="navbar-menu justify-center txt-24 mouse-cursor btn-navbar-bb">Login</div>
                        <div className="navbar-menu justify-center txt-24 mouse-cursor btn-navbar-bb">Pricing</div>
                        <div className="navbar-menu justify-center txt-24 mouse-cursor btn-navbar-bb">Directory</div>
                        <div className="navbar-menu justify-center txt-24 mouse-cursor btn-navbar-bb">Features</div>
                        <div className="navbar-menu justify-center txt-24 mouse-cursor">Resources</div>
                    </div>
                )
            }

        </div>
    );
}

export default Header;