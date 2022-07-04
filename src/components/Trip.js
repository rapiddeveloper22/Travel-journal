import React from "react"
import Pointer from "../images/pointer.png";

export default function Navbar(props) {
    return (
        <div className="trip--parent">
            <img src={props.image} alt="image" className="trip--image"></img>
            <div className="trip--texts">
                <img src={Pointer} alt="Pointer" className="texts--img"></img>
                <span className="texts--location">{props.location}</span>
                <span className="gmap">{props.gmaps}</span>
                <p className="texts--title">{props.title}</p>
                <p className="texts--date">{props.date}</p>
                <p className="texts--desc">
                    {props.desc}
                </p>
            </div>
        </div>
    )
}
