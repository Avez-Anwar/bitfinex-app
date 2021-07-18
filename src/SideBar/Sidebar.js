import React from 'react'
import "./Sidebar.css"
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import SearchIcon from '@material-ui/icons/Search';
import Fetch from '../FetchData';


function Sidebar() {
    return (
        <div className="main__div" >
            <div className="main__content">
                <table >

                    <tr>
                        <td>USD</td>
                        <td>0.013306%</td>
                        <td>ff</td>
                    </tr>
                    <tr>
                        <td>VOL</td>
                        <td>0.00</td>
                        <td>94</td>
                    </tr>
                    <tr>
                        <td>LOW</td>
                        <td>High</td>
                        <td>80</td>
                    </tr>
                    <tr>
                        <td>FRR APR</td>
                        <td>Doe</td>
                        <td>0.015372%</td>
                    </tr>
                </table>

            </div>
            <div className="main__tickers">
                <ArrowDropDownIcon />
                TICKERS

            </div>
            <div className="main__tickers__one">

                <p>Trading</p>
                <p>Derevatives</p>
                <p>Funding</p>
                <p>M</p>
                <div class="tooltip"><StarBorderIcon />
                    <span class="tooltiptext">Only Favorites</span>
                </div>

            </div>
            <div className="main__search"><input type="text" /><SearchIcon />
                <select name="cars" id="cars">
                    <option value="volvo">ANY</option>
                    <option value="saab">USD</option>
                    <option value="opel">BTC</option>
                    <option value="audi">EUR</option>
                    <option value="audi">JRY</option>
                    <option value="audi">ETH</option>
                    <option value="audi">GPB</option>
                    <option value="audi">USDt</option>
                </select>
            </div>
            <Fetch />

        </div>
    )
}

export default Sidebar
