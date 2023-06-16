import React, { Component } from "react";
import'./Tile.css'


class Tile extends Component{
    render(){
        return(
            <div>
                <span className="flex">
                <div className="main-tail">
                    <h6 className="tile-container">450*300</h6><br></br>
                    <h3 className="tile-one">fancy prodect</h3>
                    <h5 className="tile-price">$40.00-$80.00</h5>
                    <button className="tile-btn">view option</button>
                </div>
                <br></br>
                <br></br>
                <span className="main-tail">
                    <div>
                    <button className="sale-btn">sale</button>
                    <h6 className="tile-value">450*300</h6>
                    </div><br></br>
                    <h3 className="tile-on">special item</h3>
                    <p className="rating">⭐⭐⭐⭐⭐</p>
                    <h5 className="tile-price">$20.00 $18.00</h5>
                    <button className="tile-btn-one">Add to card</button>
                </span>
                <br></br>
                <span className="main-tail">
                <button className="sale-btn">sale</button>
                    <h6 className="tile-value">450*300</h6><br></br>
                    <h3 className="tile-one">sale item</h3>
                    <h5 className="tile-price">$50.00-$25.00</h5>
                    <button className="tile-btn">view option</button>
                </span>
                <br></br>
                <span className="main-tail">
                    <h6 className="tile-container">450*300</h6><br></br>
                    <h3 className="tile-on">popular item</h3>
                    <p className="rating">⭐⭐⭐⭐⭐</p>
                    <h5 className="tile-price">$40.00</h5>
                    <button className="tile-btn">view option</button>
                </span>
                <br></br>
                </span>
                <span className="flex-sub">
                <span className="main-tail">
                <button className="sale-btn">sale</button>
                    <h6 className="tile-value">450*300</h6><br></br>
                    <h3 className="tile-one">sale item</h3>
                    <h5 className="tile-price">$50.00-$25.00</h5>
                    <button className="tile-btn">view option</button>
                </span>
                <br></br>
                <div className="main-tail">
                    <h6 className="tile-container">450*300</h6><br></br>
                    <h3 className="tile-one">fancy prodect</h3>
                    <h5 className="tile-price">$40.00-$80.00</h5>
                    <button className="tile-btn">view option</button>
                </div>
                <br></br>
                <br></br>
                <span className="main-tail">
                    <div>
                    <button className="sale-btn">sale</button>
                    <h6 className="tile-value">450*300</h6>
                    </div><br></br>
                    <h3 className="tile-on">special item</h3>
                    <p className="rating">⭐⭐⭐⭐⭐</p>
                    <h5 className="tile-price">$20.00 $18.00</h5>
                    <button className="tile-btn-one">Add to card</button>
                </span>
                <br></br>
                <span className="main-tail">
                    <h6 className="tile-container">450*300</h6><br></br>
                    <h3 className="tile-on">popular item</h3>
                    <p className="rating">⭐⭐⭐⭐⭐</p>
                    <h5 className="tile-price">$40.00</h5>
                    <button className="tile-btn">view option</button>
                </span>
                <br></br>
                </span>
            </div>
        )
    }
}
export default Tile;