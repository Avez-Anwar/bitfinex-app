import React from 'react'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import "./Content.css"
import BitImage from "../images/Bit-Image.png"


function Content() {
    return (
        <div>
            <div className="content__heading">
                <div className="content__para">
                    <p>Charts </p>
                </div>
                <div><p>USD</p></div>

            </div>
            <img src={BitImage} alt="" />
        </div>

    )
}

export default Content
