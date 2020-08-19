import React from 'react';

function Header() {
    return (
        <div className="header-height">
            <div className="logo-mw justify-rl">
                <div>
                    <div><img className="mouse-cursor" src={require('../assets/img/landing/app-logo.svg')} alt="Logo" /></div>
                    <div className="justify-rl justify-center">
                        <div>
                            <div className="btn-navbar mouse-cursor">Pricing</div>
                            <div className="btn-navbar mouse-cursor">Directory</div>
                            <div className="btn-navbar mouse-cursor">Features</div>
                            <div className="btn-navbar mouse-cursor">Resource</div>
                            <div className="btn-navbar mouse-cursor">Login</div>
                            <div className="btn-navbar mouse-cursor bg-signUp">Sign-Up</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Header;