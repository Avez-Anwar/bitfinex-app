import React from 'react'
import "./Footer.css"

function Footer() {
    return (
        <div className="main__footer">
            <h2>BITFINEX</h2>

            <table>
                <tr>
                    <th>Services</th>
                    <th>Products</th>
                    <th>Company</th>
                    <th>Support</th>
                    <th>Legal & Privacy</th>
                </tr>
                <tr>
                    <td>Exchange</td>
                    <td>Exchange</td>
                    <td>About</td>
                    <td>Help Center</td>
                    <td>Privacy</td>

                </tr>
                <tr>
                    <td>Margin Trading</td>
                    <td>Mobile App</td>
                    <td>Affiliates</td>
                    <td>Contact Us</td>
                    <td>Exchange Terms</td>
                </tr>
                <tr>
                    <td>Derivatives</td>
                    <td>Leading Pro</td>
                    <td>Careers</td>
                    <td>Bug Bounty</td>
                    <td>Derivative Terms</td>
                </tr>
                <tr>
                    <td>OTC</td>
                    <td>Bitfinex Borrow</td>
                    <td>Announcements</td>
                    <td>Status</td>
                    <td>General Notices & Terms</td>
                </tr>
                <tr>
                    <td>Leading</td>
                    <td>Bitfinex Pay</td>
                    <td>Blog</td>
                    <td>Learn</td>
                    <td>Bitfinex Pay Terms</td>
                </tr>
                <tr>
                    <td>Staking</td>
                    <td>Bitfinex Terminal</td>
                    <td>Press</td>
                    <td>Paper Trading</td>
                    <td>Token Specific Terms</td>
                </tr>
            </table>
            <h4 className="main__name">Copyright © 2021  All rights reserved.Created by AVEZ ANWAR</h4>
        </div >
    )
}

export default Footer
