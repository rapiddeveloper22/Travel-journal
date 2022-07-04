import React from "react"
import Pic from "../images/navbar.png";

export default function Navbar() {
    return (
        <nav>
            <img src={Pic} alt="navbar--pic" className="nav--logo" />
            <span id="text" className="navbar--text">my travel journal.</span>
        </nav>
    )
}
