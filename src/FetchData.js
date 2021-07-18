import React, { useState, useEffect } from "react"
import logo from './logo.svg';
import './App.css';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import StarBorderIcon from '@material-ui/icons/StarBorder';



import axios from "axios"
import "./FetchData.css"


function Fetch() {
    const [loading, setLoading] = useState(true)
    const [post, setPost] = useState([])
    const [error, setError] = useState("")

    useEffect(() => {
        axios.get("https://api-pub.bitfinex.com/v2/book/tBTCUSD/P0")
            .then((response) => {
                setLoading(false)
                setPost(response.data)
                setError("")
            })
            .catch(() => {
                setLoading(false)
                setPost([])
                setError("Something went Wrong...")
            })
    }, [])

    const newPost = post.map(function (posts) {
        return <div > BTC:  {posts}</div>
    })

    return (
        <div>
            <div className="main__funding__one">

                <p>NAME</p>
                <p>LAST</p>
                <p>24H</p>
                <p>VOL USD</p>
                <div class="tooltip"><StarBorderIcon />
                    <span class="tooltiptext">Only Favorites</span>
                </div>

            </div>
            <div className="main__fetch">
                {loading ? "Loading..." : newPost}

            </div>
            <div className="main__fetch__funding">
                <ArrowDropDownIcon />
                FUNDING FORM

            </div>
            <div className="main__fetch__button">
                <button className="fetch__button__one">USD Bid</button>
                <button className="fetch__button__Two">USD Offer</button>
            </div>

        </div>
    );
}

export default Fetch;
