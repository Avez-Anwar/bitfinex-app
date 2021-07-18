import React, { useState } from "react";
import { ReactComponent as CloseMenu } from "./logos/x.svg";
import { ReactComponent as MenuIcon } from "./logos/menu.svg";

import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import WifiTetheringIcon from '@material-ui/icons/WifiTethering';

const Header = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
        <div className="header">
            <div className="logo-nav">
                <div className="logo-container">
                    <a href="#">

                    </a>
                </div>
                <div className="mobile-menu" onClick={handleClick}>
                    {click ? (
                        <CloseMenu className="menu-icon" />
                    ) : (
                        <MenuIcon className="menu-icon" />
                    )}
                </div>
                <li className="option option-bit" onClick={closeMobileMenu}>
                    <a className="option-a" href="#">BITFINEX</a>
                </li>



                <ul className={click ? "nav-options active" : "nav-options"}>

                    <li className="option" onClick={closeMobileMenu}>

                        <a href="#">Trading</a>
                    </li>
                    <li className="option" onClick={closeMobileMenu}>
                        <a href="#">Derivatives</a>
                    </li>
                    <li className="option" onClick={closeMobileMenu}>
                        <a href="#">Funding</a>
                    </li>
                    <li className="option" onClick={closeMobileMenu}>
                        <a href="#">OTC</a>
                    </li>
                    <li className="option" onClick={closeMobileMenu}>
                        <a href="#">More</a>
                    </li>
                    <li className="option mobile-option" onClick={closeMobileMenu}>
                        <a href="#" >SIGN-IN</a>
                    </li>


                </ul>

            </div>

            <ul className="signin-up">
                <li className="sign-in-four" onClick={closeMobileMenu}>

                    <a href="" className="signup-btn-four">
                        <SearchIcon />
                    </a>
                </li>
                <li className="sign-in-four" onClick={closeMobileMenu}>

                    <a href="" className="signup-btn-four">
                        <WifiTetheringIcon />
                    </a>
                </li>

                <li className="sign-in-four" onClick={closeMobileMenu}>

                    <a href="" className="signup-btn-four">
                        LOG IN
                    </a>
                </li>
                <li className="sign-in-two sign-in-star" onClick={closeMobileMenu}>
                    <a href="" className="signup-btn-two">
                        Tour up
                    </a>
                </li>

                <li className="sign-in-two" onClick={closeMobileMenu}>
                    <a href="" className="signup-btn-two">
                        SIGN-UP
                    </a>
                </li>
                <li className="sign-in-three" onClick={closeMobileMenu}>
                    <a href="" className="signup-btn-three">
                        English
                    </a>
                </li>
            </ul>

        </div>
    );
};

export default Header;
